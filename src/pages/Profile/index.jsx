import { useSelector, useDispatch } from "react-redux";
import s from "./profile.module.scss";
import { LogOut } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";
import Orders from "./components/Orders";
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogOut = () => {
    dispatch(LogOut());
    navigate("/");
  };

  useEffect(() => {});

  return (
    <section>
      <div className='container'>
        <div className={s.inner}>
          <p className={s.hello}>Hello, {user.email}</p>
          <button className="black-btn" onClick={onLogOut}>Log out</button>
        </div>
        <Orders />
      </div>
    </section>
  );
}
