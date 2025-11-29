import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdvancedInformation from './components/AdvanceInformation';
import axios from 'axios';

function CreateCourse() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        category: '',
        price: '',
        thumbnail: '',
        trailer: '',
        details: '',
        for: '',
        requirement: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdvancedChange = (data) => {
        setFormData(prev => ({
            ...prev,
            ...data
        }));
    };

    const handleCancel = () => {
        setFormData({
            title: '',
            subtitle: '',
            category: '',
            price: '',
            thumbnail: '',
            trailer: '',
            details: '',
            for: '',
            requirement: ''
        });
    };
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(1);

        if (!formData.thumbnail || !formData.trailer) {
            return alert("Upload files first!");
        }
        setLoading(true);


        try {
            const thumbnailUrl = await uploadToCloudinary(formData.thumbnail);
            const trailerUrl = await uploadToCloudinary(formData.trailer);
            console.log(thumbnailUrl);
            console.log(trailerUrl);

            console.log("Thumbnail file:", thumbnailUrl);
            console.log("Trailer file:", trailerUrl);

            const body = {
                title: formData.title,
                subtitle: formData.subtitle,
                category: formData.category,
                price: formData.price,
                thumbnail: thumbnailUrl,
                trailer: trailerUrl,
                details: formData.details,
                for: formData.for,
                requirement: formData.requirement
            };

            const res = await axios.post("http://localhost:5000/api/courses", body);
            console.log("Course saved:", res.data);
            alert("course added!");

            setFormData({
                title: '',
                subtitle: '',
                category: '',
                price: '',
                thumbnail: '',
                trailer: '',
                details: '',
                for: '',
                requirement: ''
            });

            setLoading(false);

        } catch (err) {
            console.error("Error saving course:", err);
            setLoading(false);
            alert("failed to add");
        }
    };

    const uploadToCloudinary = async (file, folder = "courses") => {
        if (!file) return "";

        const formDataCloud = new FormData();
        formDataCloud.append("file", file);
        formDataCloud.append("upload_preset", "courses_upload");
        formDataCloud.append("folder", folder);

        try {
            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/dfsfskczr/upload",
                formDataCloud
            );
            return res.data.secure_url;
        } catch (err) {
            console.error("Upload error:", err);
            return "";
        }
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

                                <Form
                                    onSubmit={handleSubmit}
                                >
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


                                    {/* Course Topic Input */}
                                    <Form.Group className="mb-4" controlId="topic">
                                        <Form.Label>Course Category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="What is primarily taught in your course?"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="custom-input"
                                            style={{ borderColor: '#ced4da' }}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="What do you think this course worth?"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="custom-input"
                                            style={{ borderColor: '#ced4da' }}
                                        />
                                    </Form.Group>
                                    <AdvancedInformation onChange={handleAdvancedChange} />
                                    {/* Language, Subtitle Language, and Level Selects */}

                                    {/* Action Buttons */}
                                    <div className="d-flex justify-content-between">
                                        <Button
                                            variant="outline-secondary"
                                            onClick={handleCancel}
                                            className="btn-cancel px-4"
                                        >
                                            Cancel
                                        </Button>
                                        <Button type="submit" disabled={loading} className="btn-save px-4">
                                            {loading ? "Uploading..." : "Submit"}
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

export default CreateCourse;