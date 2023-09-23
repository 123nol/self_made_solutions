import React from 'react'
import { useEffect } from 'react'
 
const Project = () => {
    
    
    useEffect(
      () =>{
      const projects = document.querySelectorAll(".prolist")
      projects.forEach((project,index) => {
        if (index%2===0 ){
          project.style.flexDirection = "row-reverse";
          project.style.background = "linear-gradient(to right, rgba(255, 0, 0, 0), rgb(192, 212, 120))";
          project.style.borderRadius = "2px 30px 30px 2px"
          project.style.boxShadow = 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
          
        }
        else if (index%2!==0 ){
          project.style.flexDirection = "row"
          project.style.background = "linear-gradient(to left, rgba(255, 0, 0, 0), rgb(192, 212, 120))"
          project.style.borderRadius = "30px 2px 2px 30px"
          project.style.boxShadow = 'rgba(0, 0, 0, 0.15) -1.95px 1.95px 2.6px'
        }
      })},[])
      useEffect(
      () =>{
      const projects = document.querySelectorAll(".prolist img")
      projects.forEach((project,index) => {
        if (index%2===0 ){
          project.style.borderRadius = "2px 30px 30px 2px"
        }
        else if (index%2!==0 ){
          project.style.borderRadius = "30px 2px 2px 30px"
        }
      })},[])


  return (
    <div className='projects'>
      <div className='linkHeader'>
        <h1>Projects</h1>
        <p>Some of the projects we have worked on</p>
      </div>
      <div className='prolists'>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Nebret Property Management - Brand Logo</h2>
            <p style={{fontWeight: "50px", color:"black"}}>As part of a new web application development and brand creation, we took up the task of developing the initial brand logo of the multi-deciplinary property management firm, Nebret Property Management. We had a number of detailed analysis on what the Client wanted, what the future of the firm is imagined to look like and the most rooted use cases the brand appears and the logo follows. Based on that we developed a type-heavy logo with a few nicks to showcae the firm's market positions and visions.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Nebret Property Management - Commercial Web Application</h2>
            <p style={{fontWeight: "50px", color:"black"}}>Along with the logo design, we were tasked to design and develop an easy-to-use website application that delivers on three basic requirements:

Present the firm's listings clearly, that outstands the views and property's features.
Create an interactive system that clearly serves the needs of different user types.
Develop a system optimized to suite current communication standards of Ethiopia and still suffices for the World.
The application is developed using Laravel framework and Bootstrap scafolding.

Checkout the website here ..</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Nebret Property Management - IMS</h2>
            <p style={{fontWeight: "50px", color:"black"}}>currently in development

An information management system to control and maintain properties under their management. The system is designed for office use only using the Laravel framwork for PHP and Tailwind CSS framework for the front-end development.

Checkout the website here ...</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>ABH Marketing Consultancy - Hello Yet Branding</h2>
            <p style={{fontWeight: "50px", color:"black"}}>For an annual Job Fair event held in Addis Ababa University, we prepared and pushed branding materials for a call center and digital rescue aid service, Hello Yet. Specifically for the purpose of the event, we designed and prepared different banners, t-shirts, business cards and flyers and other printable assets.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>ABH Marketing Consultancy - Hello Yet Afalagi Show</h2>
            <p style={{fontWeight: "50px", color:"black"}}>Along with the ABH team, we have taken up the production of the upcoming YouTube show that is focused on bringing lost relatives and raising awareness on the delocalizing situations and mitigation techniques. We are currently in the compilation stages of production, and we are solely responsible to stage, shoot, edit and produce a high-quality show.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Vital Heart Ethiopia - Website Redesign</h2>
            <p style={{fontWeight: "50px", color:"black"}}>The Client was requesting to have a new updated look to the current stature of the Company and the time. So we started the redesign process from the logo and theme color. The Client was keen on to subtle colors and narrative symbolic representations to be seen on the logo. From there we moved onto reworking the UI layout, look and feel, content placement and composition. The development was one using

Checkout the look here ...</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Vital Heart Tour and Travel - Portfolio Website</h2>
            <p style={{fontWeight: "50px", color:"black"}}>We were contracted to design a website that showcases basic services provided by the newly formed company, and design it in a colorful manner that would highlight the traditions and landmarks of Addis Ababa city.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Vital Heart Ethiopia - Kasma Coffee Complete Branding</h2>
            <p style={{fontWeight: "50px", color:"black"}}>This is a newly founded coffee roasting and exporting company, and the Client need a full brand identity creation. So we took responsibility to develop the brand starting from its name, logo, theme color; the brand essentials, all the printable assets associated to different use cases, all the way to its digital presence. We worked closely with the Client to create a fitting brand that goes right to the Client's vision and the companies values and services.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Vital Heart Ethiopia - Kasma Coffee Commerical Website</h2>
            <p style={{fontWeight: "50px", color:"black"}}>Along with the branding process of the company, a commercial website that presents the company was in need and we were tasked to deliver. We designed the website following he brand guidelines set previously, and hence we chose a palette of earth tone and composed the content to keep focus on the defining attributes of the company and specifically selected partners displayed there.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Est Infinity - Lesso Ethiopia - 2021 Event Photography</h2>
            <p style={{fontWeight: "50px", color:"black"}}>We held to capture the time and place memories for the 2021 annual event held for employees by Lesso Ethiopia. Organised to appreciate its staff and partners, and with that put its prints on the Green Legacy campaign, Est Infinity Marketing organized an event for Lesso Ethiopia.</p>

          </div>
        </div>
        <div className='prolist' >
          <img src="https://www.nestwellpropertymanagement.com/wp-content/uploads/2018/09/Nestwell-Logo_B.png" alt="nebret"/>
          <div className='listinfo'>
            <h2>Bamacon Engineering - ERP</h2>
            <p style={{fontWeight: "50px", color:"black"}}>currently in development

An enterprise resource management system to control and maintain their real estate developments and sales. The system is designed for office use only using the Laravel framwork for PHP and Tailwind CSS for the front-end development.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project