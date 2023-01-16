import React from "react"

const Register = () => {
    return (
        <div>
            <section class="max-w-4xl p-6 mt-14 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">

                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Register</h2>

                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="name">Name</label>
                            <input id="name" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            <div v-if="authStore.errors.name" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">
                                    error
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="email">Email Address</label>
                            <input id="email" type="email"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            <div v-if="authStore.errors.email" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">
                                    error
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input id="password" type="password"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

                            <div v-if="authStore.errors.password" class="flex">
                                <span class="text-red-400 text-sm m-2 p-2">
                                    error
                                </span>
                            </div>
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">
                                Password Confirmation
                            </label>

                            <input id="passwordConfirmation" type="password" v-model="form.password_confirmation"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div class="flex mt-6">
                        <button
                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Save
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Register