import { Outlet } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { ToastContainer } from "react-toastify";
import axios from "axios";

// if(process.env.NODE_ENV === "dev"){}
axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
