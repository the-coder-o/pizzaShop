import "./Header.css";
import logo from "../../assets/headerImg/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__top">
          <div className="logo">
            <a href="#" className="logo__icon">
              <img src={logo} alt="" className="logo__img" />
            </a>
          </div>
          <nav className="navbar">
            <ul className="nav__list">
              <li className="nav__list-item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__list-item">
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__list-item">
                <a href="#" className="nav__link">
                  Delivery
                </a>
              </li>
              <li className="nav__list-item">
                <a href="#" className="nav__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main>
          <div className="main__top">
            <div className="main__text">
              <h1>
                Having that crispy and <br /> melty pizza in the comfort of your
                own home with the ones you love, we say.
              </h1>
              <p>
                With Domino's it is always “Rishton ka time”. Whether it's a
                treat for your promotion, a kid topping his class or winning the
                heart of your wife who is too tired to cook after a long day at
                work! A cheesy slice of the best pizza is all one needs to put
                things into perspective and start any celebration.
              </p>
              <div className="btn">
                <a href="#" className="btns">
                  More info
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
};

export default Header;
