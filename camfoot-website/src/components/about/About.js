import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import backgroundImage from "../../images/logoCamfoot.JPG";
import "./About.css";

const About = () => {
  return (
  <div>
    <div>
    <Typography
            variant="h4"
            component="div"
            gutterBottom
            style={{
              color: "#012f01",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            About Us
          </Typography>
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
        Our Founders
      </Typography>

      <div className="container-fluid">
        <div className="row ml-4 mr-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">President: Eric</h5>
                <p className="card-text body-card">
                  You are supporting ethical practices from small local farms
                  and butchers who limit waste creating a more sustainable
                  system
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Vice-President: Max</h5>
                <p className="card-text body-card">
                  The by product of reducing the time your meat is cut and sold,
                  sourcing from local farms that are grass fed and pasture
                  raised results in a fresher, tastier cut of meat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Treasurer: Paul Sidze</h5>
                <p className="card-text body-card">
                  You know where your meat is coming from
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
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
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">President: Eric</h5>
                <p className="card-text body-card">
                  You are supporting ethical practices from small local farms
                  and butchers who limit waste creating a more sustainable
                  system
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Vice-President: Max</h5>
                <p className="card-text body-card">
                  The by product of reducing the time your meat is cut and sold,
                  sourcing from local farms that are grass fed and pasture
                  raised results in a fresher, tastier cut of meat
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={backgroundImage}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Treasurer: Paul Sidze</h5>
                <p className="card-text body-card">
                  You know where your meat is coming from
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  <div>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <Card variant="outlined" sx={{ minWidth: 275, maxWidth: 800, margin: 3 }}>
        <CardContent>
         
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            style={{
              color: "#012f01",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Who are we?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ fontSize: "15px", lineHeight: "1.6", color: "#333" }}
          >
            <bold>Whole animal butchery</bold> is the practice of receiving
            whole animals carcasses and breaking it down instead of receiving
            parts of an animal in bulk standard cuts.
            <br />
            <br />
            This type of practice supports small local farms instead of large
            feed lot/factory farms that are harmful to our planet.
            <br />
            <br />
            It requires very experienced butchers who can customize cuts or
            roasts for you the consumer depending on the season. Since we
            receive the entire carcass, you will find a variety of cuts of beef,
            pork and lamb that you do not see in traditional butcher shops.
          </Typography>
          <br />
          <Typography
            variant="h6"
            component="div"
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
              margin: "10px",
              backgroundColor: "#f5f5f5",
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
                Source Clarity
              </Typography>
              You know where your meat is coming from
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px",
              margin: "10px",
              backgroundColor: "#f5f5f5",
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
                Sustainability
              </Typography>
              You are supporting ethical practices from small local farms and
              butchers who limit waste creating a more sustainable system
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px",
              margin: "10px",
              backgroundColor: "#f5f5f5",
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
                Freshness
              </Typography>
              The by product of reducing the time your meat is cut and sold,
              sourcing from local farms that are grass fed and pasture raised
              results in a fresher, tastier cut of meat
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </div>
</div>

  );
};

export default About;
