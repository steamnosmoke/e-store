import { useState } from "react";
import s from "./modals.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  setEmail,
  setPassword,
  setConfirm,
} from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const dispatch = useDispatch();
  const [setError] = useState("");
  const { email, password, confirm } = useSelector((state) => state.auth);
  const navigate = useNavigate()
  const onRegister = () => {
    const correct = () => {
      dispatch(
        registerUser({
          name: "",
          email: email,
          password: password,
          role: "customer",
          wishlist: [],
          cart: [],
          orders: [],
          permissions: [],
          phone: "",
          addresses: [],
        })
      );
      onClose();
      navigate("/profile")
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

        <input
          className={s.input}
          type='password'
          value={confirm}
          onChange={(e) => dispatch(setConfirm(e.target.value))}
          placeholder='Confirm Password'
        />

        <button
          className='black-line-btn'
          style={{ padding: "12px 40px" }}
          onClick={onRegister}
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
