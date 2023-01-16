import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <section className="max-w-4xl mt-14 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Login</h2>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            <div className="flex">
                                <span className="text-red-400 text-sm m-2 p-2">
                                    error
                                </span>
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input id="password" type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            <div v-if="authStore.errors.password" className="flex">
                                <span className="text-red-400 text-sm m-2 p-2">
                                    error
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="flex mt-6">
                        <button
                            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Login
                        </button>
                    </div>
                    
                </form>

                <Link to="/forgot-password" className="flex title-font items-center mb-4 md:mb-0">
                    <span className="ml-3 mt-4 text-sm text-white">Forgot Password?</span>
                </Link>

            </section>
        </div>
    )
}

export default Login