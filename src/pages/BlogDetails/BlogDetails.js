import React from "react";
import "./BlogDetails.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Footer from "../../component/Footer/Footer";
import blog1 from "../../images/blog1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../images/d1.jpeg";
import blogDoc1 from "../../images/blodoc.jpg";
import blogDoc2 from "../../images/blogdetails.jpg";
import { NavLink } from "react-router-dom";
import lineCOM from "../../images/lineCOM.png";
import DOCGEORGE from "../../images/d5.jpeg";
import Doc3 from "../../images/d3.jpeg";
import Doc4 from "../../images/d4.jpeg";
import Doc2 from "../../images/d2.jpeg";
import post1 from "../../images/news1.jpg";
import post2 from "../../images/news2.jpg";
import post3 from "../../images/news3.jpg";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const BlogDetails = () => {
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
          <h1>Blog Details</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Blog Details
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* ***** Blog Details ***** */}
      <section className="blogDetails">
        <Container >
          <div className="blogs row">
            <div className="content col-lg-8">
              <img src={blog1} alt="" className="fristimage" />

              <div className="infoAvatar">
                <img src={avatar} alt="" className="avatar" />
                <p>Mark Tamer</p>
                <FontAwesomeIcon icon={faCalendarDays} className="calendar" />
                <p>20 july 2021</p>
              </div>

              <h2>Precious Tips To Help You Get Better.</h2>
              <p className=" detailinfo">
                {" "}
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you're
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <div className="quote">
                <i class="bi bi-quote up"></i>
                Once you've gotten all the titles and have chosen the best one,
                the next thing you need to do is to craft a magnetic content.
                Great content marketers excel at creating content.
              </div>
              <p className="detailinfo">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="row">
                <img src={blogDoc1} alt="" className="col-lg-6 Doctors" />
                <img src={blogDoc2} alt="" className="col-lg-6 Doctors" />
              </div>
              <p className="detailinfo">
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you're
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <p className="detailinfo">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="tagSocial">
                <div className="tag">
                  <p className="title">Tags :</p>
                  <ul>
                    <li>
                      <NavLink>Health</NavLink>
                    </li>
                    <li>
                      <NavLink>Growth</NavLink>
                    </li>
                    <li>
                      <NavLink>Life</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="social">
                  <p className="title">Share :</p>
                  <ul>
                    <li>
                      <NavLink>
                        <i class="bi bi-facebook"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="bi bi-instagram"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="bi bi-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink>
                        <i class="bi bi-linkedin"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="infosonar  ">
                <img src={blogDoc1} alt="" className="sonarimage " />
                <div className="info  ">
                  <h4>Sonar Z.Moyna</h4>
                  <p>
                    Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                    consequat happ quam vel enim augue.
                  </p>
                  <div className="social">
                    <NavLink>
                      <i class="bi bi-facebook"></i>
                    </NavLink>

                    <NavLink>
                      <i class="bi bi-instagram"></i>
                    </NavLink>

                    <NavLink>
                      <i class="bi bi-twitter"></i>
                    </NavLink>

                    <NavLink>
                      <i class="bi bi-linkedin"></i>
                    </NavLink>
                  </div>
                </div>
              </div>

              <div>
                <p className="comment mb-0">8 Comments</p>
                <img src={lineCOM} alt="" />
              </div>
              <div className="commentBox">
                <div className="Boximg">
                  <img src={DOCGEORGE} alt="" />
                  <div>
                    <h5 className="Boxname">Sonia</h5>
                    <p className="BoxDate">May 09,2021 At 10:45 AM</p>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.psum is simply dummy text of the printing
                  and typesetting industry Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.{" "}
                </p>
                <Button className="Boxbtn">REPLY</Button>
              </div>

              <div className="commentBox small">
                <div className="Boximg">
                  <img src={Doc3} alt="" />
                  <div>
                    <h5 className="Boxname">George</h5>
                    <p className="BoxDate">May 09,2021 At 10:45 AM</p>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.psum is simply dummy text of the printing
                  and typesetting industry Lorem Ipsum has been the
                </p>
                <Button className="Boxbtn">REPLY</Button>
              </div>

              <div className="commentBox">
                <div className="Boximg">
                  <img src={Doc4} alt="" />
                  <div>
                    <h5 className="Boxname">Maichael</h5>
                    <p className="BoxDate">May 09,2021 At 10:45 AM</p>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.psum is simply dummy text of the printing
                  and typesetting industry Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.{" "}
                </p>
                <Button className="Boxbtn">REPLY</Button>
              </div>

              <div className="commentBox">
                <div className="Boximg">
                  <img src={Doc2} alt="" />
                  <div>
                    <h5 className="Boxname">Samy</h5>
                    <p className="BoxDate">May 09,2021 At 10:45 AM</p>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.psum is simply dummy text of the printing
                  and typesetting industry Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.{" "}
                </p>
                <Button className="Boxbtn">REPLY</Button>
              </div>

              <div className="commentBox">
                <div>
                  <p className="comment mb-0">Leave a Reply</p>
                  <img src={lineCOM} alt="" />
                </div>
                <form>
                  <input type="text" placeholder="Name" className="name" />
                  <input type="text" placeholder="Email" className="email" />
                </form>
                <textarea placeholder="Comment" minlength="25" />
                <Button className="inputBTN">Submit Comment</Button>
              </div>
            </div>
            <div className=" col-lg-4">
              <div className="slider">
                {/******** Slider **** */}
                <input placeholder="Enter your Keyword" />
                <div className="posts">
                  <div className="titlepost">
                    <p className="comment mb-0">Recent Posts</p>
                    <img src={lineCOM} alt="" />
                  </div>

                  <div className="post">
                    <img src={post1} alt="" className="postimg" />
                    <div className="postdetails">
                      <p className="para">
                        Precious Tips To Help You Get Better.
                      </p>
                      <div className="date">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="calendarpost"
                        />
                        <p>20 july 2021</p>
                      </div>
                    </div>
                  </div>

                  <div className="post">
                    <img src={post2} alt="" className="postimg" />
                    <div className="postdetails">
                      <p className="para">
                        Precious Tips To Help You Get Better.
                      </p>
                      <div className="date">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="calendarpost"
                        />
                        <p>20 july 2021</p>
                      </div>
                    </div>
                  </div>

                  <div className="post three">
                    <img src={post3} alt="" className="postimg" />
                    <div className="postdetails">
                      <p className="para">
                        Precious Tips To Help You Get Better.
                      </p>
                      <div className="date">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="calendarpost"
                        />
                        <p>20 july 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="posts gallery p-3">
                <div className="titlepost">
                    <p className="comment mb-0">Our Gallery</p>
                    <img src={lineCOM} alt="" />
                  </div>
                  <div className="row mx-auto ">
                    <img src={Doc3} alt=""  className="col-4 p-1"/>
                    <img src={Doc4} alt=""  className="col-4 p-1"/>
                    <img src={Doc2} alt=""  className="col-4 p-1"/>
                    <img src={post1} alt=""  className="col-4 p-1"/>
                    <img src={post2} alt=""  className="col-4 p-1"/>
                    <img src={post3} alt=""  className="col-4 p-1"/>
                  </div>
                </div>

                <div className="posts gallery Tags p-3">
                <div className="titlepost">
                    <p className="comment mb-0">Tags</p>
                    <img src={lineCOM} alt="" />
                  </div>
                  <div className=" mx-auto ">
                  <Button  className="bttn">improvment</Button>
                  <Button className="bttn">health</Button>
                  <Button className="bttn">life</Button>
                  <Button className="bttn">covid</Button>
                  <Button className="bttn">healthy</Button>
                  <Button className="bttn">Growth</Button>
                  <Button className="bttn">education</Button>
                  <Button className="bttn">manage</Button>
                  <Button className="bttn">general</Button>

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

export default BlogDetails;
