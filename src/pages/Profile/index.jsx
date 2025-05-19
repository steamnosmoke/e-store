import { useSelector, useDispatch } from "react-redux";
import s from "./profile.module.scss";
import { LogOut } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";

export default function Profile() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogOut = () => {
    dispatch(LogOut());
    navigate("/")
  };
  return (
    <section>
      <button onClick={onLogOut}>Log out</button>
      <br />
      {user.name}
      {user.email}
    </section>
  );
}
