import React from "react";
import Layout from "../components/layout";
import HomeSVG from "../components/homesvg";
import "../styles/index.css";
import logo from "../images/cet-logo.png";
import eye from "../images/Asseteye.png";
import missioncircle from "../images/mission.png";
import cetfront from "../images/cet-front.jpg";
import cgpufront from "../images/cgpu-front.jpg";
import cgpuhall from "../images/cgpu-hall.jpg";

export default function Home() {
    const objectives = [
        {
            title: "Best Placements",
            content: "To place final year students in respectable organizations through campus recruitment",
        },
        {
            title: "Industrial Training",
            content: "To provide industrial training to students during their course study",
        },
        {
            title: "Personality & Career Development",
            content: "To organize lectures,seminars,group discussions,mock interviews,etc",
        },
        {
            title: "Guide Students in the Right Path",
            content: "Proper mentorship to students,helping them to acheive current prospectives",
        },
        { title: "Job Opportunities", content: "To find job opportunites in India and abroad" },
        {
            title: "Opportunities for Self Employment",
            content: "To help students to work on projects,researches,and get self employed",
        },
        { title: "Find Higher Studies", content: "To provide knowledge for higher studies in India and abroad" },
        {
            title: "Excel in Competitive Exams",
            content: "To offer training for students in exams like GRE,CAT,TOEFLGMAT,GATE,etc",
        },
    ];

    return (
        <Layout page="home">
            <div className="homepage">
                <div className="row firstabt">
                    <div className="order-md-2 col-12 col-md-4 col-lg-6 text-center">
                        <HomeSVG main={cetfront} left={cgpufront} right={cgpuhall} />
                    </div>
                    <div className="order-md-1 col-12 col-md-8 col-lg-6 text-center text-md-left">
                        <div className="page-head">
                            <img src={logo} alt="CET Seal" className="cet-logo py-3" />
                            <br />
                            Career Guidance and <br />
                            Placement Unit, College of
                            <br />
                            Engineering Trivandrum
                        </div>
                        <div className="desc">
                            We at CET believe in combining the three facets that together spell success. Ability,
                            Motivation and Attitude. CET's placement process aims to match the requirements of
                            recruiters and the aspirations of students.
                            <br />
                            <br />
                            <button className="learnbtn">Learn More</button>
                            <a href={`CET @ Glance.pdf`} download className="download px-4 py-2">
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bluebox">
                    In last 5 years, we helped
                    <b>
                        <span className="bigno"> 4506+</span> students
                    </b>{" "}
                    be placed in
                    <b>
                        <span className="bigno"> 245+</span> companies{" "}
                    </b>
                    at an average salary of{" "}
                    <b>
                        <span className="bigno">₹9.6 </span>lpa
                    </b>
                </div>
                <div className="midheading">Things Which We Value</div>
                <div className="vm px-3">
                    <div className=" row vision py-3 ">
                        <div className="col-2">
                            <div className="bluelayer">
                                <img src={eye} className="eye" />
                            </div>
                        </div>
                        <div className="col-7">
                            <h3>Our Vision</h3>
                            <div className="text">
                                National Level Excellence and International Visibility in Every Facet of Engineering
                                Research and Education.
                            </div>
                        </div>
                    </div>
                    <div className=" row mission px-3 py-3 my-3">
                        <div className="col-10 missionpara">
                            <h3>Our Mission</h3>
                            <div className="text">
                                To facilitate quality transformative education in Engineering and Management. To foster
                                innovations in Technology and its application for meeting global challenges. To pursue
                                and disseminate Quality Research. To equip, enrich and transform students to be
                                Responsible Professionals for better service to humanity.
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="bluelayer">
                                <img src={missioncircle} className="eye" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="midheading" style={{ margin: "auto" }}>
                    Our Objectives
                </div>
                <div className="row">
                    {objectives.map((x) => (
                        <div className="col-3 my-2 objectives">
                            <div className="objectives-title">{x.title}</div>
                            <div className="objectives-content">{x.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
