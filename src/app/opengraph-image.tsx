import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'GEOAlt - Get Your Brand Recommended by AI'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 20 }}>GEOAlt</div>
        <div style={{ fontSize: 32, opacity: 0.8 }}>
          Get Your Brand Recommended by AI
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}


