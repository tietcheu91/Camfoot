import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Gallery } from "react-grid-gallery";
import ICU from "i18next-icu";
import { Card, CardContent, Typography, Box } from "@mui/material";
// import logo from "../../images/logoMM.jpg";
import backgroundImage from "../../images/homePageCamfoot.JPG";
import practice from "../../images/practice.jpg";
import backToSchool from "../../images/backToSchool.jpg";
import casa from "../../images/casa.JPG";
import loaf from "../../images/loaf.JPG";
import familyDay from "../../images/familyDay.JPG";
import "./Home.css";

function Home() {
  const images = [
      {
        src: require("../../images/galery1.jpg"),
        original: require("../../images/galery1.jpg"),
        width: 200,
        height: 174,
        tags: [
          { value: "Nature", title: "Nature" },
          { value: "Mirror", title: "Flora" },
        ],
        caption: "After Rain (Jeshu John - designerspics.com)",
      },
      {
        src: require("../../images/galery2.jpg"),
        original: require("../../images/galery2.jpg"),
        width: 220,
        height: 212,
        caption: "Boats (Jeshu John - designerspics.com)",
      },
      {
        src: require("../../images/galery3.jpg"),
        original: require("../../images/galery3.jpg"),
        width: 150,
        height: 152,
        caption: "Color Pencils (Jeshu John - designerspics.com)",
      },
      {
        src: require("../../images/galery4.jpg"),
        original: require("../../images/galery4.jpg"),
        width: 220,
        height: 213,
        caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
      },
      {
        src: require("../../images/galery5.jpg"),
        original: require("../../images/galery5.jpg"),
        width: 220,
        height: 183,
        caption: "37H (gratispgraphy.com)",
      },
      {
        src: require("../../images/galery6.jpg"),
        original: require("../../images/galery6.jpg"),
        width: 270,
        height: 320,
        tags: [{ value: "Nature", title: "Nature" }],
        caption: "8H (gratisography.com)",
      },
      {
        src: require("../../images/galery7.jpg"),
        original: require("../../images/galery7.jpg"),
        width: 320,
        height: 190,
        caption: "286H (gratisography.com)",
      },
      {
        src: require("../../images/galery8.jpg"),
        original: require("../../images/galery8.jpg"),
        width: 200,
        height: 148,
        tags: [{ value: "People", title: "People" }],
        caption: "315H (gratisography.com)",
      },
      {
        src: require("../../images/galery9.jpg"),
        original: require("../../images/galery9.jpg"),
        width: 420,
        height: 313,
        caption: "201H (gratisography.com)",
      },
      {
        src: require("../../images/galery14.jpg"),
        original: require("../../images/galery14.jpg"),
        alt: "Big Ben - London",
        width: 248,
        height: 320,
        caption: "Big Ben (Tom Eversley - isorepublic.com)",
      },
      {
        src: require("../../images/galery10.jpg"),
        original: require("../../images/galery10.jpg"),
        alt: "Red Zone - Paris",
        width: 200,
        height: 213,
        tags: [{ value: "People", title: "People" }],
        caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
      },
      {
        src: require("../../images/galery11.jpg"),
        original: require("../../images/galery11.jpg"),
        alt: "Wood Glass",
        width: 313,
        height: 320,
        caption: "Wood Glass (Tom Eversley - isorepublic.com)",
      },
      {
        src: require("../../images/galery13.jpg"),
        original: require("../../images/galery13.jpg"),
        width: 320,
        height: 213,
        caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
      },
    // {
    //   src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    //   original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    //   width: 320,
    //   height: 213,
    //   caption: "201H (gratisography.com)",
    // },
    // {
    //   src: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    //   original: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg",
    //   alt: "Big Ben - London",
    //   width: 248,
    //   height: 320,
    //   caption: "Big Ben (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    //   original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    //   alt: "Red Zone - Paris",
    //   width: 320,
    //   height: 113,
    //   tags: [{ value: "People", title: "People" }],
    //   caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //   original: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    //   alt: "Wood Glass",
    //   width: 313,
    //   height: 320,
    //   caption: "Wood Glass (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    //   original: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    //   width: 320,
    //   height: 213,
    //   caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    //   original: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    //   width: 320,
    //   height: 194,
    //   caption: "Old Barn (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    //   original: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    //   alt: "Cosmos Flower",
    //   width: 320,
    //   height: 213,
    //   caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    //   original: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg",
    //   width: 271,
    //   height: 320,
    //   caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    //   original: "https://c1.staticflickr.com/9/8330/28941240416_71d2a7af8e_b.jpg",
    //   width: 320,
    //   height: 213,
    //   tags: [
    //     { value: "Nature", title: "Nature" },
    //     { value: "People", title: "People" },
    //   ],
    //   caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    //   original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
    //   width: 320,
    //   height: 213,
    //   tags: [
    //     { value: "People", title: "People" },
    //     { value: "Sport", title: "Sport" },
    //   ],
    //   caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    //   original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
    //   width: 320,
    //   height: 213,
    //   caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    //   original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
    //   width: 320,
    //   height: 213,
    //   caption: "Time to Think (Tom Eversley - isorepublic.com)",
    // },
    // {
    //   src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    //   original: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
    //   width: 320,
    //   height: 179,
    //   tags: [
    //     { value: "Nature", title: "Nature" },
    //     { value: "Fauna", title: "Fauna" },
    //   ],
    //   caption: "Untitled (Jan Vasek - jeshoots.com)",
    // },
    // {
    //   src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    //   original: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    //   width: 320,
    //   height: 215,
    //   tags: [{ value: "People", title: "People" }],
    //   caption: "Untitled (moveast.me)",
    // },
    // {
    //   src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    //   original: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    //   width: 257,
    //   height: 320,
    //   caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    // },
    // {
    //   src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    //   original: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
    //   width: 226,
    //   height: 320,
    //   caption: "A photo by Matthew Wiebe. (unsplash.com)",
    // },
  ];

  
  return (
    <div>
      <div className="home-container">
        <h1 className="text-center text-camfoot">Camfoot VFC</h1>
      </div>

      <div className="text-light">
        <img
          src={backgroundImage}
          className="img-fluid"
          alt="Responsive image"
        />
      </div>

      <hr className="line-spacing-top"></hr>
      <div>
        <h1 className="text-center text-font">About Us</h1>
      </div>
      <hr className="line-spacing-bottom"></hr>

      <div>
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <p className="text-center text-font-history">
          CAMFOOT VETERAN FC is a registered and insured non-profit organization
          based in Austin, Texas.
          <br />
          We are dedicated to promoting football, good sportsmanship, fostering
          relationships between players, friends, guests, sympathizers, and
          conducting charity works within the Austin community.
          <br />
          <br />
          Our team is committed to not only excelling in football but also
          making a positive impact on the community through our actions both on
          and off the field.
          <br />
        </p>
      </div>

      {/* <Card className="text-center" sx={{ margin: 3 }}> */}
      {/* <CardContent > */}
      <div className="text-center text-space">
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
          Our mission statement
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-buchery"
          style={{ fontSize: "15px", lineHeight: "1.6", color: "#333" }}
        >
          <bold>at CAMFOOT VETERAN FC</bold>, our mission is to bring brilliant
          minds from different backgrounds, races, cultures, religions and
          countries together through soccer so that, united, we can offer help
          to the less privileged in our community. As an organization we also
          embrace and celebrate diversity, equity, and inclusion.
          <br />
          <br />
          Our primary objective at CAMFOOT VETERAN FC is to promote football and
          cultivate good sportsmanship among our players and the community. We
          aim to build strong relationships and a sense of camaraderie among our
          members, supporters, and the wider community. Additionally, we are
          passionate about giving back through various charity initiatives that
          benefit those in need within the Austin area.
          <br />
        </Typography>
        {/* </CardContent> */}
        {/* </Card> */}
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
        Our activities
      </Typography>

      <div className="container-fluid">
        <div className="row ml-4 mr-4">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img src={casa} className="img-fluid" alt="Responsive image" />
              <div className="card-body">
                <h5 className="card-title header-card">
                  Camfoot volunteer with La Casa Marianella
                </h5>
                <p className="card-text body-card">
                  Casa Marianella warmly embraces displaced immigrants, offering
                  crucial shelter and support services aimed at fostering
                  self-sufficiency. Over its 38-year history, Casa Marianella
                  has transformed from aiding survivors of the Salvadoran war to
                  assisting asylum seekers and immigrants from more than 40
                  nations. As the sole homeless shelter in Austin dedicated
                  exclusively to immigrants, Casa Marianella provides refuge to
                  a diverse community, with 65% of its residents, including
                  children, being asylum seekers who have often recently left
                  immigration detention. 
                  <br />
                  Volunteering with Casa Marianella
                  proved to be an exceptionally meaningful experience for many
                  of our members, who have directly benefited from the
                  organization's vital services. This opportunity allowed them
                  to engage firsthand with individuals facing significant
                  challenges, fostering profound empathy and understanding
                  across cultural, racial, and socioeconomic boundaries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img src={loaf} className="img-fluid" alt="Responsive image" />
              <div className="card-body">
                <h5 className="card-title header-card">
                  Camfoot volunteer with Mobile Loaves & Fishes
                </h5>
                <p className="card-text body-card">
                  Camfoot made a remarkable impact this year through their
                  dedicated volunteer work with Mobile Loaves & Fishes, a
                  respected Christian social outreach ministry in Austin, Texas,
                  known for its transformative efforts in empowering homeless
                  communities since 1998. 
                  
                  <br />
                  By joining forces with Mobile Loaves &
                  Fishes, Camfoot not only strengthened community bonds but also
                  united passionate members in a shared mission to effect
                  positive change. This collaboration forged a network of
                  like-minded individuals dedicated to social justice and
                  collective action, aligning perfectly with Camfoot’s vision of
                  using soccer as a catalyst for meaningful community engagement
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
            <div className="card p-2">
              <img
                src={familyDay}
                className="img-fluid"
                alt="Responsive image"
              />
              <div className="card-body">
                <h5 className="card-title header-card">Camfoot Family Day</h5>
                <p className="card-text body-card">
                  Camfoot Family Day is more than just an event—it's a catalyst
                  for building lasting relationships beyond the field. It
                  creates opportunities for families and supporters to deepen
                  connections, fostering friendships and a robust support
                  network within our community. Last year, Camfoot Family Day
                  gathered over 300 parents and children for a day filled with
                  relaxation and engaging activities, from games and
                  entertainment to shared meals. 
                  <br />

                  This annual celebration serves
                  as a joyful platform to honor the achievements of our youth in
                  various facets of life—be it academic success, community
                  service, or personal growth. It's a moment to recognize and
                  applaud both individual accomplishments and collective
                  contributions to our vibrant Camfoot family
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
  Upcoming Events
</Typography>

<div className="event">
  <div className="event-date">
    <h3>10</h3>
    <h5>August</h5>
    <h6>2024</h6>
  </div>
  <div className="event-details">
    <h2>Camfoot Family Day - Go Back to School</h2>
    <p>Time: 2:00 PM</p>
    <p>Location: Austin, Texas</p>
  </div>
  <div className="event-image">
  <img
                src={backToSchool}
                // className="img-fluid"
                alt="Responsive image"
              />  </div>
</div>

      <div>
        <div>
          {/* <h1 className="text-center quotes-font">"</h1> */}
          <hr className="line-spacing-top"></hr>
          <div>
            <h1 className="text-center text-font">Our Gallery</h1>
          </div>
          <hr className="line-spacing-bottom"></hr>
          <Gallery images={images} />
        </div>
      </div>
    </div>
  );
}

export default Home;
