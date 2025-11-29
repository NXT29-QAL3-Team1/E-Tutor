import React, { useState } from 'react';
import { Accordion, Button, Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Help() {
  // State for managing form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div
      style={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        padding: '80px 0',
      }}
    >
      <Container>
        {/* FAQ Section: Displays a list of frequently asked questions with collapsible answers */}
        <section style={{ marginBottom: '80px' }}>
          <h1
            style={{
              textAlign: 'center',
              fontSize: '36px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '60px',
            }}
          >
            Frequently asked questions
          </h1>

          <Accordion flush style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Accordion.Item
              eventKey="faq1"
              style={{
                marginBottom: '12px',
                border: 'none',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              }}
            >
              <Accordion.Header
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  fontWeight: '500',
                  padding: '12px 15px',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                Fusce placerat interdum magna, ut ultricies odio pharetra pulvinar.
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: '#fff',
                  color: '#666',
                  padding: '20px',
                }}
              >
                Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae suscipit lacus. Id finglila leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed lectus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="faq2"
              style={{
                marginBottom: '12px',
                border: 'none',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              }}
            >
              <Accordion.Header
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  fontWeight: '500',
                  padding: '12px 15px',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                Proin lacinia lobortis metus, ut faucibus eros ullamcorper et.
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: '#fff',
                  color: '#666',
                  padding: '20px',
                }}
              >
                Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae suscipit lacus. Id finglila leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed lectus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="faq3"
              style={{
                marginBottom: '12px',
                border: 'none',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              }}
            >
              <Accordion.Header
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  fontWeight: '500',
                  padding: '12px 15px',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                Etiam a nisl dui. Integer sed eros sed leo blandit interdum eget nec
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: '#fff',
                  color: '#666',
                  padding: '20px',
                }}
              >
                Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae suscipit lacus. Id finglila leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed lectus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="faq4"
              style={{
                marginBottom: '12px',
                border: 'none',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              }}
            >
              <Accordion.Header
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  fontWeight: '500',
                  padding: '12px 15px',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                Nulla id ligula ligula.
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: '#fff',
                  color: '#666',
                  padding: '20px',
                }}
              >
                Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae suscipit lacus. Id finglila leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed lectus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="faq5"
              style={{
                marginBottom: '12px',
                border: 'none',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
              }}
            >
              <Accordion.Header
                style={{
                  backgroundColor: '#fff',
                  color: '#333',
                  fontWeight: '500',
                  padding: '12px 15px',
                  border: 'none',
                  boxShadow: 'none',
                }}
              >
                Ut ullamcorper est sit amet quam aliquet mattis.
              </Accordion.Header>
              <Accordion.Body
                style={{
                  backgroundColor: '#fff',
                  color: '#666',
                  padding: '20px',
                }}
              >
                Aliquam semper tellus vel lacus rutrum mollis. Nunc vitae suscipit lacus. Id finglila leo. Nulla dictum, enim nec bibendum auctor, lorem mi rutrum urna, sed lectus urna nibh sit amet velit. Sed varius sem semper leo ultricies tincidunt. Etiam id ligula ut augue auctor molestie ut quis felis.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Contact Us Section: Displays contact information and a form for user inquiries */}
        <section>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '30px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '80px',
            }}
          >
            Contact Us
          </h2>

          <Row>
            {/* Contact Information: Shows address, phone numbers, and email addresses */}
            <Col md={6} style={{ marginBottom: '30px' }}>
              <p
                style={{
                  fontSize: '18px',
                  color: '#333',
                  marginBottom: '50px',
                  marginLeft: '60px',
                  lineHeight: '1.6',
                }}
              >
                Will you be in Los Angeles or any other branches any<br /> time soon? Stop by the office! We'd love to meet.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '80px',
                  marginLeft: '60px',
                  marginBottom: '20px',
                }}
              >
                <h3
                  style={{
                    color: '#ff6b35',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    minWidth: '100px',
                    margin: 0,
                    paddingTop: '3px',
                  }}
                >
                  ADDRESS
                </h3>
                <div>
                  <p style={{ color: '#333', margin: 0 }}>1702 Olympic Boulevard</p>
                  <p style={{ color: '#333', margin: 0 }}>Santa Monica, CA 90404</p>
                </div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '20px 0' }} />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '80px',
                  marginLeft: '60px',
                  marginBottom: '20px',
                }}
              >
                <h3
                  style={{
                    color: '#ff6b35',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    minWidth: '100px',
                    margin: 0,
                    paddingTop: '3px',
                  }}
                >
                  PHONE NUMBER
                </h3>
                <div>
                  <p style={{ color: '#333', margin: 0 }}>(480) 555-0103</p>
                  <p style={{ color: '#333', margin: 0 }}>(219) 555-0114</p>
                </div>
              </div>

              <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '20px 0' }} />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginLeft: '60px',
                  gap: '80px',
                }}
              >
                <h3
                  style={{
                    color: '#ff6b35',
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '1px',
                    minWidth: '100px',
                    margin: 0,
                    paddingTop: '3px',
                  }}
                >
                  EMAIL ADDRESS
                </h3>
                <div>
                  <p style={{ color: '#333', margin: 0 }}>help.eduguard@gmail.com</p>
                  <p style={{ color: '#333', margin: 0 }}>career.eduguard@gmail.com</p>
                </div>
              </div>
            </Col>

            {/* Contact Form: Allows users to send messages with their details */}
            <Col md={6}>
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '25px 30px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  borderRadius: '6px',
                  maxWidth: '90%',
                  margin: '0 auto',
                }}
              >
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: '500',
                    color: '#1a1a1a',
                    marginBottom: '8px',
                  }}
                >
                  Get in touch
                </h3>
                <p
                  style={{
                    color: '#999',
                    fontSize: '14px',
                    marginBottom: '25px',
                  }}
                >
                  Feel free to contact us, we love to make new partners & friends
                </p>

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '500', color: '#333', fontSize: '13px' }}>
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="First name..."
                          value={formData.firstName}
                          onChange={handleChange}
                          style={{
                            padding: '8px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: '500', color: '#333', fontSize: '13px' }}>
                          Last Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="Last name..."
                          value={formData.lastName}
                          onChange={handleChange}
                          style={{
                            padding: '8px 12px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            fontSize: '14px',
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: '500', color: '#333', fontSize: '13px' }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: '500', color: '#333', fontSize: '13px' }}>
                      Subject
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Message Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: '500', color: '#333', fontSize: '13px' }}>
                      Message
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={3}
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        resize: 'none',
                        fontSize: '14px',
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    style={{
                      backgroundColor: '#ff6b35',
                      border: 'none',
                      color: '#fff',
                      padding: '10px 18px',
                      fontSize: '15px',
                      fontWeight: '600',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '10px',
                      justifyContent: 'flex-start',
                    }}
                  >
                    Send Message
                    <img
                      src="/imgs/PaperPlaneRight.png"
                      alt="Send"
                      style={{
                        width: '18px',
                        height: '18px',
                        objectFit: 'contain',
                      }}
                    />
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <style>{`
        .accordion-button {
          background-color: #fff !important;
          color: #333 !important;
          font-weight: 500 !important;
          padding: 12px 15px !important;
          border: none !important;
          box-shadow: none !important;
          width: 100%;
        }

        .accordion-button:not(.collapsed) {
          background-color: #000 !important;
          color: #fff !important;
          border: none !important;
          box-shadow: none !important;
          width: 100%;
          padding: 12px 15px !important;
        }

        .accordion-button:focus {
          box-shadow: none !important;
          outline: none !important;
        }

        .accordion-button::after {
          background-image: url('/imgs/ArrowDown.png') !important;
          background-size: 16px 16px;
          transform: rotate(180deg);
          transition: transform 0.3s ease, filter 0.3s ease;
          filter: brightness(0) invert(0);
        }

        .accordion-button:not(.collapsed)::after {
          transform: rotate(0deg);
          filter: brightness(0) invert(1);
        }

        .accordion-item {
          border: none !important;
          width: 100%;
        }

        .accordion-body {
          padding: 15px !important;
        }

        .form-control:focus {
          border-color: #ff6b35 !important;
          box-shadow: 0 0 0 0.01rem #ff6b35 !important;
        }

        .btn:hover {
          background-color: #e85a28 !important;
        }
      `}</style>
    </div>
  );
}

export default Help;