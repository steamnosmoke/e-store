import s from "./search.module.scss";
import { useEffect, useState, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { ClearValue, Searching } from "../../redux/slices/searchSlice";

export default function Search() {
  const inputValue = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const placeholder = "Search";

  const [iconColor, setIconColor] = useState("%23989898");
  const [isFocus, setFocus] = useState(false);
  // const [placeholder, setPlaceholder] = useState("");

  const onMauseIn = () => {
    setIconColor("rgb(53, 53, 53)");
  };
  const onMauseOut = () => {
    setIconColor(isFocus ? "rgb(53, 53, 53)" : "%23989898");
  };
  const changeSvgStroke = () => {
    setFocus(true);
    setIconColor("rgb(53, 53, 53)");
  };

  useEffect(() => {
    const ClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFocus(false);
        setIconColor("%23989898");
      }
    };

    document.addEventListener("mousedown", ClickOutside);

    return () => {
      document.removeEventListener("mousedown", ClickOutside);
    };
  }, []);

  useEffect(() => {
    
  }, []);
  return (
    <>
      <div className={s.search} ref={ref}>
        <input
          className={s.input}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L16.22 16.21M16.21 16.21C14.87 17.56 13.05 18.31 11.15 18.31C9.25 18.31 7.43 17.56 6.09 16.21C4.75 14.87 4 13.05 4 11.15C4 9.25 4.75 7.43 6.09 6.09C7.43 4.75 9.25 4 11.15 4C13.05 4 14.87 4.75 16.21 6.09C17.56 7.43 18.31 9.25 18.31 11.15C18.31 13.05 17.56 14.87 16.21 16.21Z' stroke='${iconColor}' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          }}
          type='text'
          placeholder={placeholder}
          onMouseEnter={onMauseIn}
          onMouseLeave={onMauseOut}
          onClick={changeSvgStroke}
          value={inputValue}
          onChange={(e) => dispatch(Searching(e.target.value))}
        />
        <button
          className={`${s.clear} ${!inputValue && "display-none"}`}
          onClick={() => dispatch(ClearValue())}
        ></button>
      </div>
    </>
  );
}
