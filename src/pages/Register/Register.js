import React from "react";
import "./Register.css";
import { Button, Form } from "react-bootstrap";
import logo from "../../images/logo.png";

const Register = () => {

  return (
    <div>
      <section className="Register-Login">
        <div className="cardLogin">
          <img src={logo} alt="" />
          <Form>
            <input type="text" placeholder="Name" className="Login" />
            <input type="text" placeholder="Email" className="Login" />
            <input type="text" className="" placeholder="User Name" />
            <input type="Password" className="" placeholder="Password" />
            <Button href="/Login" className="btn ">
              {" "}
              Register Now
            </Button>
            
            <p >Already have an account?</p>

            <Button href="/Login" className="btn login">
              {" "}
              Login
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default Register;
