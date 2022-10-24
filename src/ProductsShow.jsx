import axios from "axios";

export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params);
    event.target.reset();
  };
  return (
    <div id="products-show">
      <h1>Product Info</h1>
      <h2>{props.product.name}</h2>
      <p>Price: {props.product.price}</p>
      <p> {props.product.description}</p>
      <p> Supplier: {props.product.supplier.name}</p>

      <h2>Update Product </h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" name="name" defaultValue={props.product.name} />
        </div>
        <div>
          price: <input type="text" name="price" defaultValue={props.product.price} />
        </div>
        <div>
          description: <input type="text" name="description" defaultValue={props.product.description} />
        </div>
        <div>
          supplier id: <input type="number" name="supplier_id" defaultValue={props.product.supplier.id} />
        </div>
        <button type="submit">Update product</button>
      </form>
    </div>
  );
}
