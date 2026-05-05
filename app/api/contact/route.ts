import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { siteConfig } from '@/lib/site-config';

// Force this route to be dynamic — never cache
export const dynamic = 'force-dynamic';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

// Very basic email-shape validator. Resend will reject malformed addresses
// regardless, but failing fast saves us a network call.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const service = (body.service || 'General Inquiry').trim();
    const message = (body.message || '').trim();

    // --- Validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are all required.' },
        { status: 400 },
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: 'Message is too long.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.founder.email;

    if (!apiKey || !fromEmail) {
      console.error(
        '[contact] Missing RESEND_API_KEY or RESEND_FROM_EMAIL env vars.',
      );
      return NextResponse.json(
        {
          error:
            'The contact form is not configured yet. Please email us directly.',
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    // --- 1) Notification to Daniel ---
    const notification = await resend.emails.send({
      from: `Upward Physio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New website inquiry — ${name}${service ? ` (${service})` : ''}`,
      html: notificationHtml({ name, email, phone, service, message }),
    });

    if (notification.error) {
      console.error('[contact] Notification email failed:', notification.error);
      return NextResponse.json(
        { error: 'We had trouble sending your message. Please try again.' },
        { status: 502 },
      );
    }

    // --- 2) Auto-reply to the visitor ---
    // We don't fail the whole request if the auto-reply fails — the
    // primary notification already went through.
    try {
      await resend.emails.send({
        from: `Daniel Keim, PT, DPT, CSCS <${fromEmail}>`,
        to: [email],
        subject: 'Thanks for reaching out to Upward Physio',
        html: autoReplyHtml({ name }),
      });
    } catch (err) {
      console.warn('[contact] Auto-reply failed (non-fatal):', err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again in a moment.' },
      { status: 500 },
    );
  }
}

// ------- HTML email templates -------
// Kept inline for portability. Plain inline styles ensure good rendering
// across Gmail, Apple Mail, Outlook, etc.

function notificationHtml({
  name,
  email,
  phone,
  service,
  message,
}: Required<Omit<ContactPayload, 'phone'>> & { phone: string }) {
  const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
    );

  return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F3EE; color: #0E2231;">
  <h1 style="font-family: Georgia, serif; font-size: 24px; margin: 0 0 8px;">New website inquiry</h1>
  <p style="margin: 0 0 24px; color: #1A3447; font-size: 14px;">A new contact form submission from upwardphysio.com.</p>
  <table cellpadding="0" cellspacing="0" style="width:100%; background: white; border-radius: 12px; overflow: hidden; border: 1px solid #E8E5DE;">
    <tr><td style="padding: 16px 20px; border-bottom: 1px solid #F5F3EE;"><strong>Name:</strong> ${escape(name)}</td></tr>
    <tr><td style="padding: 16px 20px; border-bottom: 1px solid #F5F3EE;"><strong>Email:</strong> <a href="mailto:${escape(email)}" style="color: #2EA89E;">${escape(email)}</a></td></tr>
    ${phone ? `<tr><td style="padding: 16px 20px; border-bottom: 1px solid #F5F3EE;"><strong>Phone:</strong> ${escape(phone)}</td></tr>` : ''}
    <tr><td style="padding: 16px 20px; border-bottom: 1px solid #F5F3EE;"><strong>Service:</strong> ${escape(service)}</td></tr>
    <tr><td style="padding: 16px 20px;"><strong>Message:</strong><br/><br/>${escape(message).replace(/\n/g, '<br/>')}</td></tr>
  </table>
  <p style="margin-top: 24px; font-size: 12px; color: #1A3447; opacity: 0.6;">Reply directly to this email to respond to ${escape(name)}.</p>
</div>`;
}

function autoReplyHtml({ name }: { name: string }) {
  const firstName = name.split(' ')[0] || name;
  return `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5F3EE; color: #0E2231;">
  <h1 style="font-family: Georgia, serif; font-size: 24px; margin: 0 0 16px;">Thanks for reaching out, ${firstName}.</h1>
  <p style="font-size: 15px; line-height: 1.6;">Your message landed in my inbox. I read every inquiry personally and I'll get back to you within one business day to set up a quick (free) 15-minute consult.</p>
  <p style="font-size: 15px; line-height: 1.6;">In the meantime, if anything urgent comes up, you can reply directly to this email.</p>
  <p style="font-size: 15px; line-height: 1.6;">Looking forward to it,<br/><br/><strong>Daniel Keim, PT, DPT, CSCS</strong><br/>Upward Physio<br/><span style="color: #1A3447; opacity: 0.7;">Move Better. Live Better.</span></p>
</div>`;
}
