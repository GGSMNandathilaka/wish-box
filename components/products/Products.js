import ProductCard from "../ui/ProductCard";

function Products(props) {
  return (
    <div className="py-4">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {props.products.map((product) => (
            <ProductCard key={product.id} item={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
