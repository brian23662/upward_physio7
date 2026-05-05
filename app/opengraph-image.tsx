import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Upward Physio — Move Better. Live Better.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Dynamic Open Graph image for social cards.
 * Renders the brand lockup on the navy background from the logo guide.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0E2231',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {/* Logo mark */}
          <svg width="120" height="120" viewBox="0 0 100 100">
            <path
              d="M 18 50 A 32 32 0 0 1 82 50"
              fill="none"
              stroke="#3FBFB5"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              d="M 14 52 A 36 36 0 0 0 86 52"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </svg>
          <div
            style={{
              fontSize: 96,
              color: 'white',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            <span>Upward</span>
            <span style={{ color: '#3FBFB5' }}>Physio</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          Move Better. Live Better.
        </div>
      </div>
    ),
    { ...size },
  );
}
