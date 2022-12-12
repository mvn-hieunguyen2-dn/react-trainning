import React from "react";

const Product = (props) => {
  const {info, setProduct} = props;
  const {uuid, name, description, colorBtn} = info

  return (
    <div className="card">
      <img src="/poro.jpeg" alt="image_alt" className="card_image" />
      <div className="card_content">
        <p className="card_title">{name}</p>
        <small>{description}</small>
      </div>
      <div className="card_btn"  style={{background: colorBtn || '#202329'}} onClick={() => setProduct(uuid)}>Touch</div>
    </div>
  );
};

export default Product;
