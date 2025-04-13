import s from "./tablets.module.scss";

import mac from "../../assets/images/MacBook.png";
import ps from "../../assets/images/ps.png";
import ap from "../../assets/images/ap-max.png";
import vision from "../../assets/images/vision.png";

import { Link } from "react-router";

export default function Tablets() {
  return (
    <>
      <section className={s.tablets}>
        <div className={s.inner}>
          <div className={s.left}>
            <div className={s.up}>
              <div
                className={s.ps}
                style={{ backgroundImage: `url(${ps})` }}
              ></div>
              <div className={s.block}>
                <h2 className={s.title}>Playstation 5</h2>
                <p className={s.text}>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>
            <div className={s.left}>
              <div
                className={s.ap}
                style={{ backgroundImage: `url(${ap})` }}
              ></div>
              <div className={s.block}>
                <h2 className={s.title}>
                  Apple
                  <br />
                  AirPods
                  <br /> <span>Max</span>
                </h2>
                <p className={s.text}>
                  Computational audio. Listen, it's powerfulf
                </p>
              </div>
            </div>
            <div className={s.right}>
              <div
                className={s.ps}
                style={{ backgroundImage: `url(${vision})` }}
              ></div>
              <div className={s.block}>
                <h2 className={s.title}>
                  Apple <br />
                  Vision <span>Pro</span>
                </h2>
                <p className={s.text}>
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
          <div className={s.right}>
            <div className={s.block}>
              <h2 className={s.title}>
                Macbook <span>Air</span>
              </h2>
              <p className={s.text}>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <button className='black-line-btn'>View</button>
            </div>
            <div
              className={s.mac}
              style={{ backgroundImage: `url(${mac})` }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}
