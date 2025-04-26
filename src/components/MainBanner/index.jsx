import s from "./main-banner.module.scss";

import iphone from "../../assets/images/Iphone.png";

import { Link } from "react-router";

export default function MainBanner() {
  return (
    <>
      <section className={s.banner}>
        <div className='container'>
          <div className={s.inner}>
            <div className={s.block}>
              <p className={s.descr}>Pro.Beyond.</p>
              <h1 className={s.title}>
                IPhone 14 <span className={s.bold}>Pro</span>
              </h1>
              <p className={s.text}>
                Created to change everything for the better. For everyone
              </p>
              <button className='white-line-btn'>View</button>
            </div>
            <img className={s.iphone} src={iphone} alt='iphone' />
          </div>
        </div>
      </section>
    </>
  );
}
