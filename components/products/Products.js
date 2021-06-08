import { useState } from "react";
import ProductCard from "../ui/ProductCard";

// Product list component
function Products(props) {
  const [state, setState] = useState([]);
  const { products } = props;

  // triggers when a product mark as a wish item
  function wishHandler(event) {
    products.map((product) =>
      product.id === event.id
        ? (product.product.liked = !product.product.liked)
        : null
    );
    setState({ products });

    const wishedProduct = products.filter(
      (product) => product.id === event.id
    )[0];
    const clonedWishedProduct = { ...wishedProduct };
    delete clonedWishedProduct["id"];

    const payload = { id: event.id, data: clonedWishedProduct };
    updateProductHandler(payload);
  }

  // send PUT request to update a relevant product
  async function updateProductHandler(payload) {
    const response = await fetch("/api/products", {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <div className="py-4">
      <div className="px-4">
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                item={product}
                onClick={wishHandler}
              ></ProductCard>
            ))}
          </div>
        ) : (
          <h1 className="block">Nothing here... yet.</h1>
        )}
      </div>
    </div>
  );
}

export default Products;
