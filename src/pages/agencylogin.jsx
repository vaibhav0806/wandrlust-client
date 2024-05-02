import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const response = await fetch("https://wandrlust-server.fly.dev/agency/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    console.log(response);
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      console.log(result.token);
      localStorage.setItem("token", result.token);
      toast("SignIn successful", {
        type: "success",

      });
      navigate('/agency');
    } else {
      console.error("Failed to sign in");
      toast("Error in SignIn", {
        type: "error",
      })
    }
  };

  return (
    <div>
      <section className="bg-gray-50 bg-cover">
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
          <a
            className="flex items-center mb-6 text-2xl font-bold text-[#eb2168] pt-8"
          >
            WandrLust
          </a>
          <div className="w-full max-w-md bg-white rounded-lg shadow-xl dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Agency Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-#E02168 text-gray-900 sm:text-sm rounded-lg focus:ring-[#E02168] focus:border-[#E02168] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E02168] dark:focus:border-[#E02168]"
                    placeholder="Agency Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-#E02168 text-gray-900 sm:text-sm rounded-lg focus:ring-[#E02168] focus:border-[#E02168] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E02168] dark:focus:border-[#E02168]"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-[#eb2168] dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    className="text-sm font-medium text-[#eb2168] hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-[#eb2168] hover:bg-[#E02168] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
