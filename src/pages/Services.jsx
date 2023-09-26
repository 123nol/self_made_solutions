// import { Link } from "react-router-dom";
import { useState } from "react";

const Services = () => {
  const [erp, setErp] = useState(1);
  const [consult, setConsult] = useState(1);
  const [market, setMarket] = useState(1);
  return (
    <div className="services">
      <div className="linkHeader">
        <h1>Services</h1>
        <p>The Services we provide are mainly concerned with the ERP system.</p>
      </div>

      <div className="serviceList">
        <div className="serviceSection">
          <h1>ERP Serivce</h1>
          <div className="serviceType">
            <div className="serviceInfo">
              <h3>Service Includes</h3>
              <p>
                <li className="linkList" onClick={() => setErp(1)}>
                  Therapy
                </li>
                <li className="linkList" onClick={() => setErp(2)}>
                  Cheese
                </li>
                <li className="linkList" onClick={() => setErp(3)}>
                  System
                </li>
                <li className="linkList" onClick={() => setErp(4)}>
                  Management
                </li>
              </p>
            </div>

            <div className="serviceExplanation">
              <p className={erp === 1 ? "div-visible" : "div-invisible"}>
                item1 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={erp === 2 ? "div-visible" : "div-invisible"}>
                item2 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={erp === 3 ? "div-visible" : "div-invisible"}>
                item3 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={erp === 4 ? "div-visible" : "div-invisible"}>
                item4 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
            </div>
          </div>
          <div className="button">
            <button>Sign Up for an ERP Service</button>
          </div>
        </div>
      </div>
      <div className="serviceList">
        <div className="serviceSection">
          <h1>Consulting</h1>
          <div className="serviceType">
            <div className="serviceInfo">
              <h3>Service Includes</h3>
              <p>
                <li className="linkList" onClick={() => setConsult(1)}>
                  Therapy
                </li>
                <li className="linkList" onClick={() => setConsult(2)}>
                  Cheese
                </li>
                <li className="linkList" onClick={() => setConsult(3)}>
                  System
                </li>
                <li className="linkList" onClick={() => setConsult(4)}>
                  Management
                </li>
              </p>
            </div>

            <div className="serviceExplanation">
              <p className={consult === 1 ? "div-visible" : "div-invisible"}>
                item1 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={consult === 2 ? "div-visible" : "div-invisible"}>
                item2 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={consult === 3 ? "div-visible" : "div-invisible"}>
                item3 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={consult === 4 ? "div-visible" : "div-invisible"}>
                item4 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
            </div>
          </div>
          <div className="button">
            <button>Book a Consulting</button>
          </div>
        </div>
      </div>
      <div className="serviceList">
        <div className="serviceSection">
          <h1>Digital Marketing</h1>
          <div className="serviceType">
            <div className="serviceInfo">
              <h3>Service Includes</h3>
              <p>
                <li className="linkList" onClick={() => setMarket(1)}>
                  Therapy
                </li>
                <li className="linkList" onClick={() => setMarket(2)}>
                  Cheese
                </li>
                <li className="linkList" onClick={() => setMarket(3)}>
                  System
                </li>
                <li className="linkList" onClick={() => setMarket(4)}>
                  Management
                </li>
              </p>
            </div>

            <div className="serviceExplanation">
              <p className={market === 1 ? "div-visible" : "div-invisible"}>
                item1 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={market === 2 ? "div-visible" : "div-invisible"}>
                item2 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={market === 3 ? "div-visible" : "div-invisible"}>
                item3 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
              <p className={market === 4 ? "div-visible" : "div-invisible"}>
                item4 ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa,
                voluptatibus soluta natus qui id perferendis minima expedita
                esse quisquam porro libero nisi eveniet quae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
