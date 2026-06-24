export const getProducts = async () => {
  const response = await fetch("/products.json");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();
  return data.products;
};

export const getProductById = async (id) => {
  const response = await fetch("/products.json");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  const product = data.products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};