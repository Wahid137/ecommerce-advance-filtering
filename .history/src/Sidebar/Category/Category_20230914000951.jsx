const Category = ({ handleChange }) => {
  return (
    <div>
      <h1 className="sidebar-title">Category</h1>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark">All</span>
        </label>
      </div>
    </div>
  );
};

export default Category;
