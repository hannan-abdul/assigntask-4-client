import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <section id="contact" className="contact-section">
      <div>
        <Container>
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
