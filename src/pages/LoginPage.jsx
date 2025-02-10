import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const navigate = useNavigate();

  function handleInput(event) {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // 1. save data
    localStorage.setItem("vite_user", JSON.stringify({ email, password }));

    // 2. redirect on HomePage
    setTimeout(() => {
      setEmail("");
      setPassword("");
      navigate("/");
      toast.success("Successufull login!");
    }, 2000);
  }
  return (
    <div className="container mx-auto w-[50%] text-center mt-[30px] flex flex-col gap-[30px] items-center">
      <h2 className="text-2xl font-semibold">Login</h2>
      <form className="w-[60%] flex flex-col gap-[20px] rounded-md border border-slate-900 p-[20px]">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border py-[8px] px-[20px] rounded-md"
          onInput={handleInput}
          value={email}
          ref={inputRef}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border py-[8px] px-[20px] rounded-md"
          onInput={handleInput}
          value={password}
        />
        <button
          type="submit"
          className="text-white bg-blue-700 px-[20px] py-[8px] rounded-md hover:bg-blue-800 transition-all duration-300"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
