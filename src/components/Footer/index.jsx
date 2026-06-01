import s from "./footer.module.scss";
import logo from "../../assets/images/Logo-white.svg";
import twitter from "../../assets/images/Twitter.svg";
import facebook from "../../assets/images/Facebook.svg";
import tiktok from "../../assets/images/Tiktok.png";
import instagram from "../../assets/images/Instagram.svg";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <div className="container">
          <div className={s.inner}>
            <div className={s.left_block}>
              <Link to={"/"}>
                <img src={logo} alt="logotype" />
              </Link>
              <p className={s.descr}>
                We are a residential interior design firm located in Portland.
                Our boutique-studio offers more than
              </p>
            </div>
            <div className={s.block}>
              <h4 className={s.title}>Services</h4>
              <ul className={s.list}>
                <li className={s.item}>
                  <Link to={"/"}>Bonus program</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Gift cards</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Credit and payment</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Service contracts</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Non-cash account</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Payment</Link>
                </li>
              </ul>
            </div>
            <div className={s.block}>
              <h4 className={s.title}>Assistance to the buyer</h4>
              <ul className={s.list}>
                <li className={s.item}>
                  <Link to={"/"}>Find an order</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Terms of delivery</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Exchange and return of goods</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Guarantee</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Frequently asked questions</Link>
                </li>
                <li className={s.item}>
                  <Link to={"/"}>Terms of use of the site</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className={s.socials}>
            <li className={s.social}>
              <a href="#!">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className={s.social}>
              <a href="#!">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className={s.social}>
              <a href="#!">
                <img src={tiktok} alt="tiktok" />
              </a>
            </li>
            <li className={s.social}>
              <a href="#!">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
