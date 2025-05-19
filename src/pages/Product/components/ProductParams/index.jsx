
import s from "./params.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../../../../redux/slices/productSlice";

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
import { addToCart } from "../../../../redux/slices/cartSlice";
import { addToWishlist } from "../../../../redux/slices/wishlistSlice";

const ProductParams = ({ product }) => {
  const dispatch = useDispatch();
  const { color, memory } = useSelector((state) => state.product);
  const { cart, activeItem } = useSelector((state) => state.cart);

  const colors = [...new Set(product.variants?.map((v) => v.color))];
  const colorHexs = [...new Set(product.variants?.map((v) => v.colorHex))];
  const memories = [...new Set(product.variants?.map((v) => v.memory))];

  const currentVariant = product.variants.find(
    (item) => item.color === color && item.memory === memory
  );

  const price =
    currentVariant && currentVariant.price - currentVariant.discount;

  const onAddToCart = () => {
    const cartItem = {
      total: price,
      productId: product.id,
      variantId: product.variants.indexOf(currentVariant),
      objectId: product.objectId,
      variant: currentVariant, 
      name: product.name,
      category: product.category,
    };
    dispatch(addToCart(cartItem));
  };

  const onChangeColor = (color)=>{
    const updatedItem = {...product, color}
    localStorage.removeItem("product")
    dispatch(setProduct(updatedItem))
    localStorage.setItem("product", JSON.stringify(updatedItem))
  }
  const onChangeMemory = (memory)=>{
    const updatedItem = {...product, memory}
    localStorage.removeItem("product")
    dispatch(setProduct(updatedItem))
    localStorage.setItem("product", JSON.stringify(updatedItem))
  }

  if (!currentVariant) return <div>Loading variant...</div>;

  return (
    <>
      <section className={s.params}>
        <ProductGallery images={currentVariant.images} />

        <div className={s.block}>
          <h1 className={s.title}>
            {product.name},<br />
            {product.color}
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
                    color === col && s.color_active
                  }`}
                  key={colIndex}
                  style={{
                    background: colorHexs[colIndex],
                    outlineColor: colorHexs[colIndex],
                  }}
                  onClick={()=>onChangeColor(col)}
                ></li>
              ))}
            </ul>
          </div>
          <ul className={s.memory_list}>
            {memories.map((mem, memIndex) => (
              <li
                className={`${s.memory_item} ${
                  memory === mem && s.memory_active
                }`}
                key={memIndex}
                onClick={()=>onChangeMemory(mem)}
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
            <button className='black-line-btn' onClick={()=>dispatch(addToWishlist(product))}>Add to Wishlist</button>
            <button
              disabled={activeItem?.count === currentVariant.stock}
              className='black-line-btn'
              onClick={() => onAddToCart()}
            >
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
