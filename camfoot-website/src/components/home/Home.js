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
import "./Home.css";

function Home() {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Flora", title: "Flora" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      caption: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
      caption: "Color Pencils (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
      original: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
      width: 320,
      height: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
    },
    {
      src: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
      original: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg",
      width: 320,
      height: 183,
      caption: "37H (gratispgraphy.com)",
    },
    {
      src: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      original: "https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg",
      width: 240,
      height: 320,
      tags: [{ value: "Nature", title: "Nature" }],
      caption: "8H (gratisography.com)",
    },
    {
      src: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      original: "https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg",
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
    },
    {
      src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
      width: 320,
      height: 148,
      tags: [{ value: "People", title: "People" }],
      caption: "315H (gratisography.com)",
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
      <h1 className="text-center text-camfoot">
        Camfoot VFC
        </h1>
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
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <h1 className="text-center text-font">
          Our History
        </h1>
      </div>

      <hr className="line-spacing-bottom"></hr>

      <div>
        {/* <h1 className="text-center quotes-font">"</h1> */}
        <p className="text-center text-font-history">
          We work with with farmers who feed their cows on a purely grass-based
          diet.
          <br />
          We believe that this is how they are designed to live and feed, and we
          take pride in our herds having a natural way of life, roaming the
          hills and creating family bonds.
          <br />
          <br />
          Healthy grass is a must as it contributes to our cows living totally
          natural lives.
          <br />
          We have seen great results feeding our cows a grass-based diet over
          the years, and it has been instrumental to helping us run our farm in
          a nature-focused and cost-effective way
          <br />
          <br />
          This is why take a lot of pride in the meat we sell to our customers.
        </p>
      </div>

      <hr className="line-spacing-top"></hr>
      <div>
        <h1 className="text-center text-font">About Us</h1>
      </div>
      <hr className="line-spacing-bottom"></hr>

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
          <bold>Whole animal butchery</bold> is the practice of receiving whole
          animals carcasses and breaking it down instead of receiving parts of
          an animal in bulk standard cuts.
          <br />
          <br />
          This type of practice supports small local farms instead of large feed
          lot/factory farms that are harmful to our planet.
          <br />
          <br />
          It requires very experienced butchers who can customize cuts or roasts
          for you the consumer depending on the season. Since we receive the
          entire carcass, you will find a variety of cuts of beef, pork and lamb
          that you do not see in traditional butcher shops.
        </Typography>
        {/* </CardContent> */}
        {/* </Card> */}
      </div>

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
          Our acitivies
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-buchery"
          style={{ fontSize: "15px", lineHeight: "1.6", color: "#333" }}
        >
          <ul>
            <li>
              <span>Volunteering: </span>
              over the years we have been involved in numerous charitable activities
            </li>
            <li>
              <span>Volunteering: </span>
              over the years we have been involved in numerous charitable activities
            </li>
            <li>
              <span>Volunteering: </span>
              over the years we have been involved in numerous charitable activities
            </li>
            <li>
              <span>Volunteering: </span>
              over the years we have been involved in numerous charitable activities
            </li>
            
          </ul>
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
        Our Values
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
                <h5 className="card-title header-card">Sustainability</h5>
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
                <h5 className="card-title header-card">Freshness</h5>
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
                <h5 className="card-title header-card">Source Clarity</h5>
                <p className="card-text body-card">
                  You know where your meat is coming from
                </p>
              </div>
            </div>
          </div>
        </div>
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

      {/* <div className="container-fluid">
      <div className="row ml-4 mr-4">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 h-100">
          <div className="card p-2">
            <img src={backgroundImage} className="img-fluid" alt="Responsive image" />
            <div className="card-body">
              <h5 className="card-title">Fresh Meat</h5>
              <p className="card-text">Our meat is always fresh and never frozen</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default Home;
