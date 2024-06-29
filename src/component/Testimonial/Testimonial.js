import React from "react";
import "./Testimonial.css";
import { Carousel, Container } from "react-bootstrap";
import QuoteData from "./quoteData";
import Doc1 from "../../images/d1.jpeg";
import Doc2 from "../../images/d2.jpeg";
import Doc3 from "../../images/d3.jpeg";
import Doc4 from "../../images/d4.jpeg";
import Doc5 from "../../images/d5.jpeg";
import Doc6 from "../../images/d6.jpeg";
import BGdoctor from "../../images/Doctors.png";

const Testimonial = () => {
  return (
    <>
      <section className="Testimonial">
        <Container>
          <p>Testimonial</p>
          <h2 className="col-sm-12 col-md-5">
            See What Are The Patients Saying About us
          </h2>
          <div className="content row align-items-center ">
            <div className=" col-lg-6 text-align-center">
              <div className="blockPics">
                <img src={BGdoctor} alt=" " className="BGdoctor" />
                <ul>
                  <li>
                    <img src={Doc1} alt=" " loading="lazy" />
                  </li>
                  <li>
                    <img src={Doc2} alt=" " loading="lazy" />
                  </li>
                  <li>
                    <img src={Doc3} alt=" " loading="lazy" />
                  </li>
                  <li>
                    <img src={Doc4} alt=" " loading="lazy" />
                  </li>
                  <li>
                    <img src={Doc5} alt=" " loading="lazy" />
                  </li>
                  <li>
                    <img src={Doc6} alt="" loading="lazy" />
                  </li>{" "}
                </ul>
              </div>
            </div>

            <div className="contentQuote col-lg-6 align-self-center">
              <div className="mainQuote ">
                <Carousel>
                  {QuoteData.map((item) => {
                    return (
                      <Carousel.Item>
                        <div className="blockQuote">
                          <i class="bi bi-quote up"></i>
                          <p>{item.quot}</p>
                          <h5>{item.name}</h5>
                          <h6>{item.who}</h6>
                          <i class="bi bi-quote down"></i>
                        </div>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
