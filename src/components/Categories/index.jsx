import { useDispatch, useSelector } from "react-redux";
import s from "./categories.module.scss";
import { chooseCategory } from "../../redux/slices/productSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.product.categoryHome);
  return (
    <>
      <section className={s.categories}>
        <div className='container'>
          <div className={s.inner}>
            <h3 className={s.title}>Browse By Category</h3>
            <ul className={s.list}>
              <li
                className={`${s.item} ${category === "" && s.active}`}
                onClick={() => dispatch(chooseCategory(""))}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  width='44'
                  height='44'
                  x='0'
                  y='0'
                  viewBox='0 0 511.999 511.999'
                  className={s.all}
                >
                  <path
                    d='M437.019 74.981C388.667 26.628 324.38 0 256 0 187.62 0 123.332 26.628 74.981 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.981 181.019c48.351 48.352 112.639 74.98 181.019 74.98 68.381 0 132.667-26.628 181.02-74.981C485.371 388.667 512 324.379 512 255.999s-26.629-132.667-74.981-181.018zM96.216 96.216c22.511-22.511 48.938-39.681 77.742-50.888-7.672 9.578-14.851 20.587-21.43 32.969-7.641 14.38-14.234 30.173-19.725 47.042-19.022-3.157-36.647-7.039-52.393-11.595a230.423 230.423 0 0 1 15.806-17.528zm-33.987 43.369c18.417 5.897 39.479 10.87 62.461 14.809-6.4 27.166-10.167 56.399-11.066 86.591H30.536c2.36-36.233 13.242-70.813 31.693-101.4zm-1.635 230.053c-17.455-29.899-27.769-63.481-30.059-98.623h83.146c.982 29.329 4.674 57.731 10.858 84.186-23.454 3.802-45.045 8.649-63.945 14.437zm35.622 46.146a229.917 229.917 0 0 1-17.831-20.055c16.323-4.526 34.571-8.359 54.214-11.433 5.53 17.103 12.194 33.105 19.928 47.662 7.17 13.493 15.053 25.349 23.51 35.505-29.61-11.183-56.769-28.629-79.821-51.679zm144.768 62.331c-22.808-6.389-44.384-27.217-61.936-60.249-6.139-11.552-11.531-24.155-16.15-37.587 24.73-2.722 51.045-4.331 78.086-4.709v102.545zm0-132.578c-29.988.409-59.217 2.292-86.59 5.507-6.038-24.961-9.671-51.978-10.668-80.028h97.259v74.521zm0-104.553h-97.315c.911-28.834 4.602-56.605 10.828-82.201 27.198 3.4 56.366 5.468 86.487 6.06v76.141zm0-106.176c-27.146-.547-53.403-2.317-77.958-5.205 4.591-13.292 9.941-25.768 16.022-37.215 17.551-33.032 39.128-53.86 61.936-60.249v102.669zm209.733 6.372c17.874 30.193 28.427 64.199 30.749 99.804h-83.088c-.889-29.844-4.584-58.749-10.85-85.647 23.133-3.736 44.456-8.489 63.189-14.157zm-34.934-44.964a230.122 230.122 0 0 1 16.914 18.91c-16.073 4.389-33.972 8.114-53.204 11.112-5.548-17.208-12.243-33.305-20.02-47.941-6.579-12.382-13.758-23.391-21.43-32.969 28.802 11.207 55.23 28.377 77.74 50.888zm-144.767 174.8h97.259c-1.004 28.268-4.686 55.49-10.81 80.612-27.194-3.381-56.349-5.43-86.449-6.006v-74.606zm0-30.032v-76.041c30.005-.394 59.257-2.261 86.656-5.464 6.125 25.403 9.756 52.932 10.659 81.505h-97.315zm-.002-208.845h.001c22.808 6.389 44.384 27.217 61.936 60.249 6.178 11.627 11.601 24.318 16.24 37.848-24.763 2.712-51.108 4.309-78.177 4.674V32.139zm.002 445.976V375.657c27.12.532 53.357 2.286 77.903 5.156-4.579 13.232-9.911 25.654-15.967 37.053-17.552 33.032-39.128 53.86-61.936 60.249zm144.767-62.331c-23.051 23.051-50.21 40.496-79.821 51.678 8.457-10.156 16.34-22.011 23.51-35.504 7.62-14.341 14.198-30.088 19.68-46.906 19.465 3.213 37.473 7.186 53.515 11.859a230.268 230.268 0 0 1-16.884 18.873zm34.823-44.775c-18.635-5.991-40-11.032-63.326-15.01 6.296-26.68 10.048-55.36 11.041-84.983h83.146c-2.328 35.678-12.918 69.753-30.861 99.993z'
                    fill='#000000'
                    opacity='1'
                  ></path>
                </svg>

                <p className={s.category}>All</p>
              </li>
              <li
                className={`${s.item} ${category === "Phones" && s.active}`}
                onClick={() => dispatch(chooseCategory("Phones"))}
              >
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
              <li
                className={`${s.item} ${
                  category === "Smartwatches" && s.active
                }`}
                onClick={() => dispatch(chooseCategory("Smartwatches"))}
              >
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
              <li
                className={`${s.item} ${
                  category === "Accessories" && s.active
                }`}
                onClick={() => dispatch(chooseCategory("Accessories"))}
              >
                {/* <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs>
                    <clipPath id='clip2603_1937'>
                      <rect
                        id='Icon/Accessories'
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
                </svg> */}
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#000000'
                  height='800px'
                  width='800px'
                  version='1.1'
                  id='Capa_1'
                  viewBox='0 0 418.089 418.089'
                >
                  <path
                    id='XMLID_219_'
                    d='M209.977,170.466h26.941c3.866,0,7-3.134,7-7v-26.939c0-3.866-3.134-7-7-7h-26.941c-3.866,0-7,3.134-7,7  v26.939C202.977,167.333,206.111,170.466,209.977,170.466z M216.977,143.527h12.941v12.939h-12.941V143.527z M371.268,187.186  h-26.94c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.94c3.866,0,7-3.134,7-7v-26.94  C378.268,190.32,375.134,187.186,371.268,187.186z M364.268,214.126h-12.94v-12.94h12.94V214.126z M401.224,96.089H16.865  C7.565,96.089,0,103.655,0,112.955v192.18C0,314.434,7.565,322,16.865,322h384.359c9.299,0,16.865-7.565,16.865-16.865v-192.18  C418.089,103.655,410.523,96.089,401.224,96.089z M404.089,305.134c0,1.553-1.312,2.865-2.865,2.865H16.865  c-1.553,0-2.865-1.313-2.865-2.865v-192.18c0-1.553,1.312-2.865,2.865-2.865h384.359c1.553,0,2.865,1.313,2.865,2.865V305.134z   M317.387,170.466h53.88c3.866,0,7-3.134,7-7v-26.939c0-3.866-3.134-7-7-7h-53.88c-3.866,0-7,3.134-7,7v26.939  C310.387,167.333,313.521,170.466,317.387,170.466z M324.387,143.527h39.88v12.939h-39.88V143.527z M263.847,170.466h26.94  c3.866,0,7-3.134,7-7v-26.939c0-3.866-3.134-7-7-7h-26.94c-3.866,0-7,3.134-7,7v26.939  C256.847,167.333,259.98,170.466,263.847,170.466z M270.847,143.527h12.94v12.939h-12.94V143.527z M235.04,187.186  c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.94c3.866,0,7-3.134,7-7v-26.94c0-3.866-3.134-7-7-7H235.04z M254.98,214.126  h-12.94v-12.94h12.94V214.126z M46.821,187.186c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h53.88c3.866,0,7-3.134,7-7v-26.94  c0-3.866-3.134-7-7-7H46.821z M93.701,214.126h-39.88v-12.94h39.88V214.126z M181.17,187.186c-3.866,0-7,3.134-7,7v26.94  c0,3.866,3.134,7,7,7h26.941c3.866,0,7-3.134,7-7v-26.94c0-3.866-3.134-7-7-7H181.17z M201.111,214.126H188.17v-12.94h12.941  V214.126z M315.849,244.844h-213.61c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h213.61c3.866,0,7-3.134,7-7v-26.94  C322.849,247.978,319.715,244.844,315.849,244.844z M308.849,271.785h-199.61v-12.94h199.61V271.785z M102.239,170.466h26.939  c3.866,0,7-3.134,7-7v-26.939c0-3.866-3.134-7-7-7h-26.939c-3.866,0-7,3.134-7,7v26.939  C95.239,167.333,98.373,170.466,102.239,170.466z M109.239,143.527h12.939v12.939h-12.939V143.527z M46.82,170.466h26.94  c3.866,0,7-3.134,7-7v-26.939c0-3.866-3.134-7-7-7H46.82c-3.866,0-7,3.134-7,7v26.939C39.82,167.333,42.954,170.466,46.82,170.466z   M53.82,143.527h12.94v12.939H53.82V143.527z M73.761,244.844h-26.94c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.94  c3.866,0,7-3.134,7-7v-26.94C80.761,247.978,77.627,244.844,73.761,244.844z M66.761,271.785h-12.94v-12.94h12.94V271.785z   M315.849,187.186H288.91c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.938c3.866,0,7-3.134,7-7v-26.94  C322.849,190.32,319.715,187.186,315.849,187.186z M308.849,214.126H295.91v-12.94h12.938V214.126z M371.268,244.844h-26.94  c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.94c3.866,0,7-3.134,7-7v-26.94  C378.268,247.978,375.134,244.844,371.268,244.844z M364.268,271.785h-12.94v-12.94h12.94V271.785z M156.108,170.466h26.94  c3.866,0,7-3.134,7-7v-26.939c0-3.866-3.134-7-7-7h-26.94c-3.866,0-7,3.134-7,7v26.939  C149.108,167.333,152.243,170.466,156.108,170.466z M163.108,143.527h12.94v12.939h-12.94V143.527z M127.302,187.186  c-3.866,0-7,3.134-7,7v26.94c0,3.866,3.134,7,7,7h26.94c3.866,0,7-3.134,7-7v-26.94c0-3.866-3.134-7-7-7H127.302z M147.242,214.126  h-12.94v-12.94h12.94V214.126z'
                  />
                </svg> */}
                <svg
                  width='48.000000'
                  height='48.000000'
                  viewBox='0 0 48 48'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs />
                  <rect
                    id='Прямоугольник 1'
                    x='12.000000'
                    y='5.000000'
                    rx='12.000000'
                    width='24.000000'
                    height='37.000000'
                    fill='none'
                    fillOpacity='0'
                  />
                  <rect
                    id='Прямоугольник 1'
                    x='13.000000'
                    y='6.000000'
                    rx='11.000000'
                    width='22.000000'
                    height='35.000000'
                    stroke='#000000'
                    strokeOpacity='1.000000'
                    strokeWidth='2.000000'
                  />
                  <rect
                    id='Прямоугольник 1'
                    x='21.000000'
                    y='10.000000'
                    rx='3.000000'
                    width='6.000000'
                    height='10.000000'
                    fill='none'
                    fillOpacity='0'
                  />
                  <rect
                    id='Прямоугольник 1'
                    x='22.000000'
                    y='11.000000'
                    rx='2.000000'
                    width='4.000000'
                    height='8.000000'
                    stroke='#000000'
                    strokeOpacity='1.000000'
                    strokeWidth='2.000000'
                  />
                </svg>

                <p className={s.category}>Accessories</p>
              </li>
              <li
                className={`${s.item} ${category === "Headphones" && s.active}`}
                onClick={() => dispatch(chooseCategory("Headphones"))}
              >
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
                  {/* <rect
                    id='Icon/Headphones'
                    rx='0.000000'
                    width='47.000000'
                    height='47.000000'
                    transform='translate(0.500000 0.500000)'
                    fill='#FFFFFF'
                    fillOpacity='0'
                  /> */}
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
              <li
                className={`${s.item} ${category === "Computers" && s.active}`}
                onClick={() => dispatch(chooseCategory("Computers"))}
              >
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
                  {/* <rect
                    id='Icon/Computers'
                    rx='0.000000'
                    width='47.000000'
                    height='47.000000'
                    transform='translate(0.500000 0.500000)'
                    fill='#FFFFFF'
                    fillOpacity='0'
                  /> */}
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
              <li
                className={`${s.item} ${
                  category === "Gaming Consoles" && s.active
                }`}
                onClick={() => dispatch(chooseCategory("Gaming Consoles"))}
              >
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
                  {/* <rect
                    id='Icon/Gaming'
                    rx='0.000000'
                    width='47.000000'
                    height='47.000000'
                    transform='translate(0.500000 0.500000)'
                    fill='#FFFFFF'
                    fillOpacity='0'
                  /> */}
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
