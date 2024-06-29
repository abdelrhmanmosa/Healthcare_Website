import React from "react";
import "./News.css";
import { Button, Card,  Container } from "react-bootstrap";
import NewsData from "./NewsData";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  return (
    <>
      <section className="latest-news">
        <h6>Latest News</h6>
        <h2>Our Latest News</h2>
        <Container>
          <div className="cards-list">
            <div className="cards">
              {NewsData.map((item) => {
                return (
                  <Card className="">
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>
                        <img src={item.avatar} alt="" className="avatar" />
                        <p>{item.nameDoc}</p>
                        <FontAwesomeIcon icon={faCalendarDays} className="claendar"/>
                        <p>{item.date} july 2021</p>
                      </Card.Title>
                      <Card.Text>{item.detail}</Card.Text>
                      <Button href="/BlogDetails" className="btn">
                        Read More
                        <FontAwesomeIcon icon={faChevronRight} className="arrow"/>
                        </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default News;
