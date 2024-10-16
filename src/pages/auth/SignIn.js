import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/cartSlice";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Welcome from "../../components/auth/Welcome";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    // Find user by email and password
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Save the current user in localStorage
      localStorage.setItem("currentUser", email);

      // Dispatch setUser to load user-specific cart
      dispatch(setUser(email));

      // Dispatch login action to update authentication state
      dispatch(login(email));

      // Navigate to the Product Dashboard
      navigate("/products");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="md:min-h-screen flex justify-center items-center ">
      <div className="xl:max-w-[1218px] w-full flex justify-center flex-col md:flex-row">
        {/* Left Side - Image and Text */}
        <Welcome />
        {/* Right Side - SignIn Form */}
        <div className="xl:max-w-[486px] w-full bg-white flex flex-col justify-center items-center  xl:rounded-r-3xl lg:p-16 p-10">
          <h2 className="text-2xl font-semibold md:mb-16 mb-10">Welcome</h2>
          <form onSubmit={handleSignIn} className="w-full ">
            <div className="mb-4 relative">
              <img
                src="/email.svg"
                alt="form email"
                className=" absolute top-2 left-2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full pl-9 p-2 border border-[#D0D0D0] placeholder:text-[#828282]  rounded-lg focus:outline-none focus:border-purple-500`}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4 relative">
              <div className="relative">
                <img
                  src="/password.svg"
                  alt="form password"
                  className=" absolute top-2 left-2"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-9 p-2 border border-[#D0D0D0] placeholder:text-[#828282]  rounded-lg focus:outline-none focus:border-purple-500`}
                  required
                  minLength="6"
                  placeholder="Enter your password"
                />
                <img
                  src="/view.svg"
                  alt="form password view"
                  className=" absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#89089F] text-white p-3 rounded-[40px] font-medium hover:bg-purple-700 transition mt-8"
            >
              Sign In
            </button>

            {/* Already have an account */}
            <p className="mt-8 text-center text-[#828282] text-sm">
              Have no account yet?
            </p>
            <a
              href="/signup"
              className="block border border-[#BA68C8] text-[#BA68C8] p-3 rounded-[40px] font-medium hover:text-white text-center hover:bg-purple-700 transition mt-4"
            >
              Registration
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
