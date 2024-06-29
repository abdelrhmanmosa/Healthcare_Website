import React from "react";
import "./Register.css";
import { Button, Form, NavLink } from "react-bootstrap";
import logo from "../../images/logo.png";

const Register = () => {

  return (
    <div>
      <section className="Register-Login">
        <div className="cardLogin">
          <img src={logo} alt="" />
          <Form>
            <input type="text" className="" placeholder="User Name" />
            <input type="Password" className="" placeholder="Password" />
           
            <Button href="/" className="btn login">
              {" "}
              Login
            </Button>
           

            <NavLink href="" className="Login">
              Forgot Password
            </NavLink>
            <p className="regis"> Dont have any account</p>
            <Button href="/Register" className="btn regis" >
              {" "}
              Register Now
            </Button>
           
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Register;
