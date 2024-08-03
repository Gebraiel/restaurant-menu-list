import { useState } from "react";
import Products from "./Products";
import { OrderTotal } from "./OrderTotal";
export default function Cart({ products, removeFromCart, showMessage }) {
  let productCount = 0;
  for (let product of products) {
    productCount += product.count;
  }
  return (
    <div className="cart bg-white rounded p-3">
      <h3 className="text-left">Your Cart({productCount})</h3>
      {products.length === 0 ? (
        <>
          <img
            src="./assets/images/illustration-empty-cart.svg"
            className="d-block m-auto image-fluid my-3"
          />
          <p className="text-center">Your added items will appear here</p>
        </>
      ) : (
        <>
          {products.map((product) => (
            <div className="cart-product mb-3 d-flex justify-content-between align-items-center border-bottom py-3">
              <div className="product-details">
                <h5>{product.name}</h5>
                <p className="mb-0 ">
                  <b className="me-2 product-count">{product.count}x</b>@{" "}
                  <span className="price">${product.price}</span>
                  <span className="total ms-2">${product.total}</span>
                </p>
              </div>
              <button
                className="btn p-0"
                onClick={() => removeFromCart(product)}
              >
                <img src="./assets/images/icon-remove-item.svg" />
              </button>
            </div>
          ))}
          <OrderTotal products={products} />
          <div className="neutral-delivery mt-3 text-center w-100 p-3 rounded">
            <img src="./assets/images/icon-carbon-neutral.svg" />
            <span className="align-middle">
              This is a <b>carbon-neutral</b> delivery
            </span>
          </div>
          <button
            onClick={() => showMessage()}
            className="btn confirm-button w-100 mt-4 py-2 bg-danger text-white rounded-pill"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
