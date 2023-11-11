import React from "react";
import { useEffect } from "react";
import { ProjectData } from "../data/ProjectData";
import ParticleBackground from "../components/ParticleBackground";
const Project = () => {
  useEffect(() => {
    const projects = document.querySelectorAll(".prolist");
    projects.forEach((project, index) => {
      if (index % 2 === 0) {
        project.style.flexDirection = "row-reverse";
        project.style.background =
          "linear-gradient(to right, rgba(255, 0, 0, 0), rgb(192, 212, 120))";
        project.style.borderRadius = "2px 30px 30px 2px";
        project.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
      } else if (index % 2 !== 0) {
        project.style.flexDirection = "row";
        project.style.background =
          "linear-gradient(to left, rgba(255, 0, 0, 0), rgb(192, 212, 120))";
        project.style.borderRadius = "30px 2px 2px 30px";
        project.style.boxShadow = "rgba(0, 0, 0, 0.15) -1.95px 1.95px 2.6px";
      }
    });
  }, []);
  useEffect(() => {
    const projects = document.querySelectorAll(".prolist img");
    projects.forEach((project, index) => {
      if (index % 2 === 0) {
        project.style.borderRadius = "2px 30px 30px 2px";
      } else if (index % 2 !== 0) {
        project.style.borderRadius = "30px 2px 2px 30px";
      }
    });
  }, []);

  return (
    <div className="projects">
      <div className="linkHeader">
        <h1>Projects</h1>
        <p>Some of the projects we have worked on</p>
      </div>
      <div className="prolists">
        {ProjectData.map((data) => (
          <div className="prolist" style={{ height: "fit-content" }}>
            <img src={data.image} alt="" />
            <div className="listinfo">
              <h2>{data.title}</h2>
              <p style={{ fontWeight: "50px", color: "black" }}>
                {data.details}
                {data.link && (
                  <a href={data.link}>
                    For more info check out the website here
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
