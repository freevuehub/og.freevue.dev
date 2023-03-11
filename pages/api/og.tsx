import { ImageResponse } from '@vercel/og'
import { COLOR_LIST } from '~/contant'

export const config = {
  runtime: 'edge',
}
const font = fetch(new URL('../../assets/BMDOHYEON.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
)
const [primary, secodary] = COLOR_LIST[2023]
const primaryRGB = `rgb(${primary.join(',')})`
const og = async (props: any) => {
  const fontData = await font
  const image = props.nextUrl.searchParams.get('image')
  const title = props.nextUrl.searchParams.get('title')
  const desc = props.nextUrl.searchParams.get('desc')
  
  return new ImageResponse(
    (
      <div
        style={{
          // background: 'rgb(24 24 27)',
          border: `14px solid ${primaryRGB}`,
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
        <h1
          style={{
            fontSize: '36px',
            lineHeight: '1px',
            position: 'absolute',
            left: '10px',
            top: '18px',
            fontFamily: 'EliceDigitalBaeum-Bd',
          }}
        >
          프리뷰 블로그 {title ? '/' : ''} {title}
        </h1>
        {
          <p
            style={{
              fontSize: '30px',
              lineHeight: '1px',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '18px',
            }}
          >
            {desc}
          </p>
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