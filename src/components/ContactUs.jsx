import React from 'react'
import { navigate } from 'gatsby-link'
import styled from "@emotion/styled"
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ContactTitle = styled("h1")`
  font-family: "Gelasio";
  font-weight: 200;
  font-size: 2.4rem;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 0;
  &::after {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background-color: #30561f;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    margin-top: 23px;
  }
`

const ContactMessage = styled("p")`
  font-family: "Gelasio";
  margin: 40px auto;
`

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactUs() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <>
      <style type="text/css">
        {`

        `}
      </style>
      <Container style={{ fontFamily: "Gelasio" }}>
        <Row md={5} className="text-center">
          <Col lg={12} md={12}>
            <ContactTitle>Write to us</ContactTitle>
            <ContactMessage>
              We'd love to hear from you! Either email us at bostontrs@gmail.com
              or send us a message below:
            </ContactMessage>
          </Col>
        </Row>
        <Row>
          <Col lg={9} md={12} className="mx-auto">
            <Form
              name="Contact Us"
              method="post"
              action="/thankyou/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <Form.Row className="mb-3">
                <Col>
                  <Form.Label>Your name*:</Form.Label>
                  <Form.Control
                    type="text"
                    style={{ backgroundColor: "#e8f3e8" }}
                    name="name"
                    onChange={handleChange}
                  />
                </Col>
                <Col>
                  <Form.Label>Your email*:</Form.Label>
                  <Form.Control
                    type="email"
                    style={{ backgroundColor: "#e8f3e8" }}
                    name="email"
                    onChange={handleChange}
                  />
                </Col>
              </Form.Row>
              <Form.Group>
                <Form.Label>Message*:</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ backgroundColor: "#e8f3e8" }}
                  rows="5"
                  name="message"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#1c791b", borderColor: "#1c791b", fontFamily: "Gelasio" }}
              >
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}