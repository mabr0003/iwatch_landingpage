import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import NavigationItem from "./NavigationItem";

const Header = () => {
  return (
    <header className="flex items-center justify-between text-white">
      <FaApple size={40} />
      <nav>
        <ul className="flex gap-20">
          <NavigationItem text="Mac" />
          <NavigationItem text="iPhone" />
          <NavigationItem text="iPad" />
          <NavigationItem text="iWatch" />
          <NavigationItem text="Support" />
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <CiSearch size={20} />
        <div>|</div>
        <FiShoppingBag size={18} />
      </div>
    </header>
  );
};

export default Header;
