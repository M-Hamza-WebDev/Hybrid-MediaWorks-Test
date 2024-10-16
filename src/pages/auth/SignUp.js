import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import Welcome from "../../components/auth/Welcome";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === data.email);
    if (emailExists) {
      alert("This email is already registered.");
      return;
    }

    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    dispatch(login(newUser));

    navigate("/signin");
  };

  return (
    <div className="md:min-h-screen flex justify-center items-center ">
      <div className="xl:max-w-[1218px] w-full flex justify-center flex-col md:flex-row">
        {/* Left Side - Image and Text */}
        <Welcome />

        {/* Right Side - SignUp Form */}
        <div className="xl:max-w-[486px] w-full bg-white flex flex-col justify-center items-center  xl:rounded-r-3xl lg:p-16 p-10">
          <h2 className="text-2xl font-semibold md:mb-16 mb-10">
            Registration
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            {/* Username */}
            <div className="mb-4 relative">
              <img
                src="/name.svg"
                alt="form name"
                className=" absolute top-2 left-2"
              />
              <input
                {...register("username", { required: true })}
                className={`w-full pl-9 p-2 border border-[#D0D0D0] placeholder:text-[#828282]   ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:border-purple-500`}
                placeholder="Enter your username"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">
                  Username is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <img
                src="/email.svg"
                alt="form email"
                className=" absolute top-2 left-2"
              />
              <input
                {...register("email", { required: true })}
                className={`w-full pl-9 p-2 border border-[#D0D0D0] placeholder:text-[#828282] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:border-purple-500`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <div className="relative">
                <img
                  src="/password.svg"
                  alt="form password"
                  className=" absolute top-2 left-2"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true, minLength: 6 })}
                  className={`w-full pl-9 p-2 border border-[#D0D0D0] placeholder:text-[#828282] ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-purple-500`}
                  placeholder="Enter your password"
                />
                <img
                  src="/view.svg"
                  alt="form password view"
                  className=" absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password must be at least 6 characters long
                </span>
              )}
            </div>

            {/* Confirm Password */}
            <div className=" relative">
              <div className="relative ">
                <img
                  src="/password.svg"
                  alt="form password"
                  className=" absolute top-2 left-2"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className={`w-full pl-9 p-2 border border-[#D0D0D0] placeholder:text-[#828282] ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:border-purple-500`}
                  placeholder="Re-enter your password"
                />
                <img
                  src="/view.svg"
                  alt="form password view"
                  className=" absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#89089F] text-white p-3 rounded-[40px] font-medium hover:bg-purple-700 transition mt-8"
            >
              Create Account
            </button>

            {/* Already have an account */}
            <p className="mt-8 text-center text-[#828282] text-sm">
              Already have an account?{" "}
            </p>
            <a
              href="/signin"
              className="block border border-[#BA68C8] text-[#BA68C8] p-3 rounded-[40px] font-medium hover:text-white text-center hover:bg-purple-700 transition mt-4"
            >
              Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
