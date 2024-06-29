import React from "react";
import "./ContactUs.css";
import NavHeader from "../../component/NavHeader/NavHeader";
import ScrollToTop from "../../scrollTo";
import { Button, ButtonGroup, Container, Form, NavLink } from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Footer from "../../component/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* ******NavHeader*****  */}
      <NavHeader />


      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1> Contact Us</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Contact Us
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* ***** section of contact us ***** */}
      <section className="contact">
        <Container>
          <div className="row">
            <div className="inputs col-lg-6">
              <form>
                <input type="text" placeholder="your name" />
                <input type="text" placeholder="Email" />
                <input type="number" placeholder="Phone number" />
                <Form.Select aria-label="Default select example">
                  <option>Select Department</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <textarea placeholder="your messege" />
              </form>
              <Button className="contactBTN">Submit</Button>
            </div>
            <div className="col-lg-6">
              <div className="photo">
                <div className="after"> </div>
                <div className="information">
                  <h5>Contact Us For Any Informations</h5>
                  <div className="map">
                    <i class="bi bi-geo-alt-fill"></i>
                    <p>Location</p>
                  </div>
                  <p className="stocks">2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  <div className="mail">
                    <i class="bi bi-envelope"></i>
                    <p>Email & Phone</p>
                    </div>
                    <NavLink>info@gmail.com</NavLink>
                    <p className="mobile">(+68) 1200345609</p>
                 
                  <div className="earth">
                    <i class="bi bi-globe"></i>
                   <p> Follow Us</p>
                  </div>
                  <div className="social">
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default ContactUs;
