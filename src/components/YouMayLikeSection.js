import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { Add } from "@mui/icons-material";

const YouMayLikeSection = () => {
  const sampleCards = [
    { title: "Title", genre: "#genre", img: "path/to/image1.jpg" },
    { title: "Title", genre: "#genre", img: "path/to/image2.jpg" },
    { title: "Title", genre: "#genre", img: "path/to/image3.jpg" },
  ];

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        my={4}
        sx={{ width: "100vw" }}
      >
        <Button variant="contained" color="primary" endIcon={<Add />}>
          Start Writing
        </Button>
      </Box>
      <Box
        sx={{ width: "100vw" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        my={4}
      >
        <Divider
          sx={{ flexGrow: 1, borderBottomWidth: 2, borderColor: "black" }}
        />
        <Typography variant="h4" align="center" mx={2}>
          YOU MAY LIKE
        </Typography>
        <Divider
          sx={{ flexGrow: 1, borderBottomWidth: 2, borderColor: "black" }}
        />
      </Box>
      <Grid
        container
        spacing={10}
        justifyContent="center"
        sx={{ width: "100vw" }}
      >
        {sampleCards.map((card, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                width="300"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.genre}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{ width: "100vw" }}
        display="flex"
        justifyContent="center"
        my={4}
      >
        <Button variant="contained" color="primary">
          Start Reading
        </Button>
      </Box>
    </>
  );
};

export default YouMayLikeSection;
