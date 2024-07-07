import React from "react";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import GenreCarousel from "../components/GenreCarousel";
import YouMayLikeSection from "../components/YouMayLikeSection";
import "./login.css";

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <GenreCarousel />
      <YouMayLikeSection />
    </Layout>
  );
};

export default Home;
