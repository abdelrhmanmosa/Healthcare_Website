import React from "react";
import "./Footer.css";
import { Button, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import facebook from "../../images/facebook.png";
import instgram from "../../images/instgram.png";
import tweeter from "../../images/tweeter.png";
import linkIN from "../../images/linkin.png";
import lineBG from "../../images/line-bg.png"

const Footer = () => {
  return (
    <>
      <section className="footer">
            <img src={lineBG} alt="" className="lineBG"/>
        <Container className="foot">
          <div className="footer-end row  ">
            <div className="col-sm-6 col-lg-4 col-xl-3 py-2  smallmedia">
              <img src={logo} alt="" />
              <p className="my-4">
                Lorem Ipsum is simply d ummy text of the printing and typummy
                text of the printing and typummy text of the printing and typ.{" "}
              </p>
              <div className="Mobile ">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div>
                  <h6>Contact Us</h6>
                  <h4>+20 103 203 4927</h4>
                </div>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-4 col-xl-3 py-2 text-center Links smallmedia">
              <h3>Quick Links</h3>
              <ul >
                <li>
                  <NavLink to="/AboutUS">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/Services" >Services</NavLink>
                </li>
                <li>
                  <NavLink to="/Booking">Booking</NavLink>
                </li>
                <li>
                  <NavLink to="/Faq">Faq's</NavLink>
                </li>
                <li>
                  <NavLink to="/Blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/OurTeam">Our Team</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-2 text-center smallmedia">
              <h3>Our Service</h3>
              <ul>
                <li>
                  <NavLink>Dental Care</NavLink>
                </li>
                <li>
                  <NavLink>Cardiac Clinic</NavLink>
                </li>
                <li>
                  <NavLink>Messege Therapy</NavLink>
                </li>
                <li>
                  <NavLink>Cardiology</NavLink>
                </li>
                <li>
                  <NavLink>Precise Diagnosis</NavLink>
                </li>
                <li>
                  <NavLink>Abmbulance Services</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 py-2 text-center Subcribe smallmedia">
              <h3>Subcribe</h3>
              <input placeholder="Email Adress" />
              <Button>Subscribe Now</Button>
              <ul>
                <li>
                  <a
                    target="_black"
                    href="https://web.facebook.com/abdelrhman.mosa.12"
                  >
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://www.instagram.com/abdelrhman_mossa/">
                    <img src={instgram} alt="" />
                  </a>
                </li>
                <li>
                  <a target="_black" href="https://x.com/AMosa56415">
                    <img src={tweeter} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    target="_black"
                    href="https://www.linkedin.com/in/abdelrhman-mousa-80977021a/"
                  >
                    <img src={linkIN} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="Copyright">
            <h5>
              Copyright © 2024 Design & Developed by <span>Abdelrhman Mousa</span>
            </h5>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
