import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser, setShowUserLogin, navigate } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
  };
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to={"/"} onClick={() => setOpen(false)}>
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Priduct</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-primary px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img className="size-4" src={assets.search_icon} alt="search" />
        </div>

        <div onClick={()=> navigate("/cart")} className="relative cursor-pointer group">
          <img
            src={assets.nav_cart_icon}
            className="size-5 opacity-80 "
            alt="cart"
          ></img>
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary group-hover:bg-primary-dull  w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        {!user ? (
          <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="size-7"></img>
            <ul className="hidden group-hover:block absolute top-7 right-0 text-white bg-primary shadow-md rounded-md text-sm w-35 p-2 flex-col z-40 ">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-3  hover:bg-primary rounded-sm hover:text-black cursor-pointer "
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-3  hover:bg-primary rounded-sm hover:text-black cursor-pointer "
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu"></img>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex z-10" : "hidden"
          } absolute  top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)} className="block">
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className="block"
          >
            All Products
          </NavLink>
          {user && (
            <NavLink
              to="/my-orders"
              onClick={() => setOpen(false)}
              className="block"
            >
              My Orders
            </NavLink>
          )}
          <NavLink
            to="/contact"
            onClick={() => {
              setOpen(false);
            }}
            className="block"
          >
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              LogOut
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
