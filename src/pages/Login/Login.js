import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import loginImg from "../../assets/images/login/login.svg";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { login, user, resetPassword, loginProvider } =
        useContext(AuthContext);    
    
    const [userEmail, setUserEmail] = useState("");
    const googleProvider = new GoogleAuthProvider();

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
    
    const handleUserEmail = (event) => {
        const email = event.target.email.value;
        setUserEmail(email);
    };

    const handleForgotPassword = () => {
        if (!userEmail) {
            alert("Please enter your email address.");
            return;
        } else {
            resetPassword(userEmail)
                .then(() => {
                    toast.error(
                        "Password reset email has sent. Please check email."
                    );
                })
                .catch((error) => console.log(error));
        }
    };

    const handleSignInWithGoogle = () => {
        loginProvider(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                toast.message("Email is in use.");
            });
    };

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-4 py-16">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onBlur={handleUserEmail}
                                type="email"
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
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <Link
                                    href="#"
                                    className="label-text-alt link link-hover"
                                    onClick={handleForgotPassword}
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-success text-white"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <button className="mx-8 mb-5 btn btn-success text-white">
                        <Link
                            onClick={handleSignInWithGoogle}
                            className="flex items-center"
                        >
                            <FaGoogle className="mr-1"></FaGoogle>Sign In With
                            Google
                        </Link>
                    </button>
                    <p className="text-center">
                        New to this site? Please
                        <Link
                            className="text-green-400 font-bold ml-1"
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
