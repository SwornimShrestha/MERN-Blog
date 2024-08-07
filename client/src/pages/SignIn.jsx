import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      SignIn
      <Link to="/sign-up" className="text-blue-500">
        Sign Up
      </Link>
    </div>
  );
};

export default SignIn;
