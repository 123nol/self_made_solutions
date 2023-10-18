import { useParams } from "react-router-dom";
import { ServiceData } from "../data/ServiceData";
import { useState } from "react";
const SingleServicePage = () => {
  const { id } = useParams();
  const [orderERP, setOrderERP] = useState(1);
  const identification = ServiceData.find(
    (selected) => selected.id == Number(id)
  );
  const { title, details, image } = identification.subSections.find(
    (selected) => selected.order === orderERP
  );

  return (
    <>
      <div className="serviceList">
        <div className="serviceSection">
          <div className="serviceType">
            <div className="serviceInfo">
              <h1>{identification.header}</h1>
              {/* <h3>Service Includes</h3> */}
              <p>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP(1);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP === 1 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {identification.subSections[0].title}
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP(2);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP === 2 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {identification.subSections[1].title}
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP(3);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP === 3 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {identification.subSections[2].title}
                </li>
                <li
                  className="serviceNav"
                  onClick={() => {
                    setOrderERP(4);
                  }}
                  style={{
                    cursor: "pointer",
                    color: orderERP === 4 ? "rgb(216, 137, 73)" : "black",
                  }}
                >
                  {identification.subSections[3].title}
                </li>
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
                      <button>Book a Consulting</button>
                    </div>
                  </div>
                  <div className="serviceImage">
                    <img src={image} alt="" />
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
  );
};

export default SingleServicePage;
