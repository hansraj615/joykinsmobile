export const fetchProducts = async () => {
  try {
    const res = await fetch('https://api.joynkins.com/api/v1/products?sort=id');
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error('Failed to fetch products', err);
    return [];
  }
};
