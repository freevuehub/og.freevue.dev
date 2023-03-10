import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}
const font = fetch(new URL('../../assets/BlackHanSans-Regular.ttf', import.meta.url)).then(
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
            gap: 60
          }}
          >
          <div style={{ width: '300px', height: '300px', display: 'flex' }}>
            <img src="https://og.freevue.dev/api/logo?size=80" alt="" style={{ display: 'flex', width: '100%', filter: 'drop-shadow(0px 5px 10px #2e2e2e70)' }} />
          </div>
          {
            image && (
              <div style={{ display: 'flex', width: '300px' }}>
                <img src={image} style={{ width: '100%', display: 'flex' }} alt="" />
              </div>
            )
          }
        </div>
        <div style={{ display: 'flex', fontSize: '60px', lineHeight: '68px' }}>
          <h1>Freevue Blog</h1>
        </div>
        {
          title && <p>{title}</p>
        }
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [{
        name: 'Black Han Sans',
        data: fontData,
        weight: 400,
        style: 'normal'
      }]
    },
  )
}

export default og