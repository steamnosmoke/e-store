import s from "./comment.module.scss";
import Stars from "../stars";
export default function Comment({ review }) {
  return (
    <>
      <section className={s.comment}>
        <header className={s.header}>
          <p className={s.name}>{review.userName}</p>
          <p className={s.date}>{review.date}</p>
        </header>
        <Stars rating={review.rating} />
        <p className={s.text}>{review.comment}</p>
      </section>
    </>
  );
}
