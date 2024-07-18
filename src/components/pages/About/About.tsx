import { Col, Container, Row } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <section id="contact" className="contact-section">
      <div>
        <Container>
          <div>
            <h1>Overview</h1>
            <p className="overview-para">
              Our gym company is dedicated to transforming lives through fitness
              and wellness. We offer state-of-the-art facilities equipped with
              the latest exercise equipment, a variety of group fitness classes,
              and personalized training programs. Our team of certified trainers
              and nutrition experts are committed to helping members achieve
              their health goals. We foster a supportive and inclusive community
              where everyone, from beginners to advanced athletes, can thrive.
              With a focus on holistic wellness, we provide resources for
              physical, mental, and nutritional health, ensuring our members
              lead balanced and fulfilling lives. Join us and embark on your
              fitness journey today.
            </p>
          </div>
          <div className="text-center">
            <h1>Contact Us</h1>
          </div>
          <form>
            <Row className="input-container">
              <Col xs={12}>
                <div className="styled-input wide">
                  <input
                    placeholder="name"
                    type="text"
                    // {...register("name", { required: true })}
                    required
                  />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="styled-input">
                  <input
                    placeholder="Email"
                    type="text"
                    // {...register("email", { required: true })}
                    required
                  />
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="styled-input" style={{ float: "right" }}>
                  <input
                    placeholder="Phone"
                    type="text"
                    // {...register("phone", { required: true })}
                    required
                  />
                </div>
              </Col>
              <Col xs={12}>
                <div className="styled-input wide">
                  <textarea
                    placeholder="Message"
                    // {...register("message", { required: true })}
                    required
                  />
                </div>
              </Col>
              <Col xs={12}>
                <button className="btn-lrg submit-btn btn-main">
                  Send Message
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default About;
