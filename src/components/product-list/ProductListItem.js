const component = (parameters) => (
  <li>
    <strong>{parameters.product.name}</strong>
    {parameters.product.price}
  </li>
);

export default component;