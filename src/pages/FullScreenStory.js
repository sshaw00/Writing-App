import React from "react";
import Layout from "../components/layout";
import { useLocation } from "react-router-dom";
import { Box, Button, Typography, AppBar, Toolbar } from "@mui/material";

const genres = ["#thriller", "#horror", "#poems", "#adventure", "#random"];
const handleGenreChange = (genre) => {
  setCurrentGenre(genre);
  setActiveStep(0);
};
const FullScreenStory = () => {
  const location = useLocation();
  const { title, story } = location.state || {
    title: "No Title",
    story: "No Story",
  };

  return (
    <Layout>
      <Box
        sx={{ width: "100vw", height: "100vh", bgcolor: "background.paper" }}
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
        <AppBar position="static"></AppBar>
        <Box sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{story}</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default FullScreenStory;
