import React, { useEffect } from "react";
import s from "./params.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setColor, setMemory } from "../../../../redux/slices/productSlice";

import img from "../../../../assets/images/card.png";
import screen from "./images/screen.svg";
import cpu from "./images/cpu.svg";
import cores from "./images/cores.svg";
import camera from "./images/camera.svg";
import battery from "./images/battery.svg";
import front from "./images/front.svg";
import Delivery from "./images/Delivery.svg";
import Stock from "./images/Stock.svg";
import Guaranteed from "./images/Guaranteed.svg";
import ProductGallery from "../SwiperPhoto";

const ProductParams = () => {
  const dispatch = useDispatch();
  const { product, color, memory } = useSelector((state) => state.product);
  const colors = [...new Set(product.variants?.map((v) => v.color))];
  const colorHexs = [...new Set(product.variants?.map((v) => v.colorHex))];
  const memories = [...new Set(product.variants?.map((v) => v.memory))];

  const currentVariant = product.variants?.find(
    (v) => v.color === colors[color] && v.memory === memories[memory]
  );

  const price = currentVariant.price - currentVariant.discount;
  useEffect(() => {}, []);

  if (!currentVariant) return <div>Loading variant...</div>;

  return (
    <>
      <section className={s.params}>

          <ProductGallery images={currentVariant.images}/>

        <div className={s.block}>
          <h1 className={s.title}>
            {product.name},<br />
            {currentVariant.color}
          </h1>
          <div className={s.price}>
            <p className={s.actualy_price}>{price}$</p>
            <p className={s.old_price}></p>
          </div>
          <div className={s.select_color}>
            <p className={s.color_label}>Select color:</p>
            <ul className={s.color_list}>
              {colors.map((col, colIndex) => (
                <li
                  className={`${s.color_item} ${
                    currentVariant.color === col && s.color_active
                  }`}
                  key={colIndex}
                  style={{
                    background: colorHexs[colIndex],
                    outlineColor: colorHexs[colIndex],
                  }}
                  onClick={() => dispatch(setColor(colIndex))}
                ></li>
              ))}
            </ul>
          </div>
          <ul className={s.memory_list}>
            {memories.map((mem, memIndex) => (
              <li
                className={`${s.memory_item} ${
                  memory === memIndex && s.memory_active
                }`}
                key={memIndex}
                onClick={() => dispatch(setMemory(memIndex))}
              >
                {mem}
                {mem !== 1 ? "GB" : "TB"}
              </li>
            ))}
          </ul>
          <ul className={s.characters_list}>
            <li className={s.characters_item}>
              <img src={screen} alt='' />
              <p className={s.naming}>
                Screen size
                <br />
                <span className={s.value}>
                  {product.screenSize.split(" ")[0]}
                </span>
              </p>
            </li>
            <li className={s.characters_item}>
              <img src={cpu} alt='' />
              <p className={s.naming}>
                CPU
                <br />
                <span className={s.value}>{product.processor}</span>
              </p>
            </li>
            <li className={s.characters_item}>
              <img src={cores} alt='' />
              <p className={s.naming}>
                Number of Cores
                <br />
                <span className={s.value}>{product.cpuCores}</span>
              </p>
            </li>
            <li className={s.characters_item}>
              <img src={camera} alt='' />
              <p className={s.naming}>
                Main camera
                <br />
                <span className={s.value}>{product.camera}MP</span>
              </p>
            </li>
            <li className={s.characters_item}>
              <img src={front} alt='' />
              <p className={s.naming}>
                Front camera
                <br />
                <span className={s.value}>12MP</span>
              </p>
            </li>
            <li className={s.characters_item}>
              <img src={battery} alt='' />
              <p className={s.naming}>
                Battery capacity
                <br />
                <span className={s.value}>{product.battery}</span>
              </p>
            </li>
          </ul>
          <div className={s.info}>
            <p className={s.text}>
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras <span className={s.more}>more...</span>
            </p>
            <button></button>
          </div>
          <div className={s.buttons}>
            <button className='black-line-btn'>Add to Wishlist</button>
            <button className='black-line-btn'>Add to Cart</button>
          </div>
          <ul className={s.tablets}>
            <li className={s.tablet}>
              <img src={Delivery} alt='' />
              <p className={s.naming}>
                Free Delivery
                <br />
                <span className={s.tablet_text}>1-2 day</span>
              </p>
            </li>
            <li className={s.tablet}>
              <img src={Stock} alt='' />
              <p className={s.naming}>
                in Stock
                <br />
                <span className={s.tablet_text}>Today</span>
              </p>
            </li>
            <li className={s.tablet}>
              <img src={Guaranteed} alt='' />
              <p className={s.naming}>
                Guaranteed
                <br />
                <span className={s.tablet_text}>1 year</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* <ProductGallery images={currentVariant.images} /> */}
    </>
  );
};

export default ProductParams;
