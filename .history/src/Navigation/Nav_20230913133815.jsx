import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter your search shoes"
        />
      </div>
    </nav>
  );
};

export default Nav;
