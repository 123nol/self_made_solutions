import { useState } from "react";

const Services = () => {
  const [orderERP, setOrderERP] = useState({
    order: 1,
    title: "Therapy",
    color: "red",
  });
  const [orderCons, setOrderCons] = useState({ order: 1, title: "Therapy" });
  const [orderDig, setOrderDig] = useState({ order: 1, title: "Therapy" });

  return (
    <div className="services">
      <div className="linkHeader">
        <h1>Services</h1>
        <p>The Services we provide are mainly concerned with the ERP system.</p>
      </div>

      <div className="serviceList">
        <div className="serviceSection">
          <div className="serviceType">
            <div className="serviceInfo">
              <h1>ERP Serivce</h1>
              {/* <h3>Service Includes</h3> */}
              <p>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP({ ...orderERP, title: "Therapy", order: 1 });
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP.order === 1 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Therapy
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP({ ...orderERP, title: "Cheese", order: 2 });
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP.order === 2 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Cheese
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP({ ...orderERP, title: "System", order: 3 });
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP.order === 3 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  System
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP({ ...orderERP, title: "Management", order: 4 });
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP.order === 4 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Management
                </li>
              </p>
            </div>
            <div
              className="serviceContainer"
              style={{ width: "100%", overflow: "none" }}
            >
              <div
                className={
                  orderERP.order === 1
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
      <div className="serviceList">
        <div className="serviceSection">
          <div className="serviceType">
            <div className="serviceInfo">
              <h1>Consulting</h1>
              {/* <h3>Service Includes</h3> */}
              <p>
                <li
                  onClick={() =>
                    setOrderCons({ ...orderCons, title: "Therapy", order: 1 })
                  }
                  style={{
                    cursor: "pointer",
                    color:
                      orderCons.order === 1 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Therapy
                </li>
                <li
                  onClick={() =>
                    setOrderCons({ ...orderCons, title: "Cheese", order: 2 })
                  }
                  style={{
                    cursor: "pointer",
                    color:
                      orderCons.order === 2 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Cheese
                </li>
                <li
                  onClick={() =>
                    setOrderCons({ ...orderCons, title: "System", order: 3 })
                  }
                  style={{
                    cursor: "pointer",
                    color:
                      orderCons.order === 3 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  System
                </li>
                <li
                  onClick={() =>
                    setOrderCons({
                      ...orderCons,
                      title: "Management",
                      order: 4,
                    })
                  }
                  style={{
                    cursor: "pointer",
                    color:
                      orderCons.order === 4 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Management
                </li>
              </p>
            </div>
            <div
              className="serviceContainer"
              style={{ width: "100%", overflow: "none" }}
            >
              <div
                className={
                  orderCons.order === 1
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderCons.title}</h2>

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
                  orderCons.order === 2
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderCons.title}</h2>

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
                  orderCons.order === 3
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderCons.title}</h2>

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
                  orderCons.order === 4
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderCons.title}</h2>

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
            </div>
          </div>
        </div>
      </div>
      <div className="serviceList">
        <div className="serviceSection">
          <div className="serviceType">
            <div className="serviceInfo">
              <h1>Digital Marketing</h1>
              {/* <h3>Service Includes</h3> */}
              <p>
                <li
                  onClick={() =>
                    setOrderDig({
                      ...orderDig,
                      title: "Therapy",
                      order: 1,
                    })
                  }
                  style={{
                    cursor: "pointer",
                    color: orderDig.order === 1 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Therapy
                </li>
                <li
                  onClick={() =>
                    setOrderDig({
                      ...orderDig,
                      title: "Cheese",
                      order: 2,
                      color:
                        orderDig.order === 2 ? "rgb(216, 137, 73)" : "black",
                    })
                  }
                  style={{
                    cursor: "pointer",
                    color: orderDig.order === 2 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Cheese
                </li>
                <li
                  onClick={() =>
                    setOrderDig({
                      ...orderDig,
                      title: "System",
                      order: 3,
                      color:
                        orderDig.order === 3 ? "rgb(216, 137, 73)" : "black",
                    })
                  }
                  style={{
                    cursor: "pointer",
                    color: orderERP.Dig === 3 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  System
                </li>
                <li
                  onClick={() =>
                    setOrderDig({
                      ...orderDig,
                      title: "Management",
                      order: 4,
                    })
                  }
                  style={{
                    cursor: "pointer",
                    color: orderDig.order === 4 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  Management
                </li>
              </p>
            </div>
            <div
              className="serviceContainer"
              style={{ width: "100%", overflow: "none" }}
            >
              <div
                className={
                  orderDig.order === 1
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderDig.title}</h2>

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
                  orderDig.order === 2
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderDig.title}</h2>

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
                  orderDig.order === 3
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderDig.title}</h2>

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
                  orderDig.order === 4
                    ? "serviceExplanation grow"
                    : "serviceExplanation "
                }
              >
                <div className="serviceExplanationContainer">
                  <div className="serviceText">
                    <h2>{orderDig.title}</h2>

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
          <div className="button">
            <button>Book a Consulting</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
