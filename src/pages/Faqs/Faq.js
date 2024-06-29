import "./Faqs.css";
import ScrollToTop from "../../scrollTo";
import NavHeader from "../../component/NavHeader/NavHeader";
import Footer from "../../component/Footer/Footer";
import News from "../../component/News/News";
import { Accordion, Button, ButtonGroup, Container } from "react-bootstrap";
import lineBG from "../../images/line-bg.png";
import ScrollButton from "../../component/buttonScrolling/ScrollingButton";

const Faq = () => {
  const DataServiceDetails = [
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "5",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "6",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "7",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "8",
    },
    {
      question: "Why Medical Had Been So Popular Till?",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "9",
    },
    {
      question: "How can i do withdraw from a subject",
      para: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book",
      evenKey: "10",
    },
  ];
  const DataServiceDetails2 = [
    {
      question: "whats your name",
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

      {/* *****NavBar***** */}
      <NavHeader />

      {/* ******ButtonFixed*****  */}
      <ScrollButton/>

      {/* *****MainHead***** */}
      <section>
        <div className="MainHead">
          <h1>Faq's</h1>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" href="/" className="btn">
              <i class="bi bi-house-fill"></i>
              Home
            </Button>
            <Button variant="secondary" className="btn">
              /
            </Button>
            <Button variant="secondary" className="btn">
              Faq's
            </Button>
          </ButtonGroup>
        </div>
        <img src={lineBG} alt="" className="lineHeader" />
      </section>

      {/* *****Faq's***** */}
      <section className="Faqs">
        <Container>
          <div className="row">
            <Accordion  className="column col-xl-6">
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

            <Accordion  className="column col-xl-6">
              {DataServiceDetails2.map((item) => {
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

        </Container>
      </section>

      {/* *****Latest News ***** */}
      <News />
      {/* *****Footer ***** */}
      <Footer />
    </>
  );
};

export default Faq;
