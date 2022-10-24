export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create product");
    const params = new FormData(event.target);
    props.onCreateProduct(params);
    event.target.reset();
  };
  return (
    <div id="products-new">
      <h1>New product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" name="name"></input>
        </div>
        <div>
          Description: <input type="text" name="description"></input>
        </div>
        <div>
          Price: <input type="number" name="price"></input>
        </div>
        <div>
          Supplier = <input type="number" name="supplier_id"></input>
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
