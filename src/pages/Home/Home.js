import React from "react";
import "./Home.css";
import NavHeader from "../../component/NavHeader/NavHeader";
import { Button, Container, Form } from "react-bootstrap";
import mainImg from "../../images/main.png";
import shape1 from "../../images/shape1.png";
import shape2 from "../../images/shape2.png";
import shape3 from "../../images/shape3.png";
import About from "../../component/About/About";
import mobile from "../../images/mobile.png";
import woman from "../../images/woman.png";
import BoxData from "../../component/BoxDataService/BoxData";
import Testimonial from "../../component/Testimonial/Testimonial";
import News from "../../component/News/News";
import Footer from "../../component/Footer/Footer";
import ScrollToTop from "../../scrollTo";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const Home = () => {
  return (
    <>
     {/* *****Scroll To Top***** */}
      <ScrollToTop />
      
      {/* ******NavHeader*****  */}
      <NavHeader />

      {/* ******ButtonFixed*****  */}
      <ScrollButton/>

      {/* ******mainPage of Home*****  */}
      <section className="mainPage">
        <Container>
          <div className="row align-items-center main ">
            <div className="info col-md-6 col-sm-12">
              <p>We Provide All Health Care Solution</p>
              <h1>Protect Your Health And Take Care To Of Your Health</h1>
              <Button href="/AboutUs" className="btn-orange">
                Read More
              </Button>
            </div>
            <div className="image col-md-6 col-sm-12">
              <img src={mainImg} alt="" />
            </div>
          </div>
        </Container>
        <img src={shape1} alt="" className="shape1" />
        <img src={shape2} alt="" className="shape2" />
        <img src={shape3} alt="" className="shape3" />
      </section>

      {/* ******About_us*****  */}
      <About />

      {/* *****How We Work***** */}
      <section className="works">
        <h5>Working Process</h5>
        <h1>How We Works?</h1>

        <div className="cards">
          <div className="cardo one"  >
            <p className="num">01</p>
            <h3>Make Appointmnet</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <Button className="contact_btn">
              View More
              <i class="bi bi-caret-right"></i>
            </Button>
          </div>

          <div className="cardo two">
            <p className="num">02</p>
            <h3>Take Treatment</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <Button className="contact_btn">
              View More
              <i class="bi bi-caret-right"></i>
            </Button>
          </div>

          <div className="cardo three">
            <div className="num">03</div>
            <h3>Registration</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <Button className="contact_btn">
              View More
              <i class="bi bi-caret-right"></i>
            </Button>
          </div>
        </div>
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
            <div className="phone">
              <img src={mobile} alt="" className="mobile" />
              <img src={woman} alt="" className="woman" />
              <i class="bi bi-gear-fill"></i>
              <i class="bi bi-geo-alt-fill"></i>
              <i class="bi bi-check-lg"></i>
            </div>
          </div>
        </Container>
      </section>

      {/* ***** Medical Services***** */}
      <section className=" Medical-Services">
        <div className="container">
          <div className="Medical">
            <div className="info ">
              <h6>Services</h6>
              <h2>We Cover A Big Variety Of Medical Services</h2>
              <p>
                We provide the special tips and advices of heath care treatment
                and high level of best.
              </p>
              <Button className="btn">All Services</Button>
            </div>
            <div className="template">
              <div className="bg-Blue"></div>
              <div className="main-Carousel">
                <div className="cards">
                  <BoxData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ****** Testimonial ****** */}
      <Testimonial />

      {/* *****Latest News ***** */}
      <News />

      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default Home;
