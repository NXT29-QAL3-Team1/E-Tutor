    import React, { useState } from 'react';
    import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';

    function App() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        category: '',
        subCategory: '',
        topic: '',
        language: '',
        subtitleLanguage: '',
        level: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
    };

    const handleCancel = () => {
        setFormData({
        title: '',
        subtitle: '',
        category: '',
        subCategory: '',
        topic: '',
        language: '',
        subtitleLanguage: '',
        level: ''
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-vh-200 bg-light py-5">
        <Container>
            <Row className="justify-content-center">
            <Col lg={10}>
                <Card className="border-0 shadow-sm" style={{ borderRadius: 0 }}>
                <Card.Body className="p-4 p-md-5">

                    {/* Page Title */}
                    <h2 className="text-center mb-5 fw-semibold">Basic Information</h2>

                    <Form>
                    <style>{`
                        .custom-input,
                        .custom-select,
                        .custom-input::placeholder,
                        .custom-select option {
                        color: #6c757d !important;
                        }
                        h2.text-center.fw-semibold {
                        color: #222 !important;
    
                        }
    
                       .form-label {
                        color: #222 !important; 
  
                        }
  
  



                        .custom-input::placeholder {
                        color: #adb5bd !important;
                        opacity: 1;
                        }

                        .form-control:focus, .form-select:focus {
                        border-color: #86b7fe !important;
                        box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25) !important;
                        }

                        .form-control,
                        .form-select,
                        .btn {
                        border-radius: 0 !important;
                        }

                        .btn-save {
                        background-color: #FE7134;
                        border-color: #FE7134;
                        transition: 0.2s ease;
                        }
                        .btn-save:hover {
                        background-color: #e55f24 !important;
                        border-color: #e55f24 !important;
                        }

                        .btn-cancel {
                        border-color: #ced4da;
                        color: #6c757d;
                        transition: 0.2s ease;
                        }
                        .btn-cancel:hover {
                        background-color: #86b7fe !important;
                        border-color: #86b7fe !important;
                        color: white !important;
                        }

                        .form-control:focus,
                        .form-select:focus {
                        box-shadow: none !important;
                        border: 1.5px solid #4da3ff !important;
                        outline: none !important;
                        }
                    `}</style>

                    {/* Title Input with Character Counter */}
                    <Form.Group className="mb-4" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <div className="position-relative">
                        <Form.Control
                            type="text"
                            placeholder="Your course title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            maxLength={80}
                            className="pe-5 custom-input"
                            style={{ borderColor: '#ced4da' }}
                        />
                        <span
                            className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted small"
                            style={{ fontSize: '0.875rem', pointerEvents: 'none', zIndex: 5 }}
                        >
                            {formData.title.length}/80
                        </span>
                        </div>
                    </Form.Group>

                    {/* Subtitle Input with Character Counter */}
                    <Form.Group className="mb-4" controlId="subtitle">
                        <Form.Label>Subtitle</Form.Label>
                        <div className="position-relative">
                        <Form.Control
                            type="text"
                            placeholder="Your course subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                            maxLength={120}
                            className="pe-5 custom-input"
                            style={{ borderColor: '#ced4da' }}
                        />
                        <span
                            className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted small"
                            style={{ fontSize: '0.875rem', pointerEvents: 'none', zIndex: 5 }}
                        >
                            {formData.subtitle.length}/120
                        </span>
                        </div>
                    </Form.Group>

                    {/* Category and Sub-category Selects */}
                    <Row className="mb-4">
                        <Col md={6} className="mb-3 mb-md-0">
                        <Form.Group controlId="category">
                            <Form.Label>Course Category</Form.Label>
                            <Form.Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="custom-select"
                            style={{ borderColor: '#ced4da' }}
                            >
                            <option value="">Select...</option>
                            <option value="development">Option 1</option>
                            <option value="business">Option 2 </option>
                            <option value="design">Option 3</option>
                            <option value="marketing">Option 4</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group controlId="subCategory">
                            <Form.Label>Course Sub-category</Form.Label>
                            <Form.Select
                            name="subCategory"
                            value={formData.subCategory}
                            onChange={handleChange}
                            className="custom-select"
                            style={{ borderColor: '#ced4da' }}
                            >
                            <option value="">Select...</option>
                            <option value="web-development">Option 1</option>
                            <option value="mobile-development">Option 2</option>
                            <option value="data-science">Option 3</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>

                    {/* Course Topic Input */}
                    <Form.Group className="mb-4" controlId="topic">
                        <Form.Label>Course Topic</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="What is primarily taught in your course?"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="custom-input"
                        style={{ borderColor: '#ced4da' }}
                        />
                    </Form.Group>

                    {/* Language, Subtitle Language, and Level Selects */}
                    <Row className="mb-5">
                        <Col md={4} className="mb-3 mb-md-0">
                        <Form.Group controlId="language">
                            <Form.Label>Course Language</Form.Label>
                            <Form.Select
                            name="language"
                            value={formData.language}
                            onChange={handleChange}
                            className="custom-select"
                            style={{ borderColor: '#ced4da' }}
                            >
                            <option value="">Select...</option>
                            <option value="english">Option 1</option>
                            <option value="spanish">Option 2</option>
                            <option value="french">Option 3</option>
                            <option value="german">Option 4</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>

                        <Col md={4} className="mb-3 mb-md-0">
                        <Form.Group controlId="subtitleLanguage">
                            <Form.Label>Subtitle Language (Optional)</Form.Label>
                            <Form.Select
                            name="subtitleLanguage"
                            value={formData.subtitleLanguage}
                            onChange={handleChange}
                            className="custom-select"
                            style={{ borderColor: '#ced4da' }}
                            >
                            <option value="">Select...</option>
                            <option value="english">Option 1</option>
                            <option value="spanish">Option 2</option>
                            <option value="french">Option 3</option>
                            <option value="german">Option 4</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>

                        <Col md={4}>
                        <Form.Group controlId="level">
                            <Form.Label>Course Level</Form.Label>
                            <Form.Select
                            name="level"
                            value={formData.level}
                            onChange={handleChange}
                            className="custom-select"
                            style={{ borderColor: '#ced4da' }}
                            >
                            <option value="">Select...</option>
                            <option value="beginner">Option 1</option>
                            <option value="intermediate">Option 2</option>
                            <option value="advanced">Option 3</option>
                            <option value="all-levels">Option 4</option>
                            </Form.Select>
                        </Form.Group>
                        </Col>
                    </Row>

                    {/* Action Buttons */}
                    <div className="d-flex justify-content-between">
                        <Button
                        variant="outline-secondary"
                        onClick={handleCancel}
                        className="btn-cancel px-4"
                        >
                        Cancel
                        </Button>
                        <Button
                        className="btn-save px-4"
                        onClick={handleSubmit}
                        >
                        Save & Next
                        </Button>
                    </div>
                    </Form>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
    );
    }

    export default App;