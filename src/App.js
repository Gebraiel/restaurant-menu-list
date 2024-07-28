
import Products from "./Products";
import Cart from "./Cart";
function App() {
  return (
    <>
      <div className="col-8">
        <Products />
      </div>
      <div className="col-4">
          <Cart />
      </div>

    </>
  );
}

export default App;
