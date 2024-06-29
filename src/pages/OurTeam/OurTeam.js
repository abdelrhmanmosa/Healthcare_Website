import React from "react";
import "./OurTeam.css";
import NavHeader from "../../component/NavHeader/NavHeader";
import Footer from "../../component/Footer/Footer";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Doc1 from "../../images/d2.jpeg";
import Doc2 from "../../images/d6.jpeg";
import Doc3 from "../../images/d4.jpeg";
import Doc4 from "../../images/d1.jpeg";
import Doc5 from "../../images/d3.jpeg";
import Doc6 from "../../images/d5.jpeg";
import BGdoc1 from "../../images/Doctor.png";
import BGdoc2 from "../../images/Doctor2.png";
import ScrollToTop from "../../scrollTo";
import { NavLink } from "react-router-dom";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const OurTeam = () => {
  const DataDoctors = [
    {
      docimg: Doc1,
      nameDoc: "Dr.Tamer Fouad",
      job: "Dentist",
    },
    {
      docimg: Doc2,
      nameDoc: "Dr.Mary Saed",
      job: "Dentist",
    },
    {
      docimg: Doc3,
      nameDoc: "Dr.Tamer Fouad",
      job: "Dentist",
    },
    {
      docimg: Doc4,
      nameDoc: "Dr.Michael Tamer",
      job: "Dentist",
    },
    {
      docimg: Doc5,
      nameDoc: "Dr.Tamer Fouad",
      job: "Dentist",
    },
    {
      docimg: Doc6,
      nameDoc: "Dr.Tamer Fouad",
      job: "Dentist",
    },
  ];
  return (
    <>
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* *****NavBar***** */}
      <NavHeader />
      {/* ******ButtonFixed*****  */}
      <ScrollButton/>

      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Our Team</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Our Team
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* ****** our Doctor ****** */}
      <section className="ourDoctor">
        <Container className="text-center">
          <div className="row m-auto justify-content-center">
            {DataDoctors.map((item) => {
              return (
                <>
                  <Card className="card col-xl-4 ">
                    <div className="card-img">
                      <img src={BGdoc1} alt="" className="BGimg1" />

                      <img src={BGdoc2} alt="" className="BGimg2" />

                      <img src={item.docimg} alt="" className="BGimg3" />
                    </div>
                    <Card.Body>
                      <Card.Title>{item.nameDoc}</Card.Title>
                      <Card.Text>{item.job}</Card.Text>
                      <div className="social">
                        <NavLink><i class="bi bi-twitter"></i></NavLink>
                        <NavLink><i class="bi bi-instagram"></i></NavLink>
                        <NavLink><i class="bi bi-linkedin"></i></NavLink>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </Container>
      </section>

      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default OurTeam;
