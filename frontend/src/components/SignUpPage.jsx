import React, { useState } from "react";
import { signUpStyles, signUpCSS } from "../assets/dummyStyles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft, Calendar, Clapperboard, Eye, EyeOff, Lock, Mail, Phone, Ticket, User } from "lucide-react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Birth date is required";
    } else {
      const birthDate = new Date(formData.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();

      if (age < 13) {
        newErrors.birthDate = "You must be at least 13 years old";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goBack = () => {
    window.history.back();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }
    console.log("form data", {
      ...formData,
      password: '*****' + formData.password.slice(-2),
    })
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      // setFormData({
      //   fullName: "",
      //   username: "",
      //   email: "",
      //   phone: "",
      //   birthDate: "",
      //   password: "",
      // });
    }, 2000);
  }

  return (
    <div className={signUpStyles.container}>
      <div className={signUpStyles.particlesContainer}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={signUpStyles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
      <div className={signUpStyles.gradientOrbs}>
        <div className={signUpStyles.orb1}></div>
        <div className={signUpStyles.orb2}></div>
      </div>
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
      <div className={signUpStyles.mainContent}>
        <button onClick={goBack} className={signUpStyles.backButton}>
          <ArrowLeft size={20} className={signUpStyles.backIcon} />
          <span className={signUpStyles.backText}>Back</span>
        </button>
        <div className={signUpStyles.card}>
          <div className={signUpStyles.cardHeader}>

          </div>
          <div className={signUpStyles.cardContent}>
            <div className={signUpStyles.header}>
              <div className={signUpStyles.headerFlex}>
                <Ticket className={signUpStyles.headerIcon} size={32} />
                <h2 className={signUpStyles.headerTitle}>JOIN OUR CINEMA</h2>
              </div>
              <p className={signUpStyles.headerSubtitle}>Create your account and start your cinematic journey with us</p>
            </div>
            <form className={signUpStyles.form}>
              {/* Form fields will go here in the future */}
              <div className={signUpStyles.formGrid}>
                {/* Form fields will go here in the future */}
                <div>
                  <label htmlFor="fullName" className={signUpStyles.field}>Full Name</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${errors.fullName ? signUpStyles.input.error : signUpStyles.input.normal} ${signUpStyles.inputWithIcon}`}
                      placeholder="Enter your full name"
                    />
                    <div className={signUpStyles.inputIcon}>
                      <User size={18} />
                    </div>
                    {errors.fullName && <p className={signUpStyles.errorText}>{errors.fullName}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="username" className={signUpStyles.field}>Username</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${errors.username ? signUpStyles.input.error : signUpStyles.input.normal} ${signUpStyles.inputWithIcon}`}
                      placeholder="Choose your user name"
                    />
                    <div className={signUpStyles.inputIcon}>
                      <Clapperboard size={18} />
                    </div>
                    {errors.username && <p className={signUpStyles.errorText}>{errors.username}</p>}
                  </div>
                </div>
              </div>
              <div className={signUpStyles.formGrid}>
                <div>
                  <label htmlFor="email" className={signUpStyles.field}>EMAIL ADDRESS</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${errors.email ? signUpStyles.input.error : signUpStyles.input.normal} ${signUpStyles.inputWithIcon}`}
                      placeholder="your@gmail.com"
                    />
                    <div className={signUpStyles.inputIcon}>
                      <Mail size={18} />
                    </div>
                    {errors.email && <p className={signUpStyles.errorText}>{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className={signUpStyles.field}>PHONE NUMBER</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${errors.phone ? signUpStyles.input.error : signUpStyles.input.normal} ${signUpStyles.inputWithIcon}`}
                      placeholder="+1 (555) 123-4567"
                    />
                    <div className={signUpStyles.inputIcon}>
                      <Phone size={18} />
                    </div>
                    {errors.phone && <p className={signUpStyles.errorText}>{errors.phone}</p>}
                  </div>
                </div>
              </div>
              <div className={signUpStyles.formGrid}>
                <div>
                  <label htmlFor="birthDate" className={signUpStyles.field}>DATE OF BIRTH</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type="date"
                      id="birthDate"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${errors.birthDate ? signUpStyles.input.error : signUpStyles.input.normal} ${signUpStyles.inputWithIcon}`}
                      placeholder="MM/DD/YYYY"
                    />
                    <div className={signUpStyles.inputIcon}>
                      <Calendar size={18} />
                    </div>
                    {errors.birthDate && <p className={signUpStyles.errorText}>{errors.birthDate}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className={signUpStyles.field}>PASSWORD</label>
                  <div className={signUpStyles.inputContainer}>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`${signUpStyles.input.base} ${errors.password ? signUpStyles.input.error : signUpStyles.input.normal} ${signUpStyles.inputWithIcon}`}
                      placeholder="Create a password"
                    />
                    <div className={signUpStyles.inputIcon}>
                      <Lock size={18} />
                    </div>
                    <button type="button" className={signUpStyles.passwordToggle} onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    {errors.password && <p className={signUpStyles.errorText}>{errors.password}</p>}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={signUpStyles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
