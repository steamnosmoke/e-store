import s from "./card.module.scss";
import { Link } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../redux/slices/productSlice";
import { addToWishlist } from "../../redux/slices/wishlistSlice";
import { addToCart } from "../../redux/slices/cartSlice";

export default function Card({ product }) {
  const pr = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const currentVariant = product.variants.find(
    (item) => item.color === product.color && item.memory === product.memory
  );

  const price =
    currentVariant && currentVariant.price - currentVariant.discount;
  const onClickCard = () => {
    localStorage.setItem("product", JSON.stringify(product));
    dispatch(setProduct(product));
    console.log(product);
    window.scrollTo(0, 0);
  };

  const OnClickHeart = () => {
    // const varId = product.variants.indexOf(currentVariant);
    // const wishItem = {
    //   total: price,
    //   productId: product.id,
    //   variantId: varId,
    //   objectId: product.objectId,
    //   variant: product.variants[varId],
    //   name: product.name,
    //   category: product.category,
    // };
    dispatch(addToWishlist(product));
  };

  const onAddToCart = () => {
    const varId = product.variants.indexOf(currentVariant);
    const cartItem = {
      total: price,
      productId: product.id,
      variantId: varId,
      objectId: product.objectId,
      variant: product.variants[varId],
      name: product.name,
      category: product.category,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <>
      <section className={s.card}>
        <button className={s.favorite} onClick={() => OnClickHeart()}>
          <svg
            width='32.000000'
            height='32.000000'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs />
            <rect
              id='Icon/32px/Like'
              rx='0.000000'
              width='31.000000'
              height='31.000000'
              transform='translate(0.500000 0.500000)'
              fill='#FFFFFF'
              fillOpacity='0'
            />
            <path
              id='Vector 15'
              d='M6.42 19C3.53 16.29 3.18 11.83 5.61 8.7C8.23 5.32 13.5 5.88 15.35 9.75C15.61 10.29 16.38 10.29 16.64 9.75C18.49 5.88 23.76 5.32 26.38 8.7L26.79 9.23C28.99 12.06 28.67 16.09 26.06 18.54L16.67 27.36L16 27.81L15.99 27.81L15.32 27.36L6.42 19Z'
              stroke='#919191'
              strokeOpacity='0.770000'
              strokeWidth='1.400000'
            />
          </svg>
        </button>
        <Link
          to={`/catalog/${product.category}/${product.id}`}
          className={s.inner}
        >
          <div className={s.picture_wrapper} onClick={() => onClickCard()}>
            <img className={s.picture} src={product.images[0]} alt='product' />
          </div>
          <h3 className={s.title}>
            {product.name}, {product.color} <br />{" "}
            {product.memory === 1
              ? `${product.memory}TB`
              : `${product.memory}GB`}
          </h3>
          <p className={s.price}>{product.price - product.discount}$</p>
        </Link>
        <button
          className='black-btn'
          onClick={() => onAddToCart()}
          style={{ margin: "0 auto" }}
        >
          Add to cart
        </button>
      </section>
    </>
  );
}
