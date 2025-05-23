import s from "./main-banner.module.scss";

import iphone from "../../assets/images/Iphone.png";

import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setProduct,setColor, setMemory } from "../../redux/slices/productSlice";

export default function MainBanner({product}) {
  const dispatch = useDispatch()
  const onClickLink = () =>{
    dispatch(setProduct(product))
    dispatch(setColor(product.color))
    dispatch(setMemory(product.memory))
  }
  return (
    <>
      <section className={s.banner}>
        <div className='container'>
          <div className={s.inner}>
            <div className={s.block}>
              <p className={s.descr}>Pro.Beyond.</p>
              <h1 className={s.title}>
                IPhone 16 <span className={s.bold}>Pro</span>
              </h1>
              <p className={s.text}>
                Created to change everything for the better. For everyone
              </p>
              <Link to={"/catalog/Phones/1"} 
              onClick={()=>onClickLink()}>
                <button className='white-line-btn'>View</button>
              </Link>
            </div>
            <img className={s.iphone} src={iphone} alt='iphone' />
          </div>
        </div>
      </section>
    </>
  );
}
