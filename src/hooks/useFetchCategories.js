import { useState, useEffect } from "react";

export const useFetchCategories = (url) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${url}/categories`);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally{
        setLoading(false);
      }
    };
    fetchCategories();
  }, [url]);

  return { categories, loading, error };
};
