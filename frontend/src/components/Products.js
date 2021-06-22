import React from "react";
import { graphql, StaticQuery } from "gatsby";

export default function Products(props) {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  active
                  created
                  description
                  images
                  id
                  name
                  type
                  updated
                  object
                  livemode
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => (
        <div>
          {prices.edges.map(({ node: price }) => (
            <>
              <h5 key={price.id}>{price.product.name}</h5>
              <p key={price.id}>{price.product.description}</p>
              <img src={price.product.images[0]} />
              <p>£{price.unit_amount / 100}</p>
              <button type="button">Buy Now</button>
            </>
          ))}
        </div>
      )}
    />
  );
}
