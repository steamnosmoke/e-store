import s from "./card.module.scss";
import { Link } from "react-router";
import { useProductsStore } from "../../zustand/productsStore";
import { usePage } from "../../hooks/usePage";
import { useAddToCart } from "../../hooks/useCart";
import { useToggleProduct } from "../../hooks/useWihlist";
import { useAuthStore } from "../../zustand/authStore";

export default function Card({ product }) {
  const setProduct = useProductsStore((state) => state.setProduct);
  const user = useAuthStore((state) => state.user);
  const addToWishlist = useToggleProduct();
  const addToCart = useAddToCart();
  const { products } = usePage(user.firebaseId, "wishlist");
  const isLiked = products?.some(
    (item) =>
      item.productId === product.productId &&
      item.objectId === product.objectId &&
      item.variantId === product.variantId
  );

  const onClickCard = () => {
    setProduct(product);
    window.scrollTo(0, 0);
  };

  const onAddToCart = () => {
    addToCart.mutate(product);
  };

  return (
    <>
      <section className={s.card}>
        <button
          className={s.favorite}
          onClick={() => addToWishlist.mutate(product)}
        >
          {isLiked ? (
            <svg
              className={s.liked}
              width='32.000000'
              height='32.000000'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <defs />
              <path
                id='Vector 15'
                d='M15.32 27.36L6.42 19C3.53 16.29 3.18 11.83 5.61 8.7C8.23 5.32 13.5 5.88 15.35 9.75C15.61 10.29 16.38 10.29 16.64 9.75C18.49 5.88 23.76 5.32 26.38 8.7L26.79 9.23C28.99 12.06 28.67 16.09 26.06 18.54L16.67 27.36L16 27.81L15.99 27.81L15.32 27.36Z'
                fill='#FF0000'
                fillOpacity='1.000000'
                fillRule='evenodd'
              />
              <path
                id='Vector 15'
                d='M6.42 19C3.53 16.29 3.18 11.83 5.61 8.7C8.23 5.32 13.5 5.88 15.35 9.75C15.61 10.29 16.38 10.29 16.64 9.75C18.49 5.88 23.76 5.32 26.38 8.7L26.79 9.23C28.99 12.06 28.67 16.09 26.06 18.54L16.67 27.36L16 27.81L15.99 27.81L15.32 27.36L6.42 19Z'
                stroke='#FF0000'
                strokeOpacity='1.000000'
                strokeWidth='1.400000'
              />
            </svg>
          ) : (
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
          )}
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
