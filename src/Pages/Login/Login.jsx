import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login-main">
            <div className="login-left">
                <img
                    src="https://media.istockphoto.com/id/929760662/pt/foto/wood-table-top-on-blurred-of-cafe-with-light-gold-in-dark-nigh-background-for-montage-product.jpg?s=612x612&w=0&k=20&c=_prUZ9LUSFdj-So3p9QnztVnChN2fhHBCSItK-sa_Jg="
                    alt="Banner de fundo do restaurante"
                />
            </div>
            <div className="login-right">
                <div className="login-right-container">
                    <div className="login-logo">
                        {/* Substitua este espaço por outra solução ou componente se necessário */}
                    </div>
                    <div className="login-center">
                        <h2>Bem vindo!</h2>
                        <p>Easy food é sua plataforma de gestao</p>
                        <form>
                            <input type="email" placeholder="Email" />
                            <div className="pass-input-div">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                                {showPassword ? (
                                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                                ) : (
                                    <FaEye onClick={() => setShowPassword(!showPassword)} />
                                )}
                            </div>

                            <div className="login-center-options">
                                <div className="remember-div">
                                    <input type="checkbox" id="remember-checkbox" />
                                    <label htmlFor="remember-checkbox">
                                        Remember for 30 days
                                    </label>
                                </div>
                                <a href="#" className="forgot-pass-link">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="login-center-buttons">
                                <Link to="/" className="no-decoration">
                                    <button type="button" className="login-btn">Log In</button>
                                </Link>
                                <button type="button">
                                    {/* adicionar um texto para o botão de login com o Google */}
                                    Log In with Google
                                </button>
                            </div>
                        </form>
                    </div>

                    <p className="login-bottom-p">
                        Don't have an account? <a href="#">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
