import React from "react";
import PropTypes from "prop-types";
import defaultPicture from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  let img = image && image.url;
  return (
    <article className='product'>
      <p>{name || "Default name"}</p>
      <p>{price || "3.99"}</p>
      <img src={img || defaultPicture} alt={name} />
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
