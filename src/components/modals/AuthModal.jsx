import { useAuthStore } from "../../zustand/authStore";
import { useLogin } from "../../hooks/useAuth";
import s from "./modals.module.scss";

export default function AuthModal({ onClose, onSwitchToRegister }) {
  const { mutate } = useLogin();
  const setEmail = useAuthStore((state) => state.setEmail);
  const setPassword = useAuthStore((state) => state.setPassword);
  const setUser = useAuthStore((state) => state.setUser);
  const setError = useAuthStore((state) => state.setError);
  const email = useAuthStore((state) => state.email);
  const password = useAuthStore((state) => state.password);
  const error = useAuthStore((state) => state.error);

  const onLogin = () => {
    mutate(
      { email, password },
      {
        onSuccess: (userData) => {
          setUser(userData);
          onClose();
        },
        onError: (err) => {
          setError(err.message);
        },
      }
    );
  };

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.title}>Login</h2>

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

        {error && <p className={s.error}>{error}</p>}

        <button
          className='black-line-btn'
          style={{ padding: "12px 40px" }}
          onClick={() => onLogin()}
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
