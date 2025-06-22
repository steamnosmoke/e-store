import s from "./params.module.scss";
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
import { useProductsStore } from "../../../../zustand/productsStore";
import { useAddToCart } from "../../../../hooks/useCart";
import { useToggleProduct } from "../../../../hooks/useWihlist";

const ProductParams = ({ product }) => {
  const addToCart = useAddToCart();
  const setProduct = useProductsStore((state) => state.setProduct);
  const addToWishlist = useToggleProduct();
  const colors = [...new Set(product.variants?.map((v) => v.color))];
  const colorHexs = [...new Set(product.variants?.map((v) => v.colorHex))];
  const memories = [...new Set(product.variants?.map((v) => v.memory))];

  const setItem = (color, memory) => {
    const currentVariant = product.variants.find(
      (item) => item.color === color && item.memory === memory
    );
    const variantId = product.variants.indexOf(currentVariant);
    const objectId = `${product.id}x${variantId}`;
    const price =
      currentVariant && currentVariant.price - currentVariant.discount;
    const item = {
      ...product,
      ...currentVariant,
      variantId,
      objectId,
      price,
    };
    setProduct(item);
    return item;
  };

  const onAddToCart = () => {
    const item = setItem(product.color, product.memory);
    addToCart.mutate(item);
  };

  if (!product) return <div>Loading variant...</div>;

  return (
    <>
      <section className={s.params}>
        <ProductGallery images={product.images} />

        <div className={s.block}>
          <h1 className={s.title}>
            {product.name},<br />
            {product.color}
          </h1>
          <div className={s.price}>
            <p className={s.actualy_price}>{product.price}$</p>
            <p className={s.old_price}></p>
          </div>
          <div className={s.select_color}>
            <p className={s.color_label}>Select color:</p>
            <ul className={s.color_list}>
              {colors.map((col, colIndex) => (
                <li
                  className={`${s.color_item} ${
                    product.color === col && s.color_active
                  }`}
                  key={colIndex}
                  style={{
                    background: colorHexs[colIndex],
                    outlineColor: colorHexs[colIndex],
                  }}
                  onClick={() => setItem(col, product.memory)}
                ></li>
              ))}
            </ul>
          </div>
          <ul className={s.memory_list}>
            {memories.map((mem, memIndex) => (
              <li
                className={`${s.memory_item} ${
                  product.memory === mem && s.memory_active
                }`}
                key={memIndex}
                onClick={() => setItem(product.color, mem)}
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
            <p className={s.text}>{product.specs.description}</p>
            <button></button>
          </div>
          <div className={s.buttons}>
            <button
              className='black-line-btn'
              onClick={() => addToWishlist.mutate(product)}
            >
              Add to Wishlist
            </button>
            <button className='black-line-btn' onClick={() => onAddToCart()}>
              Add to Cart
            </button>
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
                <span className={s.tablet_text}>
                  {product.stock > 0 ? "Today" : "For order"}
                </span>
              </p>
            </li>
            <li className={s.tablet}>
              <img src={Guaranteed} alt='' />
              <p className={s.naming}>
                Guaranteed
                <br />
                <span className={s.tablet_text}>
                  {product.specs.guarantee.split(" ")[0] +
                    " " +
                    product.specs.guarantee.split(" ")[1]}
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProductParams;
