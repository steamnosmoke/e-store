import s from "./header.module.scss";
import logo from "../../assets/images/Logo.svg";

import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <div className='container'>
          <div className={s.inner}>
            <Link to='#'>
              <img src={logo} alt='logotype' className={s.logo} />
            </Link>
            <div className={s.search}>
              <svg
                width='24.000000'
                height='24.000000'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <defs>
                  <clipPath id='clip2603_2811'>
                    <rect
                      id='Icon/32px/Search'
                      rx='0.000000'
                      width='23.000000'
                      height='23.000000'
                      transform='translate(0.500000 0.500000)'
                      fill='white'
                      fillOpacity='0'
                    />
                  </clipPath>
                </defs>
                <g clipPath='url(#clip2603_2811)'>
                  <path
                    id='Vector'
                    d='M20 20L16.22 16.21M16.21 16.21C14.87 17.56 13.05 18.31 11.15 18.31C9.25 18.31 7.43 17.56 6.09 16.21C4.75 14.87 4 13.05 4 11.15C4 9.25 4.75 7.43 6.09 6.09C7.43 4.75 9.25 4 11.15 4C13.05 4 14.87 4.75 16.21 6.09C17.56 7.43 18.31 9.25 18.31 11.15C18.31 13.05 17.56 14.87 16.21 16.21Z'
                    stroke='#989898'
                    strokeOpacity='1.000000'
                    strokeWidth='1.500000'
                    strokeLinecap='round'
                  />
                </g>
              </svg>

              <input
                className={s.input}
                type='text'
                placeholder='Search'
              ></input>
            </div>
            <ul className={s.nav}>
              <li className={s.nav_el.active}>
                <Link to='#'>Home</Link>
              </li>
              <li className={s.nav_el}>
                <Link to='#'>About</Link>
              </li>
              <li className={s.nav_el}>
                <Link to='#'>Contact Us</Link>
              </li>
              <li className={s.nav_el}>
                <Link to='#'>Blog</Link>
              </li>
            </ul>
            <ul className={s.buttons}>
              <li className={s.button}>
                <Link to='#'>
                  <svg
                    width='32.000000'
                    height='32.000000'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs>
                      <clipPath id='clip156_1342'>
                        <rect
                          id='Icon/32px/Favorites'
                          rx='0.000000'
                          width='31.000000'
                          height='31.000000'
                          transform='translate(0.500000 0.500000)'
                          fill='white'
                          fillOpacity='0'
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id='Icon/32px/Favorites'
                      rx='0.000000'
                      width='31.000000'
                      height='31.000000'
                      transform='translate(0.500000 0.500000)'
                      fill='#FFFFFF'
                      fillOpacity='0'
                    />
                    <g clipPath='url(#clip156_1342)'>
                      <path
                        id='Vector'
                        d='M6 11.95C6 14.15 6.87 19.39 15.48 24.69C15.64 24.78 15.81 24.83 16 24.83C16.18 24.83 16.35 24.78 16.51 24.69C25.12 19.39 26 14.15 26 11.95C26 9.21 23.76 7 21 7C18.23 7 16 10 16 10C16 10 13.76 7 11 7C8.23 7 6 9.21 6 11.95Z'
                        stroke='#191919'
                        strokeOpacity='1.000000'
                        strokeWidth='1.500000'
                        strokeLinejoin='round'
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className={s.button}>
                <Link to='#'>
                  <svg
                    width='32.000000'
                    height='32.000000'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs>
                      <clipPath id='clip156_1332'>
                        <rect
                          id='Cart1'
                          rx='0.000000'
                          width='31.000000'
                          height='31.000000'
                          transform='translate(0.500000 0.500000)'
                          fill='white'
                          fillOpacity='0'
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id='Cart1'
                      rx='0.000000'
                      width='31.000000'
                      height='31.000000'
                      transform='translate(0.500000 0.500000)'
                      fill='#FFFFFF'
                      fillOpacity='0'
                    />
                    <g clipPath='url(#clip156_1332)'>
                      <path
                        id='Vector'
                        d='M11 27C10.44 27 10 26.55 10 26C10 25.44 10.44 25 11 25C11.55 25 12 25.44 12 26C12 26.55 11.55 27 11 27ZM25 27C24.44 27 24 26.55 24 26C24 25.44 24.44 25 25 25C25.55 25 26 25.44 26 26C26 26.55 25.55 27 25 27ZM3 5L7 5L10 22L26 22M10 16.66L25.59 16.66C25.7 16.66 25.81 16.62 25.9 16.55C25.99 16.48 26.05 16.37 26.08 16.26L27.88 7.26C27.89 7.19 27.89 7.11 27.87 7.04C27.85 6.97 27.82 6.9 27.77 6.84C27.73 6.79 27.67 6.74 27.6 6.71C27.53 6.68 27.46 6.66 27.39 6.66L8 6.66'
                        stroke='#191919'
                        strokeOpacity='1.000000'
                        strokeWidth='1.500000'
                        strokeLinejoin='round'
                        strokeLinecap='round'
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              <li className={s.button}>
                <Link to='#'>
                  <svg
                    width='32.000000'
                    height='32.000000'
                    viewBox='0 0 32 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <defs>
                      <clipPath id='clip156_1340'>
                        <rect
                          id='Icon/32px/User'
                          rx='0.000000'
                          width='31.000000'
                          height='31.000000'
                          transform='translate(0.500000 0.500000)'
                          fill='white'
                          fillOpacity='0'
                        />
                      </clipPath>
                    </defs>
                    <rect
                      id='Icon/32px/User'
                      rx='0.000000'
                      width='31.000000'
                      height='31.000000'
                      transform='translate(0.500000 0.500000)'
                      fill='#FFFFFF'
                      fillOpacity='0'
                    />
                    <g clipPath='url(#clip156_1340)'>
                      <path
                        id='Vector'
                        d='M24 27L24 24.33C24 22.91 23.52 21.56 22.67 20.56C21.82 19.56 20.66 19 19.46 19L11.53 19C10.33 19 9.17 19.56 8.32 20.56C7.47 21.56 7 22.91 7 24.33L7 27M16.5 14C14.01 14 12 11.98 12 9.5C12 7.01 14.01 5 16.5 5C18.98 5 21 7.01 21 9.5C21 11.98 18.98 14 16.5 14Z'
                        stroke='#191919'
                        strokeOpacity='1.000000'
                        strokeWidth='1.500000'
                        strokeLinejoin='round'
                        strokeLinecap='round'
                      />
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
