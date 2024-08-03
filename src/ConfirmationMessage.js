import { OrderTotal } from "./OrderTotal";
export default function ConfirmationMessage({ products, resetApp }) {
  return (
    <div className="overlay">
      <div className="popup w-md-50 w-100 rounded p-4">
        <img src="./assets/images/icon-order-confirmed.svg" className="mb-3" />
        <h1 className="fw-bold">Order Confirmed</h1>
        <p className="my-3">
          {" "}
          <small>We hope you enjoy your food!</small>
        </p>
        <div className="products p-3 rounded mb-4">
          <ul className="">
            {products.map((product) => (
              <li className="thumbnail-product py-3 d-flex justify-content-between align-items-center border-bottom">
                <div className="product-details d-flex gap-3">
                  <div className="product-image">
                    <img src={product.image.thumbnail} />
                  </div>
                  <div className="product-description d-flex flex-column justify-content-between">
                    <b>{product.name}</b>
                    <p>
                      <span className="prdouct-count me-3">
                        {product.count}x
                      </span>{" "}
                      <span className="product-price">@ ${product.price}</span>
                    </p>
                  </div>
                </div>
                <b className="product-price">${product.total}</b>
              </li>
            ))}
          </ul>
          <OrderTotal products={products} />
        </div>
        <button
          onClick={() => resetApp()}
          className="btn btn-danger w-100 rounded-pill py-2"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
