export function ProductsIndex(props) {
  return (
    <div id="products-index" className="row">
      <h1>All products</h1>
      <div className="row">
        {props.products.map((product) => (
          <div className="card products" style={{ width: "18rem" }} key={product.id}>
            {/* <img src={product.images[0]?.url} className="card-img-top" alt={product.name} /> */}
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text"> {product.description}</p>
              <p className="card-text"> Supplier: {product.supplier.name}</p>
              <button className="btn btn-primary" onClick={() => props.onSelectProduct(product)}>
                More Info
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
