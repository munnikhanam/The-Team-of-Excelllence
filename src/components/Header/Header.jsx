import PropTypes from "prop-types";
import { TbCoinFilled } from "react-icons/tb";
const Header = ({ addMoney }) => {
  return (
    <nav className="w-11/12 mx-auto sticky top-0 ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-xl  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
              <li>
                <a>Team</a>
              </li>
            </ul>
          </div>
          <a className="w-20 h-20  ">
            <img src="logo.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base text-[#131313B3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
            <li>
              <a>Team</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-[#131313]">
            <span className="text-xl">{addMoney}</span>
            Coin
            <TbCoinFilled className="text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  addMoney: PropTypes.number.isRequired,
};

export default Header;
