import { ImageResponse } from '@vercel/og'
import Image from 'next/image'

export const config = {
  runtime: 'edge',
}
const og =  () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex' }}>
          <img src="https://file.freevue.dev/images/logo/blog/icon-256x256.png" alt="" />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  )
}

export default og