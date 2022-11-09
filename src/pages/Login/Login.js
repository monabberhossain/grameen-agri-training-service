import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-4 py-16">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <Link
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <p className="text-center">
                        New to Genius Car? Please{" "}
                        <Link
                            className="text-orange-700 font-bold"
                            to="/signup"
                        >
                            {" "}
                            Sign Up{" "}
                        </Link>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
