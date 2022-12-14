import React, { useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([
    {
      uuid: 1,
      name: "Poro 1",
      price: 20,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      colorBtn: "#202329",
    },
    {
      uuid: 2,
      name: "Poro 2",
      price: 40,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      colorBtn: "#202329",
    },
    {
      uuid: 3,
      name: "Poro 3",
      price: 70,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      colorBtn: "#202329",
    },
    {
      uuid: 4,
      name: "Poro 4",
      price: 10,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      colorBtn: "#202329",
    },
  ]);

  const setProduct = (uuid) => {
    let temProducts = [...products];
    temProducts.forEach((product, i) => {
      console.log(uuid, product.uuid);
      if (product.uuid === uuid) {
        let temProduct = {
          ...product,
          colorBtn: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        };
        temProducts[i] = temProduct;
      }
    });
    setProducts([...temProducts]);
  };

  return (
    <div>
      <div style={{ padding: "16px 0" }}>
        <p style={{ fontWeight: "bold", fontSize: 24 }}>Products latest</p>
        <div className="cards">
          {products.map((info, i) => {
            return (
              <React.Fragment key={i}>
                <Product info={info} setProduct={setProduct} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
