import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function NavbarComponent() {
  function handleLogout() {
    setTimeout(() => {
      localStorage.removeItem("vite_user");
      toast.success("You've logged out!");
    }, 2000);
  }
  return (
    <header className="bg-blue-400">
      <nav className="container mx-auto flex items-center h-[100px] justify-between px-[50px]">
        <h1 className="text-3xl font-extrabold">Logo</h1>
        <ul className="flex items-center gap-[20px]">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          {localStorage.hasOwnProperty("vite_user") ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;
