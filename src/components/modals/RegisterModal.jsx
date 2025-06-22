import s from "./modals.module.scss";
import { useAuthStore } from "../../zustand/authStore";

import { useNavigate } from "react-router";
import { useRegister } from "../../hooks/useAuth";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const { mutate } = useRegister();
  const setEmail = useAuthStore((state) => state.setEmail);
  const setPassword = useAuthStore((state) => state.setPassword);
  const setConfirm = useAuthStore((state) => state.setConfirm);
  const setUser = useAuthStore((state) => state.setUser);
  const setError = useAuthStore((state) => state.setError);
  const email = useAuthStore((state) => state.email);
  const password = useAuthStore((state) => state.password);
  const error = useAuthStore((state) => state.error);
  const confirm = useAuthStore((state) => state.confirm);
  const navigate = useNavigate();
  const onRegister = () => {
    const correct = () => {
      mutate(
        { email, password },
        {
          onSuccess: (userData) => {
            setUser(userData);
          },
          onError: (err) => {
            setError(err.message);
          },
        }
      );
      onClose();
      navigate("/profile");
    };
    password === confirm ? correct() : setError("Passwords not matches");
  };

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.title}>Register</h2>

        <input
          className={s.input}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />

        <input
          className={s.input}
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />

        <input
          className={s.input}
          type='password'
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder='Confirm Password'
        />

        <button
          className='black-line-btn'
          style={{ padding: "12px 40px" }}
          onClick={()=>onRegister()}
        >
          Register
        </button>

        <p className={s.switchText}>
          Already have an account?{" "}
          <button className={s.linkButton} onClick={onSwitchToLogin}>
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
