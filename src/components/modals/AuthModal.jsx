import { useEffect } from "react";
import s from "./modals.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setEmail, setPassword } from "../../redux/slices/authSlice";

export default function AuthModal({ onClose, onSwitchToRegister }) {
  const dispatch = useDispatch();
  const { user, email, password, error, status } = useSelector(
    (state) => state.auth
  );

  const onLogin = () => {
    if (email && password) {
      dispatch(fetchUser({ email, password }));
    }
  };

  useEffect(() => {
    if (user.email) {
      onClose();
    }
  }, [user, onClose]);

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.title}>Login</h2>

        <input
          className={s.input}
          type='email'
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder='Email'
        />

        <input
          className={s.input}
          type='password'
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          placeholder='Password'
        />

        {status === "failed" && error && <p className={s.error}>{error}</p>}

        <button
          className='black-line-btn'
          style={{ padding: "12px 40px" }}
          onClick={onLogin}
        >
          Log in
        </button>

        <p className={s.switchText}>
          No account?{" "}
          <button className={s.linkButton} onClick={onSwitchToRegister}>
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
