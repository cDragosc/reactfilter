import ProductListItem from "./ProductListItem";
import SearchBox from "./SearchBox";

import { MOCK_PRODUCTS } from "../../App";

export const ProductList = (props) => {
  console.log("Mocks:", MOCK_PRODUCTS);
  return (
    <div>
      <div>
        <input type="text" placeholder="Filter..." />
        <label>
          <input type="checkbox" value="instock" /> Hide out of stock products.
        </label>
      </div>
      <ul>
        {props.products.map((product) => (
          <li>
            <strong>{product.name}</strong>
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};