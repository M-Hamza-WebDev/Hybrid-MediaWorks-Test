import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // Fetch existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email is already registered
    const emailExists = users.some((user) => user.email === data.email);
    if (emailExists) {
      alert("This email is already registered.");
      return;
    }

    // Add the new user to the users array
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Log the user in and store the user in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    // Dispatch login action to update Redux state
    dispatch(login(newUser));

    // Redirect to Product Dashboard
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register("username", { required: true })} />
        {errors.username && <span>Username is required</span>}
      </div>

      <div>
        <label>Email</label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>Email is required</span>}
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span>Password must be at least 6 characters long</span>
        )}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
