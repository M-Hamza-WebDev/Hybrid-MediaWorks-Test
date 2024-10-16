import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/cartSlice";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
    <div style={{ margin: "20px" }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
