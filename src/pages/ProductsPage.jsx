import React from "react";
import useFetch from "../hooks/useFetch";
import ProductsServices from "../services/productsServices";

function ProductsPage() {
  const { products, isLoaded } = useFetch();
  function handleAddProduct() {
    ProductsServices.addProducts({ id: 123, title: "Petar" });
  }

  return (
    <div>
      {isLoaded ? (
        products.map((el, i) => {
          return <div key={i}>{el.title}</div>;
        })
      ) : (
        <div>Loading...</div>
      )}
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default ProductsPage;
