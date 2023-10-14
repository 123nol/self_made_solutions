import React from 'react'
import { useState } from 'react';
import { ServiceData } from '../data/ServiceData';
const ServiceCard = ({data}) => {
  
  const [orderERP, setOrder] = useState(data.one.order);
  
  
  return (
    <>
      <div className="serviceList">
        <div className="serviceSection">
          <div className="serviceType">
            <div className="serviceInfo">
              <h1>{data.header}</h1>
              {/* <h3>Service Includes</h3> */}
              <p>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrder(data.one.order);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP === 1 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {data.one.title}
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrder(data.two.order);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP=== 2 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                 {data.two.title}
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrder(data.three.order);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP=== 3 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {data.three.title}
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrder(data.four.order);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP === 4 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {data.four.title}
                </li>
              </p>
            </div>
            <div
              className="serviceContainer"
              style={{ width: "100%", overflow: "none" }}
            >
              <div
                className={
                  orderERP=== 1
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">

                   
                    <h2></h2>
                    <p>
                      1,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est deserunt consequatur quasi reprehenderit enim culpa,
                      voluptatibus soluta natus qui id perferendis minima
                      expedita esse quisquam porro libero nisi eveniet quae?
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod voluptas iusto tempore est cumque, dolorum inventore.
                      Fuga exercitationem non molestias reiciendis, veritatis
                      pariatur necessitatibus natus voluptas dignissimos fugiat
                      obcaecati ratione? Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Maxime voluptate nemo, animi magni nihil
                      voluptas! Amet ut doloribus officiis magni voluptatibus
                      impedit fugiat in iusto blanditiis architecto similique,
                      laborum perspiciatis. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eum totam aspernatur
                      similique pariatur eius ducimus necessitatibus beatae
                      provident ipsum illo, est corrupti et doloribus recusandae
                      non molestiae enim voluptatibus accusantium.
                    </p>
                    <div className="button">
                      <button>Book a Consulting</button>
                    </div>
                  </div>
                  <div className="serviceImage">
                    <img
                      src="https://images.pexels.com/photos/15745221/pexels-photo-15745221/free-photo-of-fog-over-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  orderERP.order === 2
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderERP.title}</h2>

                    <p>
                      1,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est deserunt consequatur quasi reprehenderit enim culpa,
                      voluptatibus soluta natus qui id perferendis minima
                      expedita esse quisquam porro libero nisi eveniet quae?
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod voluptas iusto tempore est cumque, dolorum inventore.
                      Fuga exercitationem non molestias reiciendis, veritatis
                      pariatur necessitatibus natus voluptas dignissimos fugiat
                      obcaecati ratione? Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Maxime voluptate nemo, animi magni nihil
                      voluptas! Amet ut doloribus officiis magni voluptatibus
                      impedit fugiat in iusto blanditiis architecto similique,
                      laborum perspiciatis. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eum totam aspernatur
                      similique pariatur eius ducimus necessitatibus beatae
                      provident ipsum illo, est corrupti et doloribus recusandae
                      non molestiae enim voluptatibus accusantium.
                    </p>
                    <div className="button">
                      <button>Sign Up for an ERP Service</button>
                    </div>
                  </div>
                  <div className="serviceImage">
                    <img
                      src="https://images.pexels.com/photos/15745221/pexels-photo-15745221/free-photo-of-fog-over-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  orderERP.order === 3
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderERP.title}</h2>

                    <p>
                      1,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est deserunt consequatur quasi reprehenderit enim culpa,
                      voluptatibus soluta natus qui id perferendis minima
                      expedita esse quisquam porro libero nisi eveniet quae?
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod voluptas iusto tempore est cumque, dolorum inventore.
                      Fuga exercitationem non molestias reiciendis, veritatis
                      pariatur necessitatibus natus voluptas dignissimos fugiat
                      obcaecati ratione? Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Maxime voluptate nemo, animi magni nihil
                      voluptas! Amet ut doloribus officiis magni voluptatibus
                      impedit fugiat in iusto blanditiis architecto similique,
                      laborum perspiciatis. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eum totam aspernatur
                      similique pariatur eius ducimus necessitatibus beatae
                      provident ipsum illo, est corrupti et doloribus recusandae
                      non molestiae enim voluptatibus accusantium.
                    </p>
                    <div className="button">
                      <button>Sign Up for an ERP Service</button>
                    </div>
                  </div>
                  <div className="serviceImage">
                    <img
                      src="https://images.pexels.com/photos/15745221/pexels-photo-15745221/free-photo-of-fog-over-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className={
                  orderERP.order === 4
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderERP.title}</h2>
                    <p>
                      1,Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est deserunt consequatur quasi reprehenderit enim culpa,
                      voluptatibus soluta natus qui id perferendis minima
                      expedita esse quisquam porro libero nisi eveniet quae?
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quod voluptas iusto tempore est cumque, dolorum inventore.
                      Fuga exercitationem non molestias reiciendis, veritatis
                      pariatur necessitatibus natus voluptas dignissimos fugiat
                      obcaecati ratione? Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Maxime voluptate nemo, animi magni nihil
                      voluptas! Amet ut doloribus officiis magni voluptatibus
                      impedit fugiat in iusto blanditiis architecto similique,
                      laborum perspiciatis. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Eum totam aspernatur
                      similique pariatur eius ducimus necessitatibus beatae
                      provident ipsum illo, est corrupti et doloribus recusandae
                      non molestiae enim voluptatibus accusantium.
                    </p>
                    <div className="button">
                      <button>Sign Up for an ERP Service</button>
                    </div>
                  </div>
                  <div className="serviceImage">
                    <img
                      src="https://images.pexels.com/photos/15745221/pexels-photo-15745221/free-photo-of-fog-over-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="button">
            <button>Sign Up for an ERP Service</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ServiceCard