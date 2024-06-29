import "./ServiceDetails.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import {
  Accordion,
  Button,
  ButtonGroup,
  Container,
  ProgressBar,
} from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import Footer from "../../component/Footer/Footer";
import Dentest from "../../images/news1.jpg";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const ServiceDetails = () => {
  // **********Data of service Details **********
  const DataServiceDetails = [
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "0",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "1",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "2",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "3",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "4",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "5",
    },
  ];

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
          <h1>Service Details</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Service Details
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****MainPage ***** */}
      <section className="serviceDetails">
        <Container>
          <div className="fristPage row ">
            <div className="content col-lg-8">
              <img src={Dentest} alt="" />
              <h2>Why Medical Had Been So Popular Till</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>

              <div className="information row col-lg-12 ">
                <div className="chickBox col-md-7">
                  <ul>
                    <li>
                      <i class="bi bi-check2"></i>
                      <p>Then along come two they</p>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <p>That's just a little bit more than</p>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <p>Standard dummy text ever since</p>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <p>Simply dummy text of the printing</p>
                    </li>
                    <li>
                      <i class="bi bi-check2"></i>
                      <p>Make a type specimen book</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 ">
                  <div className="slider1">
                    <div className="label">
                      <h6>Advanced Technology</h6>
                      <div>96%</div>
                    </div>
                    <ProgressBar now={96} />
                  </div>

                  <div className="slider2">
                    <div className="label">
                      <h6>Certified Engineers</h6>
                      <div>79%</div>
                    </div>
                    <ProgressBar now={79} />
                  </div>

                  <div className="slider">
                    <div className="label">
                      <h6>6 years Experience</h6>
                      <div>75%</div>
                    </div>
                    <ProgressBar now={75} />
                  </div>
                </div>
              </div>
              <div className="Questions row col-lg-12 ">
                <h3>Popular Questions</h3>
                <p>
                  Standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="column col-xl-12">
                  <Accordion >
                    {DataServiceDetails.map((item) => {
                      return (
                        <Accordion.Item
                          eventKey={item.evenKey}
                          className="col-xl-12  "
                        >
                          <Accordion.Header className=" my-0">
                            {item.question}
                          </Accordion.Header>
                          <Accordion.Body>{item.para}</Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
            {/* *************side Bar ************** */}
            <div className=" col-lg-4 ">
              <div className="sideBar stickyFixed">
                <div className="buttons col-lg-12">
                  <Button className="fristBTN">
                    Engin Diagnostics
                    <i className="bi bi-chevron-right"></i>
                  </Button>
                  <Button>
                    Lobe oil And Filter
                    <i class="bi bi-chevron-right"></i>
                  </Button>
                  <Button>
                    Belt And Hoses
                    <i className="bi bi-chevron-right"></i>
                  </Button>
                  <Button>
                    Air Conditioning
                    <i className="bi bi-chevron-right"></i>
                  </Button>
                  <Button>
                    Brake Repair
                    <i className="bi bi-chevron-right"></i>
                  </Button>
                  <Button>
                    Tire And Wheel Service
                    <i className="bi bi-chevron-right"></i>
                  </Button>
                </div>

                {/* ***** download *************** */}
                <div className="downloads col-lg-12">
                  <p>Download</p>
                  <ProgressBar now={20} />
                  <Button className="download">
                    <i class="bi bi-file-pdf-fill"></i>
                    Download our Brochures Download
                  </Button>
                  <Button className="download">
                    <i class="bi bi-file-pdf-fill"></i>
                    Our Company Details Download
                  </Button>
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

export default ServiceDetails;
