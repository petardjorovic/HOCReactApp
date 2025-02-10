import { useEffect, useState } from "react";
import ProductsServices from "../services/productsServices";

// custom hook
function useFetch() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    ProductsServices.getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return { products, isLoaded };
}

export default useFetch;
