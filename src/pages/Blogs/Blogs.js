import React from "react";
import "./Blogs.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
} from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Footer from "../../component/Footer/Footer";
import NewsData from "../../component/News/NewsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const Blogs = () => {
  return (
    <>
      {/* *****Scroll To Top***** */}
      <ScrollToTop />

      {/* *****NavBar***** */}
      <NavHeader />
      
      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Blogs</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Blogs
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****blogs ***** */}
      <section className="blog">
        <Container>
          <div className="row justify-content-center">
            {NewsData.map((item) => {
              return (
                <Card className="col-xl-4 ">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>
                      <img src={item.avatar} alt="" className="avatar" />
                      <p>{item.nameDoc}</p>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="claendar"
                      />
                      <p>{item.date} july 2021</p>
                    </Card.Title>
                    <Card.Text>{item.detail}</Card.Text>
                    <Button href="/BlogDetails" className="btn">
                      Read More
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="arrow"
                      />
                    </Button>
                  </Card.Body>
                </Card>
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

export default Blogs;
