import React from 'react'
import { navigate } from 'gatsby-link'
import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';

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
    <Container>
        <Row md={5} className="text-center">
            <Col lg={12} md={12}>
                <h1>Write to us</h1>
                <p>We'd love to hear from you </p>
            </Col>
        </Row>
        <Row>
            <Col lg={9} md={12} className="mx-auto">
                <Form
                    name="Contact Us"
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                    </p>
                    <Form.Row className="mb-3">
                        <Col>
                            <Form.Label>
                                Your name:
                            </Form.Label>
                            <Form.Control type="text" name="name" onChange={handleChange} />
                        </Col>
                        <Col>
                            <Form.Label>
                                Your email:
                            </Form.Label>
                            <Form.Control type="email" name="email" onChange={handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>
                            Message:
                        </Form.Label>
                        <Form.Control as="textarea" rows="5" name="message" onChange={handleChange} />
                    </Form.Group>
                    <p>
                    <Button type="submit" className="w-100">Send</Button>
                    </p>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}