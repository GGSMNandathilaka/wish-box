import ProductCard from "../ui/ProductCard";

function Products(props) {
  const { products } = props;
  function wishHandler(event) {
    products.map((product) =>
      product.id === event.id
        ? (product.product.liked = !product.product.liked)
        : null
    );
    console.log(products);
  }

  return (
    <div className="py-4">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              item={product}
              onClick={wishHandler}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
