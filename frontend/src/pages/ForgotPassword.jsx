import React, { useState } from "react"
import useAuthContext from "../context/AuthContext";
import axios from "../api/axios";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);
    const { csrf } = useAuthContext();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        await csrf();
        setErrors([]);
        setStatus(null);

        try {
            const response = await axios.post("http://localhost:8000/forgot-password", { email });
            setStatus(response.data.status);
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    };

    return (
        <div>
            <section class="max-w-4xl mt-14 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Forgot Password</h2>

                {status && (
                    <div class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md" v-if="authStore.status">
                        {status}
                    </div>
                )}

                <form onSubmit={handleForgotPassword}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            {errors.email && (
                                <div className="flex">
                                    <span className="text-red-400 text-sm m-2 p-2">
                                        {errors.email[0]}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div class="flex mt-6">
                        <button
                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Forgot
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ForgotPassword