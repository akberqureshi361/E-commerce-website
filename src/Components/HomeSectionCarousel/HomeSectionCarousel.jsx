import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSection from "../HomeSection/HomeSection";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { Key } from "@mui/icons-material";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSection />);

  return (
    <div className=" border border-black px-4 lg:px-8">
      <div className=" relative p-5">
        <AliceCarousel
          // mouseTracking
          items={items}
          disableButtonsControls
          
          infinite
          responsive={responsive}
        />
        <Button
          variant="contained"
          className=" z-50 p-12 "
          sx={{ position: "absolute", top: "8rem", right: "0rem " }} aria-label="next"
        >
          <KeyboardArrowLeftIcon className=" rotate-180" />
        </Button>

        <Button
          variant="contained"
          className=" z-50 p-12 border-r-4"
          sx={{ position: "absolute", top: "8rem", left: "0rem " }}
        >
          <KeyboardArrowLeftIcon />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
