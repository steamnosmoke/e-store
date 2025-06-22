import s from "./reviews.module.scss";
import star from "./images/star.svg";
import starFilled from "./images/star-filled.svg";
import { useState } from "react";
import Stars from "./stars";
import Comment from "./Comment";
import { useAuthStore } from "../../../../zustand/authStore";
import { useProductsStore } from "../../../../zustand/productsStore";
import { useGetReviews, usePostComment } from "../../../../hooks/useProducts";

export default function Reviews({ product }) {
  const marks = ["Poor", "Below Average", "Average", "Good", "Excellent"];
  const [isCommentsOpened, setCommentsOpened] = useState(false);
  const [rating, setRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(0);
  const user = useAuthStore((state) => state.user);
  const comment = useProductsStore((state) => state.comment);
  const setComment = useProductsStore((state) => state.setComment);
  const postComment = usePostComment();
  const { data, status } = useGetReviews(product.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const date = `${year}-${month}-${day}`;

    const review = {
      userId: user.firebaseId,
      userName: user.name,
      rating,
      comment,
      date,
      productId: product.id,
    };
    postComment.mutate(review);
    setComment("");
    setRating([]);
  };

  if (status === "pending") return <h1>Loading reviews</h1>;

  return (
    <>
      <section className={s.reviews}>
        <div className={s.inner}>
          <h2 className={s.title}>Reviews</h2>
          <div className={s.rating}>
            <div className={s.left}>
              <p className={s.number}>{product.rating}</p>
              <p className={s.count_review}>of {data.reviews.length} reviews</p>
              <Stars rating={product.rating} />
            </div>

            <div className={s.right}>
              <ul className={s.list}>
                {data.rates.map((el, i) => (
                  <li className={s.item} key={i}>
                    <p className={s.item_title}>{marks[i]}</p>
                    <div className={s.bar}>
                      <div
                        className={s.bar_front}
                        style={{
                          width: `${(600 * el) / data.reviews.length}px`,
                        }}
                      ></div>
                    </div>
                    <p className={s.item_count}>{el}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {Object.keys(user).length !== 0 && (
            <form onSubmit={handleSubmit} className={s.form}>
              <textarea
                className={s.comment}
                name='comment'
                id='comment'
                placeholder='Leave Comment'
                value={comment}
                rows={4}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              {comment && (
                <>
                  <div className={s.rating_stars}>
                    {[...Array(5)].map((_, i) => {
                      const value = i + 1;
                      const isActive = value <= (ratingHover || rating);
                      return (
                        <div
                          className={s.star_item}
                          key={i + 1}
                          onClick={() => setRating(i + 1)}
                          onMouseEnter={() => setRatingHover(i + 1)}
                          onMouseLeave={() => setRatingHover(0)}
                          style={{
                            cursor: "pointer",
                            width: "24px",
                            height: "24px",
                            backgroundImage: `url(${
                              isActive ? starFilled : star
                            })`,
                            backgroundSize: "cover",
                            transition: "all 200ms",
                          }}
                        ></div>
                      );
                    })}
                  </div>

                  <button
                    type='submit'
                    className={`${s.submit} black-line-btn`}
                    disabled={!comment || !rating}
                  >
                    Send Comment
                  </button>
                </>
              )}
            </form>
          )}
          <ul className={`${s.comments} ${isCommentsOpened && s.all_list}`}>
            {data.reviews.length > 0 &&
              data.reviews.map((review, reviewIndex) => (
                <Comment key={reviewIndex} review={review} />
              ))}
          </ul>
          <button
            className={s.button}
            onClick={() => setCommentsOpened(!isCommentsOpened)}
          >
            View More{" "}
            <svg
              className={`${s.arrow} ${isCommentsOpened && s.rotate}`}
              width='24.000000'
              height='24.000000'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                id='Icon/24px/Arrow Down'
                rx='0.000000'
                width='23.000000'
                height='23.000000'
                transform='translate(0.500000 0.500000)'
                fill='#FFFFFF'
                fillOpacity='0'
              />
              <path
                id='Vector 9'
                d='M18.5 9.53L18.53 9.53C18.82 9.23 18.82 8.76 18.53 8.46C18.23 8.17 17.76 8.17 17.46 8.46L17.46 8.49L18.5 9.53ZM6.53 8.49L6.53 8.46C6.23 8.17 5.76 8.17 5.46 8.46C5.17 8.76 5.17 9.23 5.46 9.53L5.49 9.53L6.53 8.49Z'
                fill='#000000'
                fillOpacity='1.000000'
              />
              <path
                id='Vector 9'
                d='M17.46 8.46L11.46 14.46L12 15L12.53 14.46L6.53 8.46L5.46 9.53L12 16.06L18.53 9.53L17.46 8.46ZM18.5 9.53L18.53 9.53C18.82 9.23 18.82 8.76 18.53 8.46C18.23 8.17 17.76 8.17 17.46 8.46L17.46 8.49L18.5 9.53ZM6.53 8.49L6.53 8.46C6.23 8.17 5.76 8.17 5.46 8.46C5.17 8.76 5.17 9.23 5.46 9.53L5.49 9.53L6.53 8.49Z'
                fill='#000000'
                fillOpacity='1.000000'
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
