import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import Products from "../components/shop/Products";

const Shop = ({ data }) => {
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
            name: "robots",
            content: "noindex",
          },
          {
            name: "keywords",
            content:
              "hoodies, appharel, clothes, memberships, sportswear, merch",
          },
        ]}
      />

      <Header
        title={
          <>
            the Fitness Republic <span>shop</span>
          </>
        }
        subtitle={
          "Memberships, Hoodies and other merch. All with that FR style"
        }
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
