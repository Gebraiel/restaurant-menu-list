import { useState, useEffect } from "react";
export default function Products({
  products,
  addToCart,
  editCart,
  resetProduct,
}) {
  return (
    <div className="row">
      <h1>Products</h1>
      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          addToCart={addToCart}
          editCart={editCart}
          resetProduct={resetProduct}
        />
      ))}
    </div>
  );
}

function Product({ product, addToCart, editCart, resetProduct }) {
  const [counter, setCounter] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    console.log(resetProduct.name);

    if (resetProduct.name === product.name || resetProduct.resetId == 0) {
      console.log("Resetting the product");
      setCounter(1);
      setIsSelected(false); // Resetting state or performing other actions
    }
  }, [resetProduct]);

  function handleClick() {
    setIsSelected(true);
    addToCart({
      ...product,
      count: counter,
      total: product.price * counter,
    });
  }
  function handleIncrease() {
    setCounter((counter) => counter + 1);
    editCart({
      ...product,
      count: counter + 1,
      total: product.price * (counter + 1),
    });
  }
  function handleDecrease() {
    if (counter > 1) {
      setCounter((counter) => counter - 1);
      editCart({
        ...product,
        count: counter - 1,
        total: product.price * (counter - 1),
      });
    }
  }
  return (
    <div class="col-lg-4 col-md-6 col-12 py-2">
      <div className="card border-0 bg-transparent">
        <img src={product.image.desktop} className="card-img-top rounded" />
        <div className="card-body px-0 position-relative pt-4">
          <div
            className={`buttons position-absolute start-50 top-0 translate-middle rounded-pill ${
              isSelected &&
              "d-flex justify-content-between align-items-center bg-danger p-2"
            } bg-white`}
          >
            {isSelected ? (
              <>
                <button
                  className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
                  onClick={() => handleIncrease()}
                >
                  +
                </button>
                {counter}
                <button
                  className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
                  onClick={() => handleDecrease()}
                >
                  -
                </button>
              </>
            ) : (
              <button
                onClick={() => handleClick()}
                className="btn d-flex align-items-center gap-2 justify-content-center w-100 "
              >
                <img src="./assets/images/icon-add-to-cart.svg" />
                Add To Cart
              </button>
            )}
          </div>
          <small className="product-category">{product.category}</small>
          <p className="product-name mb-0">{product.name}</p>
          <b className="product-price">${product.price}</b>
        </div>
      </div>
    </div>
  );
}
