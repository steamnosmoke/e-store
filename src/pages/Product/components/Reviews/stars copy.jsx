import s from "./reviews.module.scss";

export default function Stars({rating}) {
  return (
    <>
      <div className={s.stars}>
        {/* <div className={s.stars_back}></div> */}
        <div
          className={s.stars_front}
          style={{ width: `${(124 * rating) / 5}px` }}
        ></div>
      </div>
    </>
  );
}
