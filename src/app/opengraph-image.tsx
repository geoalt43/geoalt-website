import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Geoalt - Get Your Brand Visible Across AI Search Engines'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

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
        <div style={{ fontSize: 64, marginBottom: 20 }}>Geoalt</div>
        <div style={{ fontSize: 32, opacity: 0.8, textAlign: 'center', padding: '0 40px' }}>
          Get Your Brand Visible Across AI Search Engines and Control How It Appears on Leading LLMs
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}


