const SearchBox = () => {
  return (
    <div>
      <input type="text" placeholder="Filter..." />
      <label>
        <input type="checkbox" value="instock" /> Hide out of stock products.
      </label>
    </div>
  );
};

export default SearchBox;