import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF7F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: '#F97316',
          }}
        />

        {/* Large decorative text */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '80px',
            fontSize: '220px',
            fontWeight: 800,
            color: '#F97316',
            opacity: 0.06,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          LULU
        </div>

        {/* Brand label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#F97316',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.25em',
              color: '#F97316',
              textTransform: 'uppercase',
            }}
          >
            Lulu's Streetfood
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#1A1A1A',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            maxWidth: '820px',
          }}
        >
          Skräddarsydda{' '}
          <span style={{ color: '#F97316' }}>Matvagnar</span>
          {'\n'}i Sverige
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: '20px',
            fontSize: '22px',
            color: '#1A1A1A',
            opacity: 0.45,
            fontWeight: 400,
          }}
        >
          Designade för prestanda. Byggda för passion.
        </div>
      </div>
    ),
    { ...size }
  )
}
