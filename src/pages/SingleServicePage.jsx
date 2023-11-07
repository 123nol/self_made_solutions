import React from "react";
import { useParams } from "react-router-dom";
import { ServiceData } from "../data/ServiceData";
import { useState } from "react";
const SingleServicePage = () => {
  const { serviceID } = useParams();
  const Main = ServiceData.find(
    (selected) => selected.id === Number(serviceID)
  );
  const [orderERP, setOrderERP] = useState(1);
  const { title, details, image } = Main.subSections.find(
    (selected) => selected.order === orderERP
  );
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      <div className="serviceSection">
        <div className="serviceType">
          <div className="serviceDetail">
            <h1>{Main.header}</h1>
            {/* <h3>Service Includes</h3> */}
            <p>
              {Main.subSections.map((section, index) => {
                return (
                  <li
                    className="serviceNav"
                    onClick={() => {
                      setOrderERP(index + 1);
                    }}
                    style={{
                      cursor: "pointer",
                      color:
                        orderERP === index + 1 ? "rgb(216, 137, 73)" : "black",
                    }}
                  >
                    {section.title}
                  </li>
                );
              })}
            </p>
          </div>
          <div
            className="serviceContainer"
            style={{ width: "100%", overflow: "none" }}
          >
            <div className="serviceExplanation">
              <div className="serviceExplanationContainer">
                <div className="serviceText">
                  <h2>{title}</h2>
                  <p>{details}</p>
                  <div className="button">
                    <button
                      style={{
                        display: Main.button === "" ? "none" : "inline-block",
                      }}
                    >
                      {Main.button}
                    </button>
                  </div>
                </div>
                <div className="serviceImage">
                  <img src={image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;
