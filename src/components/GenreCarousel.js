import React, { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { Fullscreen } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const genres = ["#thriller", "#horror", "#poems", "#adventure", "#random"];

const slides = [
  {
    genre: "#thriller",
    userId: "user1",
    title: "Title Of The Writeup",
    description: "Thriller 1",
    story:
      "Lorem ipsum dolor sit amet. Et dolores praesentium et omnis molestiae qui expedita enim sit aperiam obcaecati nam molestias voluptatem...",
  },
  {
    genre: "#horror",
    userId: "user2",
    title: "Title Of The Writeup",
    description: "Horror 1",
    story: "Full story of the writeup... (random text)",
  },
  {
    genre: "#thriller",
    userId: "user3",
    title: "Title Of The Writeup",
    description: "Thriller 2",
    story:
      "Lorem ipsum dolor sit amet. Et dolores praesentium et omnis molestiae qui expedita enim sit aperiam obcaecati nam molestias voluptatem...",
  },
  // Add more slides for each genre
];

const GenreCarousel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentGenre, setCurrentGenre] = useState(genres[0]);
  const navigate = useNavigate();

  const handleGenreChange = (genre) => {
    setCurrentGenre(genre);
    setActiveStep(0);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % filteredSlides.length);
  };

  const handlePrev = () => {
    setActiveStep(
      (prevStep) =>
        (prevStep - 1 + filteredSlides.length) % filteredSlides.length
    );
  };

  const filteredSlides = slides.filter((slide) => slide.genre === currentGenre);

  const currentSlide = filteredSlides[activeStep];

  const handleFullscreen = () => {
    navigate("/fullscreen", {
      state: { title: currentSlide.title, story: currentSlide.story },
    });
  };

  return (
    <Box
      sx={{
        width: "99vw",
        position: "relative",
        overflow: "hidden",
        background: "offwhite",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          p: 2,
          width: "100%",
        }}
      >
        {genres.map((genre) => (
          <Button
            key={genre}
            variant="contained"
            onClick={() => handleGenreChange(genre)}
          >
            {genre}
          </Button>
        ))}
      </Box>

      <SwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        style={{ width: "100%" }}
        containerStyle={{ width: "100%" }}
        slideStyle={{ width: "100%" }}
      >
        {filteredSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "70vh",
              position: "relative",
              p: 2,
            }}
          >
            <Typography
              variant="caption"
              sx={{ position: "absolute", top: 0, left: 0 }}
            >
              user id: {slide.userId}
            </Typography>
            <Box
              sx={{
                width: "30%",
                bgcolor: "grey.300",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "cursive",
                  fontSize: "3rem",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                Tittle
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "cursive",
                  fontSize: "3rem",
                  color: "black",
                  marginLeft: "100px",
                }}
              >
                Of
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "cursive",
                  fontSize: "3rem",
                  color: "black",
                  marginLeft: "20px",
                }}
              >
                The
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "cursive",
                  fontSize: "3rem",
                  color: "black",
                  marginLeft: "100px",
                }}
              >
                Writeup
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "20px",
                  height: "20px",
                  bgcolor: "white",
                }}
              />
            </Box>
            <Box sx={{ width: "60%", p: 2 }}>
              <Typography variant="body1">{slide.description}</Typography>
            </Box>
            <IconButton
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={handleFullscreen}
            >
              <Fullscreen />
            </IconButton>
          </Box>
        ))}
      </SwipeableViews>

      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

export default GenreCarousel;
