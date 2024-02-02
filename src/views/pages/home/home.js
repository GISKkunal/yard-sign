import React from "react";
import Banner from "./banner";
import makeStyles from '@mui/styles/makeStyles';
import Footer from "src/views/auth/Main/footer";
import Carousel from "./Carousel";
import MapExplor from "./MapExplor";
import Board from "./Board";
import Steps from "./Steps";

const useStyles = makeStyles((theme) => ({
  bannerBgStyle: {
    // backgroundImage: "url('/images/BannerBg.svg')",
    backgroundSize: "cover",
    background: "#172624",
    paddingBottom: "5px",
    // paddingTop: '40px'
  },
  carousalStyle: {
    background: "#fff",
    padding: "60px 0 0 0",
    "@media (max-width: 920px)": {
      padding: "30px 0 0 0",
    },
    "@media (max-width: 599px)": {
      padding: "20px 0 0 0",
    },
  },
  carousalStyle1: {
    background: "#FFF",
    padding: "80px 0",
    "@media (max-width: 920px)": {
      padding: "40px 0",
    },
    "@media (max-width: 599px)": {
      padding: "30px 0",
    },
  },
  mapExplor: {
    background: "#F5F5F5",
    padding: "80px 0",
    "@media (max-width: 920px)": {
      padding: "40px 0",
    },
    "@media (max-width: 599px)": {
      padding: "20px 0",
    },
  },
  bannerImg: {
    // backgroundImage: "url('/images/MaskgroupBackground.svg')",
    // backgroundSize: "cover",
    // paddingBottom: "5px",
    // paddingTop: '40px',
    // height:"200px",
    // width:"100%",
    marginBottom: "-5px"
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <section className={classes.bannerBgStyle} id="home-bar">
        <Banner />
      </section>
      <section className={classes.carousalStyle} id="scrolling-bar">
        <Carousel />
      </section>
      <section className={classes.bannerImg}>
        <img src="/images/MaskgroupBackground.svg" alt="#" style={{width:"100%"}}/>
      </section>
      <section className={classes.mapExplor} id="map-bar">
        <MapExplor />
      </section>
      <section className={classes.carousalStyle1} id="board-bar">
        {/* <Board /> */}
        <Steps />
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
