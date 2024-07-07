import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carouselItems = [
  {
    imgPath: "https://source.unsplash.com/random/1600x900/?nature,water",
  },
  {
    imgPath: "https://source.unsplash.com/random/1600x900/?nature,bird",
  },
  {
    imgPath: "https://source.unsplash.com/random/1600x900/?nature,forest",
  },
  {
    imgPath: "https://source.unsplash.com/random/1600x900/?nature,mountain",
  },
];

const Carousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselItems.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "70vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
        disableLazyLoading
        animateTransitions
      >
        {carouselItems.map((step, index) => (
          <Box
            key={index}
            sx={{
              width: "100vw",
              height: "70vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={step.imgPath}
              alt={`carousel-img-${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        size="large"
        onClick={handleBack}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        size="large"
        onClick={handleNext}
      >
        <KeyboardArrowRight />
      </IconButton>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "5px",
        }}
      >
        {Array.from(Array(maxSteps).keys()).map((index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                activeStep === index ? "white" : "rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </div>
    </Box>
  );
};

export default Carousel;
