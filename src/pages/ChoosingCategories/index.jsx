import { useDispatch, useSelector } from "react-redux";
import s from "./categories.module.scss";

import { Link } from "react-router";
import { chooseCategory } from "../../redux/slices/productSlice";

export default function ChoosingCategories() {
  const dispatch = useDispatch()
  const category = useSelector(state => state.product.category)
  return (
    <>
      <section className={s.categories}>
        <div className='container'>
          <div className={s.inner}>
            <h3 className={s.title}>Browse By Category</h3>
            <ul className={s.list}>
              <li className={`${s.item} ${category==='phones' && s.active}`} onClick={()=>dispatch(chooseCategory('phones'))}>
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1946'>
                      <rect
                        id='Icon/Phones'
                        rx='0.000000'
                        width='47.000000'
                        height='47.000000'
                        transform='translate(0.500000 0.500000)'
                        fill='white'
                        fillOpacity='0'
                      />
                    </clipPath>
                  </defs>
                  <g clipPath='url(#clip2603_1946)'>
                    <path
                      id='Vector'
                      d='M33.37 5.25C34.66 5.25 35.71 6.29 35.71 7.59L35.71 40.4C35.71 41.7 34.66 42.75 33.37 42.75L14.62 42.75C13.33 42.75 12.28 41.7 12.28 40.4L12.28 7.59C12.28 6.29 13.33 5.25 14.62 5.25L33.37 5.25Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M22 6L26.68 6'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='3.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Vector'
                      d='M24 37.71L24 37.74'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.500000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <line
                      id='Line 8'
                      x1='13.000000'
                      y1='34.000000'
                      x2='35.000000'
                      y2='34.000000'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                    />
                  </g>
                </svg>

                <p className={s.category}>Phones</p>
              </li>
              <li className={`${s.item} ${category==='smartwatches' && s.active}`}  onClick={()=>dispatch(chooseCategory('smartwatches'))}>
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1940'>
                      <rect
                        id='Icon/Smart Watches'
                        rx='0.000000'
                        width='47.000000'
                        height='47.000000'
                        transform='translate(0.500000 0.500000)'
                        fill='white'
                        fillOpacity='0'
                      />
                    </clipPath>
                  </defs>
                  <g clipPath='url(#clip2603_1940)'>
                    <path
                      id='Vector'
                      d='M30 12C33.31 12 36 14.68 36 18L36 30C36 33.31 33.31 36 30 36L18 36C14.68 36 12 33.31 12 30L12 18C12 14.68 14.68 12 18 12L30 12Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M18 36L18 42L30 42L30 36'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Vector'
                      d='M18 12L18 6L30 6L30 12'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <line
                      id='Line 11'
                      x1='20.714355'
                      y1='17.000000'
                      x2='20.714355'
                      y2='30.000000'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                    />
                    <line
                      id='Line 10'
                      x1='24.714355'
                      y1='22.000000'
                      x2='24.714355'
                      y2='30.000000'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                    />
                    <line
                      id='Line 9'
                      x1='28.714355'
                      y1='20.000000'
                      x2='28.714355'
                      y2='30.000000'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                    />
                  </g>
                </svg>

                <p className={s.category}>Smart Watches</p>
              </li>
              <li className={`${s.item} ${category==='cameras' && s.active}`}  onClick={()=>dispatch(chooseCategory('cameras'))}>
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1937'>
                      <rect
                        id='Icon/Cameras'
                        rx='0.000000'
                        width='47.000000'
                        height='47.000000'
                        transform='translate(0.500000 0.500000)'
                        fill='white'
                        fillOpacity='0'
                      />
                    </clipPath>
                  </defs>
                  <g clipPath='url(#clip2603_1937)'>
                    <path
                      id='Vector'
                      d='M12 14C13.06 14 14.07 13.57 14.82 12.82C15.57 12.07 16 11.06 16 10C16 9.46 16.21 8.96 16.58 8.58C16.96 8.21 17.46 8 18 8L30 8C30.53 8 31.03 8.21 31.41 8.58C31.78 8.96 32 9.46 32 10C32 11.06 32.42 12.07 33.17 12.82C33.92 13.57 34.93 14 36 14L38 14C39.06 14 40.07 14.42 40.82 15.17C41.57 15.92 42 16.93 42 18L42 36C42 37.06 41.57 38.07 40.82 38.82C40.07 39.57 39.06 40 38 40L10 40C8.93 40 7.92 39.57 7.17 38.82C6.42 38.07 6 37.06 6 36L6 18C6 16.93 6.42 15.92 7.17 15.17C7.92 14.42 8.93 14 10 14L12 14Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M24 32C20.68 32 18 29.31 18 26C18 22.68 20.68 20 24 20C27.31 20 30 22.68 30 26C30 29.31 27.31 32 24 32Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>

                <p className={s.category}>Cameras</p>
              </li>
              <li className={`${s.item} ${category==='headphones' && s.active}`}  onClick={()=>dispatch(chooseCategory('headphones'))}>
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1943'>
                      <rect
                        id='Icon/Headphones'
                        rx='0.000000'
                        width='47.000000'
                        height='47.000000'
                        transform='translate(0.500000 0.500000)'
                        fill='white'
                        fillOpacity='0'
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id='Icon/Headphones'
                    rx='0.000000'
                    width='47.000000'
                    height='47.000000'
                    transform='translate(0.500000 0.500000)'
                    fill='#FFFFFF'
                    fillOpacity='0'
                  />
                  <g clipPath='url(#clip2603_1943)'>
                    <path
                      id='Vector'
                      d='M14 26C16.2 26 18 27.79 18 30L18 36C18 38.2 16.2 40 14 40L12 40C9.79 40 8 38.2 8 36L8 30C8 27.79 9.79 26 12 26L14 26Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M36 26C38.2 26 40 27.79 40 30L40 36C40 38.2 38.2 40 36 40L34 40C31.79 40 30 38.2 30 36L30 30C30 27.79 31.79 26 34 26L36 26Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M8 30L8 24C8 19.75 9.68 15.68 12.68 12.68C15.68 9.68 19.75 8 24 8C28.24 8 32.31 9.68 35.31 12.68C38.31 15.68 40 19.75 40 24L40 30'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                  </g>
                </svg>

                <p className={s.category}>Headphones</p>
              </li>
              <li className={`${s.item} ${category==='computers' && s.active}`} onClick={()=>dispatch(chooseCategory('computers'))}>
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1934'>
                      <rect
                        id='Icon/Computers'
                        rx='0.000000'
                        width='47.000000'
                        height='47.000000'
                        transform='translate(0.500000 0.500000)'
                        fill='white'
                        fillOpacity='0'
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id='Icon/Computers'
                    rx='0.000000'
                    width='47.000000'
                    height='47.000000'
                    transform='translate(0.500000 0.500000)'
                    fill='#FFFFFF'
                    fillOpacity='0'
                  />
                  <g clipPath='url(#clip2603_1934)'>
                    <path
                      id='Vector'
                      d='M40 8C41.1 8 42 8.89 42 10L42 30C42 31.1 41.1 32 40 32L8 32C6.89 32 6 31.1 6 30L6 10C6 8.89 6.89 8 8 8L40 8Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M14 40L34 40'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Vector'
                      d='M18 32L18 40'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Vector'
                      d='M30 32L30 40'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Line 12'
                      d='M6.85 27.42L41.14 27.42'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinecap='round'
                    />
                  </g>
                </svg>

                <p className={s.category}>Computers</p>
              </li>
              <li className={`${s.item} ${category==='gaming' && s.active}`} onClick={()=>dispatch(chooseCategory('gaming'))}>
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1931'>
                      <rect
                        id='Icon/Gaming'
                        rx='0.000000'
                        width='47.000000'
                        height='47.000000'
                        transform='translate(0.500000 0.500000)'
                        fill='white'
                        fillOpacity='0'
                      />
                    </clipPath>
                  </defs>
                  <rect
                    id='Icon/Gaming'
                    rx='0.000000'
                    width='47.000000'
                    height='47.000000'
                    transform='translate(0.500000 0.500000)'
                    fill='#FFFFFF'
                    fillOpacity='0'
                  />
                  <g clipPath='url(#clip2603_1931)'>
                    <path
                      id='Vector'
                      d='M40 12C42.2 12 44 13.79 44 16L44 32C44 34.2 42.2 36 40 36L8 36C5.79 36 4 34.2 4 32L4 16C4 13.79 5.79 12 8 12L40 12Z'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                    />
                    <path
                      id='Vector'
                      d='M12 24L20 24M16 20L16 28'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='2.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Vector'
                      d='M30 22L30 22.02'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='3.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                    <path
                      id='Vector'
                      d='M36 26L36 26.02'
                      stroke='#000000'
                      strokeOpacity='1.000000'
                      strokeWidth='3.000000'
                      strokeLinejoin='round'
                      strokeLinecap='round'
                    />
                  </g>
                </svg>

                <p className={s.category}>Gaming</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
