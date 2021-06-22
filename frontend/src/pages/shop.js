import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import Products from "../components/Products";

const Shop = (props) => {
  return (
    <>
      <Helmet
        title="Fitness Republic Gym | Shop "
        meta={[
          {
            name: "description",
            content:
              "We write articles on fitness, diet control, weight loss and training all while promoting good health.",
          },
          {
            name: "keywords",
            content:
              "weight loss, calories, low fat, workout, gym, ashby, ashby de la zouch, fitness, health, lose fat, blog, articles, low carb, wellbeing, well being",
          },
        ]}
      />

      <Header
        title={
          <>
            Fitness Republic <span>merchendise</span>
          </>
        }
        subtitle={"Branded sports wear and gym accessories"}
      />
      <Container>
        <DualSection>
          <Products />
        </DualSection>
      </Container>
    </>
  );
};

export default Shop;
