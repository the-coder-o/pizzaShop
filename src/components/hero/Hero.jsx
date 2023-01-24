import "./Hero.css";
import { useState } from "react";
import pizza1 from "../../assets/pizza/pizza1.jpg";
import pizza2 from "../../assets/pizza/pizza2.jpg";
import pizza3 from "../../assets/pizza/pizza3.jpg";
import pizza4 from "../../assets/pizza/pizza4.jpg";
import pizza5 from "../../assets/pizza/pizza5.jpg";
import pizza6 from "../../assets/pizza/pizza6.jpg";
import pizza8 from "../../assets/pizza/pizza8.png";
import pizza9 from "../../assets/pizza/pizza9.png";
import pizza10 from "../../assets/pizza/pizza9.png";
import pizza11 from "../../assets/pizza/pizza8.png";
import pizza12 from "../../assets/pizza/pizza9.png";

const Hero = () => {
  const [initialState, setCount] = useState(0);
  const price = () => {
    setCount((c) => c + 1);
  };
  const priceMinus = () => {
    setCount((b) => b - 1);
  };
  return (
    <section className="ourPizza">
      <div className="container">
        <h1>Our pizza menu</h1>
        <div className="pizza">
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza1} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza margherita</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza2} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza mushroom</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza3} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza vegetarian</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza4} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza pepperoni</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza5} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza quattro</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza6} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza calzonne</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza8} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza hawaiian</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza9} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza rockingham</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza10} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza meat</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza11} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza ham</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza12} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza mare</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pizza__card">
            <div className="img__father">
              <img src={pizza1} alt="" className="pizza__img" />
            </div>
            <div className="card__text">
              <h3>Pizza double pepperoni</h3>
              <div className="price">
                <p>{initialState}</p>
                <div className="btn__father">
                  <button onClick={price} className="plus">
                    +
                  </button>
                  <button onClick={priceMinus} className="minus">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="moreBtn">
          <a href="#" className="more">
            More menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
