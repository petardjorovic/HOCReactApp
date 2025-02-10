import axios from "axios";

class ProductsServices {
  static getAllProducts = () => axios.get("/products");
  static addProducts = (body) =>
    axios
      .post("/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({
          title: "Petar",
          price: 1000,
        }),
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
}

export default ProductsServices;
