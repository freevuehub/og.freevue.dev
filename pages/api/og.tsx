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
          <div style={{ width: '300px', height: '300px', display: 'flex', overflow: 'visible' }}>
            <svg viewBox="0 0 8560 7980" style={{ width: '100%', height: '100%', display: 'flex', filter: 'drop-shadow(0px 5px 10px #2e2e2e70)' }}>
              <path fill="rgb(102, 103, 171)" d="M6 7961 c-8 -12 20 -363 40 -504 72 -521 207 -933 401 -1225 70 -106 224 -262 318 -324 125 -81 128 -89 110 -279 -40 -409 -40 -981 0 -1359 103 -988 408 -1769 937 -2401 116 -138 335 -359 447 -449 68 -55 79 -69 75 -89 -6 -28 2 -36 146 -139 431 -311 972 -555 1559 -702 73 -18 86 -19 105 -7 18 12 42 10 196 -19 299 -57 503 -77 775 -78 266 0 392 13 596 64 442 111 824 325 1207 673 285 259 556 609 700 905 37 77 75 141 91 153 14 11 93 57 174 102 399 221 628 461 669 703 15 92 0 166 -46 227 -90 120 -326 206 -608 222 -56 3 -580 10 -1162 14 -959 8 -1060 10 -1068 25 -5 9 -13 16 -18 16 -16 0 -11 -60 9 -133 45 -155 111 -537 111 -639 l0 -47 -57 -7 c-70 -8 -310 10 -413 32 -266 56 -536 192 -715 359 l-58 55 6 72 c17 200 20 328 7 328 -7 0 -18 -8 -25 -17 -12 -16 -21 -16 -146 5 -389 64 -957 272 -1341 489 -682 387 -1098 878 -1254 1481 -19 73 -34 156 -34 184 0 79 22 105 142 167 396 207 711 513 943 915 120 210 229 485 285 719 18 76 18 107 -1 107 -6 0 -85 -33 -178 -74 -377 -168 -696 -276 -966 -327 -171 -33 -385 -33 -505 0 -274 74 -700 290 -1095 554 -108 73 -258 184 -303 226 -35 32 -47 37 -56 22z"></path>
              <path fill="rgb(192, 150, 212)" d="M4523 4484 c-58 -9 -57 -7 -34 -327 23 -319 30 -686 17 -925 l-8 -153 53 -50 c132 -124 429 -286 623 -339 164 -45 427 -71 569 -56 l67 8 -6 76 c-9 115 -42 341 -70 477 -26 129 -91 374 -103 390 -4 6 -23 48 -41 95 -100 256 -277 516 -427 629 -75 56 -226 127 -320 151 -80 20 -256 33 -320 24z"></path>
              <path fill="rgb(192, 150, 212)" d="M2300 1268 c-33 -60 -67 -102 -135 -165 -179 -169 -427 -360 -701 -539 -79 -52 -148 -103 -154 -114 -6 -12 -10 -33 -8 -48 3 -22 23 -38 135 -103 332 -191 752 -289 1193 -276 502 14 919 136 1449 425 76 41 82 46 60 53 -13 4 -91 26 -174 48 -595 159 -1187 447 -1582 767 l-38 32 -45 -80z"></path>
            </svg>
          </div>
          {
            image && (
              <div style={{ display: 'flex', width: '300px' }}>
                <img src={image} style={{ width: '100%', display: 'flex', filter: 'drop-shadow(0px 5px 10px #2e2e2e70)' }} alt="" />
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