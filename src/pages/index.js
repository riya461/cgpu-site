import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import "../styles/index.css";
import HomeSVG from "../components/home-svg";
import VisionMission from "../components/vision-mission";
import RecruitersMarquee from "../components/recruiters-marquee";
import { objectives } from "../data/objectives";
import logo from "../images/cet-logo.png";
import cetfront from "../images/cet-front.jpg";
import cgpufront from "../images/20240314_121552.jpg";
import cgpuhall from "../images/cgpu-hall.jpg";
import brocheru from "./Brochure.pdf";
export default function Home() {
    return (
        <Layout page="home">
            <div className="main-container pb-0">
                <div className="row firstabt">
                    <div className="order-md-2 col-12 col-md-6 col-lg-7 text-center py-2 my-auto">
                        <HomeSVG main={cetfront} left={cgpufront} right={cgpuhall} />
                    </div>
                    <div className="order-md-1 col-12 col-md-6 col-lg-5 text-center text-md-start">
                        <div className="page-head">
                            <img src={logo} alt="CET Seal" className="cet-logo py-2 py-md-3" />
                            <div className="title mx-auto mx-md-0">Career Guidance and Placement Unit (CGPU)</div>
                            <div className="subtitle">College of Engineering Trivandrum</div>
                        </div>
                        <div className="desc">
                            <div className="mb-3">
                                We at CET believe in fostering the three factors that in amalgamation prompts success:
                                Ability, Motivation and Attitude. CET's placement process aims to match the requirements
                                of recruiters and the aspirations of students.
                            </div>
                            <div className="d-flex flex-wrap text-center justify-content-center justify-content-md-start">
                                <div className="my-2 mx-3 ms-md-0 me-md-4">
                                    <Link to="/about-cgpu" className="btn learnbtn">
                                        Learn More
                                    </Link>
                                </div>
                                <div className="my-2 mx-3 mx-md-0 d-flex align-items-center">
                                    <a href={brocheru} download className="download learnLink">
                                        Download Brochure
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bluebox mt-4 mt-md-5 mb-5 px-xl-3">
                    Over the last 5 years, we have assisted
                    <b>
                        <span className="bigno"> 1500+</span> students
                    </b>{" "}
                    in being placed and acquiring internships at
                    <b>
                        <span className="bigno"> 200+</span> companies{" "}
                    </b>
                    <br />
                    <b>
                        <span className="bigno"> 33 LPA</span> highest package{" "}
                    </b>
                    
                </div>
                <VisionMission />
            </div>
            <RecruitersMarquee />
            <div className="main-container mb-4 mb-md-0">
                <div className="page-head text-center mb-3">Our Objectives</div>
                <div className="row">
                    {objectives.map((objective, key) => (
                        <div key={key} className="obj-main col-12 col-md-6 my-3">
                            <div className="objectives mx-auto">
                                <div className="objectives-title">{objective.title}</div>
                                <div className="objectives-content">{objective.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
