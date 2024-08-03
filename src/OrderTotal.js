export function OrderTotal({ products }) {
  let total = 0.0;
  for (let product of products) {
    total += product.total;
  }
  return (
    <div className="order-total d-flex justify-content-between align-items-center ">
      <p className="mb-0">Order Total</p>
      <b>${Number.parseFloat(total)}</b>
    </div>
  );
}
