import React from "react";
import "./Services.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import News from "../../component/News/News";
import Footer from "../../component/Footer/Footer";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import BGdoc1 from "../../images/Doctor.png";
import BGdoc2 from "../../images/Doctor2.png";
import Doc1 from "../../images/d2.jpeg";
import Doc2 from "../../images/d6.jpeg";
import Doc3 from "../../images/d4.jpeg";
import ServiceData from "../../component/BoxDataService/ServiceData";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const DATA = [
  {
    number: 120,
    title: "years with you",
    details:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    number: 400,
    title: "Award",
    details:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    number: 250,
    title: "Doctors",
    details:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
  {
    number: 800,
    title: "Satisfied Client",
    details:
      "Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.",
  },
];

const Services = () => {
  return (
    <>
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* ******NavHeader*****  */}
      <NavHeader />

      {/* ******ButtonFixed*****  */}
      <ScrollButton/>

      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Services</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Services
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****Services Boxs***** */}
      <section className="Services">
        <Container>
          <div className="row cardServices">
            {ServiceData.map((item) => {
              return (
                <div className="card col-lg-4 col-md-6 m-3 ">
                  <div className="bis">
                    <i className={item.icon} id="icon"></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>
                    Phasellus venenatis porta ehonus integer et veverra felis
                  </p>
                  <Button href="/ServiceDetails"> View More</Button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* *****Data***** */}
      <section className="BOXdata ">
        <Container>
          <div className=" row">
            {DATA.map((item) => {
              return (
                <>
                  <div className="Box col-xl-3 col-sm-6">
                    <div className="num">{item.number} </div>
                    <div className="title"> {item.title} </div>
                    <p className="details"> {item.details} </p>
                  </div>
                </>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ****** our Doctor ****** */}
      <section className="ourDoctor">
        <Container className="text-center">
          <p>Our Doctor</p>
          <h2>Meet Best Doctors</h2>
          <div className="row justify-content-center">
            <Card className="card col-xl-4 ">
              <div className="card-img">
                <img src={BGdoc1} alt="" className="BGimg1" />

                <img src={BGdoc2} alt="" className="BGimg2" />

                <img src={Doc1} alt="" className="BGimg3" />
              </div>
              <Card.Body>
                <Card.Title>Dr. Michael Tamer</Card.Title>
                <Card.Text>Dentist</Card.Text>
                <div className="social">
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </Card.Body>
            </Card>

            <Card className="card col-xl-4 ">
              <div className="card-img">
                <img src={BGdoc1} alt="" className="BGimg1" />

                <img src={BGdoc2} alt="" className="BGimg2" />

                <img src={Doc2} alt="" className="BGimg3" />
              </div>
              <Card.Body>
                <Card.Title>Dr. Mary Riad</Card.Title>
                <Card.Text>Cardiologist</Card.Text>
                <div className="social">
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </Card.Body>
            </Card>

            <Card className="card col-xl-4 ">
              <div className="card-img">
                <img src={BGdoc1} alt="" className="BGimg1" />

                <img src={BGdoc2} alt="" className="BGimg2" />

                <img src={Doc3} alt="" className="BGimg3" />
              </div>
              <Card.Body>
                <Card.Title>Dr.Mark Tamer</Card.Title>
                <Card.Text>Chiropractor</Card.Text>
                <div className="social">
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>

      {/* *****Latest News ***** */}
      <News />

      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default Services;
