import React from "react";
import { useFormik } from "formik";
import Footer from "./Footer";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <section className="container py-5 border">
        <i className="bx bx-heart-circle display-6" />
      </section>
      <Footer />
    </>
  );
};

export default Login;
