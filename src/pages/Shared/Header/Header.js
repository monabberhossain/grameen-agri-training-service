import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
    const { user } = useContext(AuthContext);
    const menuItems = (
        <>
            <li className="font-semibold hover:btn-success rounded-md">
                <Link className="hover:text-white" to="/">
                    Home
                </Link>
            </li>
            <li className="font-semibold hover:btn-success rounded-md">
                <Link className="hover:text-white" to="/services">
                    Services
                </Link>
            </li>
            <li className="font-semibold hover:btn-success rounded-md">
                <Link className="hover:text-white" to="/blog">
                    Blog
                </Link>
            </li>
            {user?.email ? (
                <li className="font-semibold">
                    <Link to="/orders">Orders</Link>
                </li>
            ) : (
                <></>
                // <li className="font-semibold">
                //     <Link to="/login">Login</Link>
                // </li>
            )}
        </>
    );
    return (
        <div className="navbar h-20 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn  btn-sm lg:btn-md btn-success lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link className="flex items-center" to="/">
                    <img className="mr-2" src={logo} alt="" />
                    <h2 className="font-bold text-green-700">
                        Grameen Agri Training Service
                    </h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
            <div className="navbar-end">
                {user?.email ? (
                    <>
                        <Link to="/profile" className="p-0 mr-2 no-underline">
                            <span title={user?.displayName}>
                                {user?.photoURL ? (
                                    <img
                                        style={{ height: "30px" }}
                                        roundedCircle
                                        src={user.photoURL}
                                        alt=""
                                    ></img>
                                ) : (
                                    <FaUser className="text-sm"></FaUser>
                                )}
                            </span>
                            <button className="btn btn-sm lg:btn-md btn-outline btn-success font-semibold">
                                Log Out
                            </button>
                        </Link>
                    </>
                ) : (
                    <div className="flex">
                        <Link to="/login">
                            <button className="btn btn-sm lg:btn-md btn-outline btn-success mr-2 font-semibold ">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-sm lg:btn-md btn-outline btn-success font-semibold">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
