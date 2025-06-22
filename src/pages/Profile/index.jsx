import s from "./profile.module.scss";
import { useNavigate } from "react-router";
import Orders from "./components/Orders";
import { useAuthStore } from "../../zustand/authStore";
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logOut = useAuthStore((state) => state.logOut);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <section>
      {user && (
        <div className='container'>
          <div className={s.inner}>
            <p className={s.hello}>Hello, {user.email}</p>
            <button className='black-btn' onClick={() => logOut()}>
              Log out
            </button>
          </div>
          <Orders />
        </div>
      )}
    </section>
  );
}
