import React from "react";
import { head, faculty, reps,student_cordinators,reps24 } from "../data/people";
import Layout from "../components/layout";
import "../styles/about-cgpu.css";
import AboutSVG from "../components/about-svg";
import aboutcgpu from "../images/about-cgpu.jpg";

export default function AboutCGPU() {
  
  // const repsToggle = more ? reps : reps.slice(0, 8);
  const repsToggle = reps;
  console.log(reps24);
  return (
    <Layout page="cgpu">
      <div className="main-container mb-4 mb-md-0">
        <div className="row">
          <div className="order-md-2 col-12 col-md-5 col-lg-6 text-center py-2 my-auto">
            <AboutSVG main={aboutcgpu} />
          </div>
          <div className="order-md-1 col-12 col-md-7 col-lg-6 text-center text-md-start py-3 py-md-5">
            <div className="page-head">About CGPU</div>
            <div className="abt-desc">
              The Career Guidance and Placement Unit (CGPU) was formed in
              January 1984. The Placement Cell concentrates on providing the
              students with placement oriented training from the first year. It
              is headed by the Placement officer who is assisted by student
              representatives from each department. The cell provides the
              students opportunities to connect with potential employers by way
              of internships, lectures and workshops; and live projects at an
              industry level.
              <br />
              <br />
              The Unit helps students achieve ‘employability’ through intensive
              training across eight semesters, from industry experts. Besides
              the academic or technical skills, the cell is committed to
              developing skills in our students like integrity and teamwork,
              problem-solving, entrepreneurship, communication in English and
              use of modern tools and technologies.
              {/* The Career Guidance and Placement Unit (CGPU) was formed in January 1984. The Placement
                            Officer who is assisted by student representatives from all the departments heads this unit.
                            The Principal of the institution and all other faculty members have extended their
                            wholehearted support to the functioning of the unit.
                            <br />
                            <br /> */}
              {/* Spanning across an area over 3500 sq feet.{" "} */}
              {/* CGPU can accomodate 500 students at a time for written test. */}
              {/* It is well equipped with high quality audio and video systems suitable for preplacement
                            talks, group discussions and interviews. */}
            </div>
          </div>
        </div>
        <div className="ppl-cgpu mt-5">
          <div className="page-head">People Behind CGPU</div>
          <div className=" ali">
            <div className="box">
              <h4 className="blue mt-4 mb-2">Coordinators</h4>
              <div className="cards-container">
                {head.map((item, key) => {
                  return (
                    <div key={key} className="card-item">
                      <div />
                      <img
                        src={item.img}
                        className="card-img"
                        alt={item.title}
                      />
                      <div className="card-blank" />
                      <div className="card-text">
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.subtitle}</div>
                        <div className="card-subtitle">{item.dept}</div>
                        <a href={`mailto:${item.mail}`} className="card-mail">
                          {item.mail}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box">
              <h4 className="blue mt-4 mb-2">Associate Coordinators</h4>
              <div className="cards-container faculty">
                {faculty.map((item, key) => {
                  return (
                    <div key={key} className="card-item">
                      <div />
                      <img
                        src={item.img}
                        className="card-img"
                        alt={item.title}
                      />
                      <div className="card-blank" />
                      <div className="card-text">
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.subtitle}</div>
                        <div className="card-subtitle">{item.dept}</div>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box">
              <h4 className="blue mt-4 mb-2">Department Coordinators</h4>
              <div className="cards-container ">
                {student_cordinators.map((item, key) => {
                  return (
                    <div key={key} className="card-item">
                      <div />
                      <img
                        src={item.img}
                        className="card-img"
                        alt={item.title}
                      />
                      <div className="card-blank" />
                      <div className="card-text">
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.subtitle}</div>
                        <div className="card-subtitle">{item.dept}</div>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box">
              <h4 className="blue mt-4 mb-2">Student Representatives-25</h4>
              <div className="cards-container">
                {repsToggle.map((item, key) => {
                  return (
                    <div key={key} className="card-item">
                      <div className="card-img" />
                      <div className="card-overlay" />
                      <img
                        src={item.img}
                        className="card-img"
                        alt={item.title}
                      />
                      <div className="card-blank" />
                      <div className="card-text rep">
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box">
              <h4 className="blue mt-4 mb-2">Student Representatives-24</h4>
              <div className="cards-container">
                {reps24.map((item, key) => {
                  return (
                    <div key={key} className="card-item">
                      <div className="card-img" />
                      <div className="card-overlay" />
                      <img
                        src={item.img}
                        className="card-img"
                        alt={item.title}
                      />
                      <div className="card-blank" />
                      <div className="card-text rep">
                        <div className="card-title">{item.title}</div>
                        <div className="card-subtitle">{item.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <button
              className={`more-btn${more ? " d-none" : ""}`}
              onClick={() => (!more)}
            >
              Show more
            </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
