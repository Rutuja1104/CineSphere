import React, { useState } from "react";
import { loginStyles } from "../assets/dummyStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    ArrowLeft,
    Clapperboard,
    Eye,
    EyeOff,
    Film,
    Popcorn,
} from "lucide-react";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const goBack = () => {
        window.history.back();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        setIsLoading(true);
        if (!formData.password || formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            setIsLoading(false);
            return;
        }
        console.log("Login data", formData);
        setTimeout(() => {
            setIsLoading(false);
            try {
                const authObj = { isLoggedIn: true, email: formData.email };
                localStorage.setItem("cine_auth", JSON.stringify(authObj));
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userEmail", formData.email || "");
                localStorage.setItem("cine_user_email", formData.email || "");
                console.log("Auth saved to localStorage:", authObj);
            } catch (error) {
                console.error("Failed to login", error);
            }
            toast.success("Login successful! Redirecting to your cinema...");
            setTimeout(() => {
                window.location.href = "/";
            }, 2000);
        }, 1500);
    };
    return (
        <div className={loginStyles.pageContainer}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className={"relative w-full max-w-md z-10"}>
                <div className={loginStyles.backButtonContainer}>
                    <button onClick={goBack} className={loginStyles.backButton}>
                        <ArrowLeft size={20} className={loginStyles.backButtonIcon} />
                        <span className={loginStyles.backButtonText}>Back to Home</span>
                    </button>
                </div>
                <div className={loginStyles.cardContainer}>
                    <div className={loginStyles.cardHeader}></div>
                    <div className={loginStyles.cardContent}>
                        <div className={loginStyles.headerContainer}>
                            <div className={loginStyles.headerIconContainer}>
                                <Film size={28} className={loginStyles.headerIcon} />
                                <h2 className={loginStyles.headerText}>CINEMA ACCESS</h2>
                            </div>
                            <p className={loginStyles.headerSubtitle}>
                                Enter your credentials to continue the experience
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={loginStyles.inputGroup}>
                                <label htmlFor="email" className={loginStyles.label}>
                                    EMAIL ADDRESS
                                </label>
                                <div className={loginStyles.inputContainer}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={loginStyles.input}
                                        required
                                        placeholder="Your Email Address"
                                    />
                                    <div className={loginStyles.inputIcon}>
                                        <Clapperboard size={16} className="text-red-500" />
                                    </div>
                                </div>
                            </div>
                            <div className={loginStyles.inputGroup}>
                                <label htmlFor="password" className={loginStyles.label}>
                                    PASSWORD
                                </label>
                                <div className={loginStyles.inputContainer}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={loginStyles.inputWithIcon}
                                        required
                                        placeholder="Enter Your Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={loginStyles.passwordToggle}
                                    >
                                        {showPassword ? (
                                            <EyeOff
                                                size={18}
                                                className={loginStyles.passwordToggleIcon}
                                            />
                                        ) : (
                                            <Eye
                                                size={18}
                                                className={loginStyles.passwordToggleIcon}
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`${loginStyles.submitButton} ${isLoading ? loginStyles.submitButtonDisabled : ""
                                    }`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className={loginStyles.buttonContent}>
                                        <div className={loginStyles.spinner}></div>
                                        <span className={loginStyles.buttonText}>
                                            SIGINING IN...
                                        </span>
                                    </div>
                                ) : (
                                    <div className={loginStyles.buttonContent}>
                                        <Popcorn size={18} className={loginStyles.buttonIcon} />
                                        <span className={loginStyles.buttonText}>
                                            ACCESS YOUR ACCOUNT
                                        </span>
                                    </div>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                <div className={loginStyles.footerContainer}>
                    <p className={loginStyles.footerText}>
                        Don't have an account?
                        <a href="/signup" className={loginStyles.footerLink}>
                            Create one now
                        </a>
                    </p>
                </div>
            </div>
            <style>{loginStyles.customCSS}</style>
        </div>
    );
};

export default LoginPage;
