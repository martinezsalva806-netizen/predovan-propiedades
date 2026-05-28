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
        <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
          <rect x="28" y="28" width="64" height="64" rx="8" transform="rotate(45 60 60)" fill="#cc0000" />
          <path d="M47 84V40h20.1c9.4 0 15.5 5.4 15.5 13.8 0 5.9-3.2 10.2-8.7 12.4L80 84H67l-7.9-14H57V84H47Zm10-23h7.1c3.9 0 6.2-1.7 6.2-4.8 0-3.2-2.3-4.7-6.2-4.7H57V61Z" fill="#ffffff" />
        </svg>
      </div>
    ),
    size,
  )
}
