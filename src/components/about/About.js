import React, { useState } from 'react';
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import backgroundImage from "../../images/logoCamfoot.jpg";
import ericPresident from "../../images/ericPresident.png";
import maximeVicePresident from "../../images/maximVP.png";
import jamesTeamManager from "../../images/jamesTM.jpg";
import jeanCoach from "../../images/jpCoach.png";
import michelPRO from "../../images/banenPublicOfficer.png";
import "./About.css";
import { green } from "@mui/material/colors";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <div>
      <Typography
          variant="h6"
          component="div"
          className="text-center"
          gutterBottom
          style={{
            color: "#012f01",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Who we are?
        </Typography>

        <div>
          {/* <h1 className="text-center quotes-font">"</h1> */}
          <p className="text-center text-font-history">
          Camfoot Veteran FC is a registered, insured non-profit organization based in Austin, Texas. We are passionate about advancing the sport of football while upholding the highest standards of sportsmanship.
            <br />
            Our mission extends beyond the field; we aim to build strong connections among players, supporters, and the wider community.
            <br />
            <br />
            We are dedicated to creating a positive impact through charitable activities and community engagement. Our commitment is to excel in football while fostering meaningful relationships and contributing to the well-being of the Austin community both on and off the pitch.
            <br />
          </p>
        </div>

        <br />
        <Typography
          variant="h6"
          component="div"
          className="text-center"
          gutterBottom
          style={{
            color: "#012f01",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          What do we do?
        </Typography>
              <Box
                sx={{
                  padding: "10px",
                  margin: "50px",
                  backgroundColor: "#F5F5DC",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Weekly meeting for soccer practice
                  </Typography>
                  Camfoot Veteran FC meets every week for soccer practice. We have a team of dedicated players who are passionate about the sport and are always ready to give their best.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  margin: "50px",
                  backgroundColor: "#F5F5DC",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Volunteering in the community
                  </Typography>
                  Camfoot Veteran FC is committed to giving back to the community. We volunteer in various community service projects to help those in need.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  margin: "50px",
                  backgroundColor: "#F5F5DC",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Community engagement
                  </Typography>
                  Camfoot Veteran FC is actively involved in community engagement activities. We organize events and programs to bring the community together and foster a sense of unity.
                </Typography>
              </Box>
      
        <Typography
          variant="h6"
          component="div"
          className="text-center"
          gutterBottom
          style={{
            color: "#012f01",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Our Leadership
        </Typography>

        <div className="container-fluid">
          <div className="row ml-4 mr-4">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
              <div className="card p-2">
                <img
                  src={ericPresident}
                  className="img-fluid-about"
                  alt="Responsive image"
                />
                <div className="card-body">
                  <h5 className="card-title header-card">President: Eric Nchanji</h5>
                  <p className="card-text body-card">
                    {isExpanded ? "As a current resident in Austin Texas, with a strong passion for soccer, and community leadership, I have dedicated my time in bringing up the community to what it is today. I got my passion for soccer from being a leader back in the ABVC club in Yaounde, and the G4S veteran soccer club in Douala. Going forward we plan on involving ourselves more in the community by doing more voluntary work." : "As a current resident in Austin Texas, with a strong passion for soccer, and community leadership, I have dedicated my time in bringing up the community to what it is today."}
                  </p>
                  <button onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Show Less' : 'Show More'}
                  </button>
              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
              <div className="card p-2">
                <img
                  src={maximeVicePresident}
                  className="img-fluid-about"
                  alt="Responsive image"
                />
                <div className="card-body">
                  <h5 className="card-title header-card">
                    Vice-President: Maxime Hakoua Siewe
                  </h5>
                  <p className="card-text body-card">
                  Leading and serving CAMFOOT VFC from its birth to now and for many years to come is and has been by far the most rewarding experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
              <div className="card p-2">
                <img
                  src={backgroundImage}
                  className="img-fluid-about"
                  alt="Responsive image"
                />
                <div className="card-body">
                  <h5 className="card-title header-card">
                    Secretary: Wona Yannick
                  </h5>
                  <p className="card-text body-card">
                    
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
              <div className="card p-2">
                <img
                  src={jamesTeamManager}
                  className="img-fluid-about"
                  alt="Responsive image"
                />
                <div className="card-body">
                  <h5 className="card-title header-card">Team Manager: James Tietcheu</h5>
                  <p className="card-text body-card">
                    {isExpanded ? "Beyond his technical expertise in software engineering, James is deeply committed to giving back to his community. His passion for both technology and community service drives him to use his skills for the greater good, making a meaningful impact both professionally and personally." : "Beyond his technical expertise in software engineering, James is deeply committed to giving back to his community."}
                  </p>
                  <button onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
              <div className="card p-2">
                <img
                  src={jeanCoach}
                  className="img-fluid-about"
                  alt="Responsive image"
                />
                <div className="card-body">
                  <h5 className="card-title header-card">Coach: Jean Paul Dobi</h5>
                    <p className="card-text body-card">
                      {isExpanded ? "As a current resident in Austin, Texas, with a strong passion for data engineering, soccer, and community leadership, I have dedicated my life to excelling in my professional career while actively contributing to my community. As a Senior Developer, I am responsible for designing, developing, and maintaining data pipelines that support various business needs. Over the years, I have honed my skills in data analysis, database management, and big data technologies. I have a knack for transforming raw data into meaningful insights, which has been instrumental in my professional growth. Outside of my professional life, I am a passionate soccer enthusiast. I have been playing soccer since my childhood and continue to participate in local leagues and tournaments. In addition to my career and love for soccer, I am deeply committed to serving the community I live In. My leadership roles include and are not limited to coaching our soccer Team, volunteering at local shelters, and organizing community clean-up events. I believe in the power of community and strive to make a positive impact wherever I can." : "As a current resident in Austin, Texas, with a strong passion for data engineering, soccer, and community leadership, I have dedicated my life to excelling in my professional career"}
                    </p>
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                      {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
              <div className="card p-2">
                <img
                  src={michelPRO}
                  className="img-fluid-about"
                  alt="Responsive image"
                />
                <div className="card-body">
                  <h5 className="card-title header-card">Public Relations Officer: Michel Banen</h5>
                  <p className="card-text body-card">
                  Tax Experts, Commercial Loans Broker and Financial Professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
