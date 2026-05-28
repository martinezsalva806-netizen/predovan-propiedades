import { ImageResponse } from 'next/og'

export const size = {
  width: 96,
  height: 96,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '22px',
          background: 'linear-gradient(135deg, #0f1318 0%, #171d25 100%)',
          border: '2px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #e12222 0%, #7f1313 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 34,
            fontWeight: 700,
            fontFamily: 'serif',
          }}
        >
          P
        </div>
      </div>
    ),
    size,
  )
}
