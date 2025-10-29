import React, { useState, useEffect } from "react";

function Account() {
    const [user, setUser] = useState(null); // current logged-in user
    const [form, setForm] = useState({ username: "", password: "" }); // form inputs
    const [isRegistering, setIsRegistering] = useState(false); // toggle between login/register

    // Load saved user from localStorage on mount
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) setUser(savedUser);
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Placeholder login (UI only)
    const handleLogin = (e) => {
        e.preventDefault();
        alert("Login clicked!");
    };

    // Placeholder registration (UI only)
    const handleRegister = (e) => {
        e.preventDefault();
        alert("Register clicked!");
    };

    // Logout user
    const handleLogout = () => setUser(null);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">

                {!user ? (
                    <>
                        {/* Login / Register Heading */}
                        <h2 className="text-3xl font-bold mb-6 text-center">
                            {isRegistering ? "Create Account" : "Login"}
                        </h2>

                        {/* Form */}
                        <form
                            onSubmit={isRegistering ? handleRegister : handleLogin}
                            className="space-y-5"
                        >
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={form.username}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black mt-3"
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black mt-5 mb-5"
                            />
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition mb-3"
                            >
                                {isRegistering ? "Register" : "Login"}
                            </button>
                        </form>

                        {/* Toggle Login/Register */}
                        <p className="text-center mt-6 text-sm text-gray-500">
                            {isRegistering ? (
                                <>
                                    Already have an account?{" "}
                                    <button
                                        onClick={() => setIsRegistering(false)}
                                        className="text-black font-semibold hover:underline"
                                    >
                                        Log in
                                    </button>
                                </>
                            ) : (
                                <>
                                    Don't have an account?{" "}
                                    <button
                                        onClick={() => setIsRegistering(true)}
                                        className="text-black font-semibold hover:underline"
                                    >
                                        Register
                                    </button>
                                </>
                            )}
                        </p>
                    </>
                ) : (
                    <>
                        {/* Logged-in View */}
                        <h2 className="text-3xl font-bold mb-6 text-center">
                            Welcome, {user.username}!
                        </h2>
                        <div className="text-center space-y-4">
                            <p className="text-gray-600">You’re logged in 🎉</p>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default Account;
