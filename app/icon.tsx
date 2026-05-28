import { ImageResponse } from 'next/og'

export const size = { width: 120, height: 120 }
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
          background: 'transparent',
        }}
      >
        <svg viewBox="0 0 64 64" width="120" height="120" aria-hidden="true">
          <path d="M32 4 58 20.5 49 60H15L6 20.5 32 4Z" fill="#cc0000" />
          <path d="M24 50V14h17.4c8.3 0 13.6 4.8 13.6 12 0 5.1-2.8 8.9-7.4 10.7L56 50H46l-8-11.5h-5.4V50H24Zm8-19.4h7.1c3.8 0 6.1-1.7 6.1-4.7 0-3.2-2.2-4.7-6.1-4.7H32v9.4Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    size,
  )
}
