import React, { useState } from "react";
import getStripe from "../../utils/stripejs";
const cardStyles = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "2rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "16px",
  width: "360px;",
};

const imageStyle = {
  borderRadius: "16px",
  width: "300px",
  height: "300px",
  border: "1px solid black",
};

const buttonStyles = {
  display: "block",
  fontSize: "1rem",
  textAlign: "center",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "var(--orange)",
  fontWeight: "bold",
  color: "var(--white)",
  borderRadius: "32px",
  letterSpacing: "1.5px",
  cursor: "pointer",
  width: "100%",
  padding: "1rem 0",
};

const paragraphStyles = {
  maxWidth: "300px",
};
const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "progress",
};
const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2);
  let numberFormat = new Intl.NumberFormat(["en-GB"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  });
  return numberFormat.format(price);
};

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const price = new FormData(event.target).get("priceSelect");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/thank-you/`,
      cancelUrl: `${window.location.origin}/shop/`,
    });
    if (error) {
      console.warn("Error:", error);
      setLoading(false);
    }
  };
  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <img style={imageStyle} src={product.images[0]} />
          <hr />
          <p style={paragraphStyles}>{product.description}</p>
          <legend>
            <p style={paragraphStyles}>
              <strong>{product.name}</strong>
            </p>
          </legend>
          <label>
            Price{" "}
            <select name="priceSelect">
              {product.prices.map((price) => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <hr />
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          BUY NOW
        </button>
      </form>
    </div>
  );
};
export default ProductCard;
