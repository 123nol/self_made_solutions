// import { Link } from "react-router-dom";
import { useState } from "react";
const Services = () => {
  const [orderERP, setOrderERP] = useState(1)
  const [orderCons, setOrderCons] = useState(1)
  const [orderDig, setOrderDig] = useState(1)
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
                <li onClick={()=>setOrderERP(1)} style={{cursor:"pointer"}}>Therapy</li>
                <li onClick={()=>setOrderERP(2) } style={{cursor:"pointer"}}>Cheese</li>
                <li onClick={()=>setOrderERP(3)} style={{cursor:"pointer"}}>System</li>
                <li onClick={()=>setOrderERP(4)} style={{cursor:"pointer"}}>Management</li>
              </p>
            </div>
            <div className="containerserve"style={{width:"100%", overflow:"none"}}>
              <div className={orderERP===1 ? "serviceExplanation grow" : "serviceExplanation " }>
                1,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderERP===2 ? "serviceExplanation grow" : "serviceExplanation " }>
                2,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderERP===3 ? "serviceExplanation grow" : "serviceExplanation " }>
                3,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderERP===4 ? "serviceExplanation grow" : "serviceExplanation " }>
                4,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
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
                <li onClick={()=>setOrderCons(1)} style={{cursor:"pointer"}}>Therapy</li>
                <li onClick={()=>setOrderCons(2) } style={{cursor:"pointer"}}>Cheese</li>
                <li onClick={()=>setOrderCons(3)} style={{cursor:"pointer"}}>System</li>
                <li onClick={()=>setOrderCons(4)} style={{cursor:"pointer"}}>Management</li>
              </p>
            </div>
            <div style={{width:"100%", overflow:"none"}}>
              <div className={orderCons===1 ? "serviceExplanation grow" : "serviceExplanation " }>
                1,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderCons===2 ? "serviceExplanation grow" : "serviceExplanation " }>
                2,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderCons===3 ? "serviceExplanation grow" : "serviceExplanation " }>
                3,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderCons===4 ? "serviceExplanation grow" : "serviceExplanation " }>
                4,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
            </div>
          </div>
          <div className="button">
            <button>Book a Consultation</button>
          </div>
        </div>
      </div>
      <div className="serviceList">
        <div className="serviceSection">
          <h1>Digital Management</h1>
          <div className="serviceType">
            <div className="serviceInfo">
              <h3>Service Includes</h3>
              <p>
                <li onClick={()=>setOrderDig(1)} style={{cursor:"pointer"}}>Therapy</li>
                <li onClick={()=>setOrderDig(2) } style={{cursor:"pointer"}}>Cheese</li>
                <li onClick={()=>setOrderDig(3)} style={{cursor:"pointer"}}>System</li>
                <li onClick={()=>setOrderDig(4)} style={{cursor:"pointer"}}>Management</li>
              </p>
            </div>
            <div style={{width:"100%", overflow:"none"}}>
              <div className={orderDig===1 ? "serviceExplanation grow" : "serviceExplanation " }>
                1,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderDig===2 ? "serviceExplanation grow" : "serviceExplanation " }>
                2,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderDig===3 ? "serviceExplanation grow" : "serviceExplanation " }>
                3,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
              <div className={orderDig===4 ? "serviceExplanation grow" : "serviceExplanation " }>
                4,Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                deserunt consequatur quasi reprehenderit enim culpa, voluptatibus
                soluta natus qui id perferendis minima expedita esse quisquam
                porro libero nisi eveniet quae?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
