// import React, { useEffect } from 'react'
// import { useState } from 'react'
// const ServiceExpCard = ({data}) => {
//   const [orderERP, setOrderERP]= useState(1)
//   const {title, details,image} = data.subSections.find((selected)=>selected.order==orderERP)
  
//   // useEffect(()=>{
//   //   const container = document.querySelector(".serviceExplanationContainer");
//   //   container.style.animationName = "fadein";
//   //   container.style.animationDuration="1s";
//   //   container.style.animationPlayState="reset"
//   // },[orderERP])
//   return (
//     <div className="serviceList">
//         <div className="serviceSection">
//           <div className="serviceType">
//             <div className="serviceInfo">
//               <h1>{data.header}</h1>
//               {/* <h3>Service Includes</h3> */}
//               <p>
//                 {data.subSections.map((section,index)=>{
//                   return(<li
//                     className="serviceNav"
//                     onClick={() => {
//                       setOrderERP(index+1);
//                     }}
//                     style={{
//                       cursor: "pointer",
//                       color: orderERP === index+1 ? "rgb(216, 137, 73)" : "black",
//                     }}
//                   >
//                     {section.title}
//                   </li>);
//                 })}
                
//               </p>
//             </div>
//             <div
//               className="serviceContainer"
//               style={{ width: "100%", overflow: "none" }}
//             >
//               <div
//                 className="serviceExplanation"
                
//               >
//                 <div className="serviceExplanationContainer">
//                   <div className="serviceText">
//                     <h2>{title}</h2>
//                     <p>
//                       {details}
//                     </p>
//                     <div className="button">
//                       <button>Book a Consulting</button>
//                     </div>
//                   </div>
//                   <div className="serviceImage">
//                     <img
//                       src={image}
//                       alt=""
//                     />
//                   </div>
//                 </div>
//               </div>
              
              

//             </div>
//           </div>
//           {/* <div className="button">
//             <button>Sign Up for an ERP Service</button>
//           </div> */}
//         </div>
//       </div>
//   )
// }

// export default ServiceExpCard