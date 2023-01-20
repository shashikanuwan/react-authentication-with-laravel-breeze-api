import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import AnimatedPage from "../components/AnimatedPage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <AnimatedPage>
      <section className="max-w-4xl mt-14 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" for="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />

              {errors.email && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.email[0]}
                  </span>
                </div>
              )}
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />

              {errors.password && (
                <div className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.password[0]}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <Link
          to="/forgot-password"
          className="flex title-font items-center mb-4 md:mb-0"
        >
          <span className="ml-3 mt-4 text-sm text-white">Forgot Password?</span>
        </Link>
      </section>
    </AnimatedPage>
  );
};

export default Login;
