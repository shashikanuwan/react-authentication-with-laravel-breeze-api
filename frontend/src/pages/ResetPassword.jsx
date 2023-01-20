import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "../api/axios";
import useAuthContext from "../context/AuthContext";
import AnimatedPage from "../components/AnimatedPage";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const { csrf } = useAuthContext();

  useEffect(() => {
    setEmail(searchParams.get("email"));
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);

    try {
      const response = await axios.post(
        "http://localhost:8000/reset-password",
        {
          email,
          token,
          password,
          password_confirmation,
        }
      );
      setStatus(response.data.status);
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  return (
    <AnimatedPage>
      <div>
        <section class="max-w-4xl mt-14 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Add Your New Password
          </h2>

          {status && (
            <div>
              <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md">
                {status}
              </div>

              <div className="m-4 text-white">
                <span className="text-white"> Go to </span>{" "}
                <span className="text-red-500">
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleResetPassword}>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700 dark:text-gray-200" for="password">
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />

                {errors.password && (
                  <div v-if="authStore.errors.password" class="flex">
                    <span class="text-red-400 text-sm m-2 p-2">
                      {errors.password[0]}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label
                  class="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Password Confirmation
                </label>

                <input
                  id="passwordConfirmation"
                  type="password"
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div class="flex mt-6">
              <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Reset Password
              </button>
            </div>
          </form>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default ResetPassword;
