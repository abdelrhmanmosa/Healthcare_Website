import React from "react";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Footer from "../../component/Footer/Footer";
import { Form } from "react-router-dom";
import "./Booking.css"

const Booking = () => {
  return (
    <div className="Booking">
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* *****NavBar***** */}
      <NavHeader />

      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Booking</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Booking
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****Book Appointment***** */}
      <section className="Appointment">
        <Container>
          <div className="flex">
            <div className="book">
              <div className="Book-Appointment">
                <h3>Book Appointment</h3>
                <Form>
                  <input type="text" placeholder="selecty Department" />
                  <input type="text" placeholder="Select Doctor" />
                  <input type="text" placeholder="Your Name" />
                  <input type="number" placeholder="Phone Number" />
                  <input type="date" />
                </Form>
                <Button>Appointment Now</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* *****Footer ***** */}
      <Footer />
    </div>
  );
};

export default Booking;
