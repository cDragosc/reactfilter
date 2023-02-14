import { ProductList } from "./components/product-list/ProductList";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header.js";

export const MOCK_PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

function App() {
  return (
    <div className="App">
      <Header title="Best web app ☁️" />
      <ProductList products={MOCK_PRODUCTS} />
      <Footer />
    </div>
  );
}

export default App;
