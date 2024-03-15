import React from "react";
import Layout from "../components/layout";
import AboutSVG from "../components/about-svg";
import "../styles/about-cet.css";
import aboutcet from "../images/about-cet.jpg";
import cetaalogo from "../images/cetaa-logo.png";

export default function AboutCET() {
    const alumni = [
        "Alumni connect",
        "Student alumni connect",
        "Monetary support to deserving students",
        "Student empowerment in soft skills and technical areas via alumni support",
        "Alumni support for internships and placements",
        "Alumni mentors",
        "Endowment awards to student achievers",
    ];

    return (
        <Layout page="cet">
            <div className="main-container mb-4 mb-md-0">
                <div className="row">
                    <div className="order-md-2 col-12 col-md-5 col-lg-6 text-center py-2 my-auto">
                        <AboutSVG main={aboutcet} />
                    </div>
                    <div className="order-md-1 col-12 col-md-7 col-lg-6 text-center text-md-start py-3 py-md-5">
                        <div className="page-head">About CET</div>
                        <div className="abt-desc">
                            Founded in 1939 under the reign of the Travancore King, Sri Chithira Thirunal Balarama
                            Varma, College of Engineering Trivandrum is the first engineering college in Kerala.
                            <br />
                            <br />
                            CET is one among <b>3</b> colleges from Kerala in <b>NIRF</b> ranking. With such an eminence in the academic and
                            curricular activities, the college is the most sought after engineering college by the
                            applicants of engineering degree programmes in the state.
                            <br />
                            <br />
                            <a
                                href="https://www.cet.ac.in/"
                                className="learnLink"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bluebox row my-5 px-5 pt-4 pb-3">
                    <div className="col">
                        <p className="numeric">8</p>
                        <p className="numeric-text">
                            Undergraduate
                            <br />
                            Programmes
                        </p>
                    </div>
                    <div className="col">
                        <p className="numeric">30</p>
                        <p className="numeric-text">
                            Postgraduate <br />
                            {/* &amp; Doctoral  */}
                            Programmes
                        </p>
                    </div>
                    <div className="col">
                        <p className="numeric">4500</p>
                        <p className="numeric-text">
                            Students
                            <br />
                            studying
                        </p>
                    </div>

                    <div className="col">
                        <p className="numeric">300+</p>
                        <p className="numeric-text">
                            Teaching
                            <br />
                            Staff
                        </p>
                    </div>
                    <div className="col">
                        <p className="numeric">250+</p>
                        <p className="numeric-text">
                            Non-Teaching
                            <br />
                            Staff
                        </p>
                    </div>
                </div>
                <svg viewBox="0 25 1110 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text fill="#7A8193" fontWeight="500" fontSize="14" x="0" y="170">
                        1939
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="20" x="0" y="195">
                        Established
                    </text>
                    <text fill="#4F4F4F" fontWeight="400" fontSize="14" x="0" y="218">
                        as the first engineering college in the state
                    </text>
                    <text fill="#7A8193" fontWeight="500" fontSize="14" x="390" y="45">
                        1960
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="20" x="390" y="72">
                        Shifted to the present campus
                    </text>
                    <text fill="#4F4F4F" fontWeight="400" fontSize="14" x="390" y="95">
                        new campus sprawling across 80 acres
                    </text>
                    <text fill="#7A8193" fontWeight="500" fontSize="14" x="1110" y="170" textAnchor="end">
                        2019
                    </text>
                    <text fill="#1f7ae0" fontWeight="600" fontSize="20" x="1110" y="195" textAnchor="end">
                        Celebrated 85 years
                    </text>
                    <text fill="#4F4F4F" fontWeight="400" fontSize="14" x="1110" y="218" textAnchor="end">
                        85th anniversary of nurturing young engineering minds
                    </text>

                    <circle opacity="0.3" cx="12" cy="130" r="12" fill="#2ECC71" />
                    <circle cx="12" cy="130" r="7.2" fill="#2ECC71" />
                    <circle opacity="0.3" cx="399" cy="130" r="12" fill="#2ECC71" />
                    <circle cx="399" cy="130" r="7.2" fill="#2ECC71" />
                    <circle opacity="0.3" cx="1098" cy="130" r="12" fill="#2ECC71" />
                    <circle cx="1098" cy="130" r="7.2" fill="#2ECC71" />
                    <line
                        opacity="0.75"
                        x1="24"
                        y1="128"
                        x2="387"
                        y2="128"
                        stroke="#7A8193"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />
                    <line
                        opacity="0.75"
                        x1="411"
                        y1="128"
                        x2="1086"
                        y2="128"
                        stroke="#7A8193"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />
                </svg>

                <div className="row">
                    <div className="alm-cntnt col-12 col-md-5 col-lg-6 text-center text-md-start pe-md-5 py-4">
                        <div className="page-head">Our Alumni</div>
                        <div className="abt-desc">
                            The CET Alumni association (CETAA) was initiated in 1976. They ensure support to the
                            deserving students who require financial assistance through the Growing Engineers Monetary
                            Support (GEMS) scheme which is the major outcome of the CETAA Global Meet held at Dubai in
                            2010. The association has also introduced several awards and endowments for meritorious
                            students excelling in both academics and extracurricular activities.
                            <br />
                            <br />
                            CETAA has immensely contributed towards various infrastructural development projects in the
                            College campus. Apart from providing financial support, the alumni are directly involved in
                            devising and conducting various programmes to enhance the various skills of the students for
                            their better employability.
                            <br />
                            <br />
                            <a
                                href="https://alumni.cet.ac.in/"
                                className="learnLink"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 py-2 my-auto my-4">
                        <div className="alumnicontent">
                            <div className="alumnititle">
                                <div className="alumnipic">
                                    <img src={cetaalogo} alt="cetaa-logo"></img>
                                </div>
                                <div className="alumniheading ps-4">
                                    College of Engineering Trivandrum Alumni Association
                                </div>
                            </div>
                            <ul className="my-2">
                                {alumni.map((x, key) => (
                                    <li key={key} className="abt-desc">
                                        {x}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
