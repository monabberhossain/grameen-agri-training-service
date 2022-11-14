import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import signupImg from "../../assets/images/login/login.svg";

const SignUp = () => {
    
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
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
                    <img src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-4 py-16">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-success text-white"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                    <p className="text-center">
                        Already have an account? Please
                        <Link className="text-green-400 font-bold ml-1" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
