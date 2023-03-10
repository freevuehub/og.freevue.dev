import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}
const font = fetch(new URL('../../assets/BMDOHYEON.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
)
const og = async (props: any) => {
  const fontData = await font
  const image = props.nextUrl.searchParams.get('image')
  const title = props.nextUrl.searchParams.get('title')
  
  return new ImageResponse(
    (
      <div
        style={{
          // background: 'rgb(24 24 27)',
          background: '#e0e0e0',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#2e2e2e',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%',
            gap: 40
          }}
          >
          <img src="https://og.freevue.dev/api/logo?size=80" alt="" style={{ width: '300px', height: '300px', display: 'flex', filter: 'drop-shadow(0px 5px 10px #2e2e2e70)' }} />
          {
            image && (
              <div style={{ display: 'flex', width: '300px', padding: '30px' }}>
                <img src={image} style={{ width: '100%', display: 'flex' }} alt="" />
              </div>
            )
          }
        </div>
        <h1 style={{ fontSize: '80px', lineHeight: '40px' }}>프리뷰 블로그</h1>
        {
          title && (
            <p style={{ fontSize: '40px', lineHeight: '50px' }}>{title}</p>
          )
        }
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [{
        name: 'EliceDigitalBaeum-Bd',
        data: fontData,
        style: 'normal'
      }]
    },
  )
}

export default og