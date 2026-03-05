import { useState, useEffect } from "react";

export const useFetchProducts = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Faild to Featch");
        const data = await response.json();
        //console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally{
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url]);

  return { products, loading, error };
};
