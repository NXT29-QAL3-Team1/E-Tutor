import Button from '../../../components/Button';
import CourseDetailsCard from '../../../components/CourseDetailsCard';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { useSiteContent } from "../../../contexts/SiteContentContext";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie-player';
import animationData from './Learning.json';
export default function Home() {
    const navigate = useNavigate();
    // @ts-ignore
    const { content } = useSiteContent();

    const [courses, setCourses] = useState([]);


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/courses");
                setCourses(res.data);
            } catch (err) {
                console.error("Failed to fetch courses:", err);
            }
        };

        fetchCourses();
    }, []);

    const latestCourses = courses.slice(-4).reverse();
    console.log(latestCourses);

    return (
        <>
            <main>
                {/* Hero */}
                <section className="hero py-5 py-lg-6 bg-light">
                    <div className="container">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-6">
                                <h1 className="display-5 fw-bold lh-tight">
                                    {content.home.title || "Learn with expert anytime anywhere"}
                                </h1>
                                <p className="lead text-secondary mt-3">
                                    {content.home.subtitle
                                        ||
                                        "Our mission is to help people to find the best course online and learn with expert anytime, anywhere."}
                                </p>
                                {
                                    localStorage.getItem("token") ?
                                        (
                                            <Button className="btn bootBtn mt-3 px-4" onClick={() => {
                                                navigate("/about");
                                            }}>About Us</Button>
                                        )
                                        :
                                        (
                                            <Button className="btn bootBtn mt-3 px-4" onClick={() => {
                                                navigate("/auth/signup");
                                            }}>Create Account</Button>
                                        )
                                }
                            </div>
                            <div className="col-lg-6" style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} >
                                <Lottie
                                    loop
                                    play
                                    animationData={animationData}
                                    style={{ width: "80%", height: "80%" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories  */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="h3 text-center fw-bold mb-4">Top categories</h2>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card category h-100">
                                    <div className="card-body d-flex align-items-center gap-3">
                                        <div className="icon rounded-3 bg-warning-subtle text-warning"><i className="bi bi-emoji-smile fs-4"></i></div>
                                        <div>
                                            <div className="fw-semibold small">Personal Development</div>
                                            <div className="text-secondary-600 text-muted small">20,126 Courses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card category h-100">
                                    <div className="card-body d-flex align-items-center gap-3">
                                        <div className="icon rounded-3 bg-primary-subtle text-primary"><i className="bi bi-building fs-4"></i></div>
                                        <div>
                                            <div className="fw-semibold small">Office Productivity</div>
                                            <div className="text-muted small">13,932 Courses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card category h-100">
                                    <div className="card-body d-flex align-items-center gap-3">
                                        <div className="icon rounded-3 bg-info-subtle text-info"><i className="bi bi-megaphone fs-4"></i></div>
                                        <div>
                                            <div className="fw-semibold small">Marketing</div>
                                            <div className="text-muted small">12,068 Courses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card category h-100">
                                    <div className="card-body d-flex align-items-center gap-3">
                                        <div className="icon rounded-3 bg-secondary-subtle text-secondary"><i className="bi bi-camera fs-4"></i></div>
                                        <div>
                                            <div className="fw-semibold small">Photography & Video</div>
                                            <div className="text-muted small">6,196 Courses</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Best selling courses */}
                <section className="py-5 bg-light">
                    <div className="container">
                        <h2 className="h3 text-center fw-bold mb-4">Best selling courses</h2>
                        {/* <div className="row g-4 home-courses">
                            Repeatable course card
                            <CourseDetailsCard />
                            <CourseDetailsCard />
                            <CourseDetailsCard />
                            <CourseDetailsCard />
                        </div> */}
                        <div className="row g-4 home-courses">
                            {latestCourses.map((course) => (
                                <CourseDetailsCard
                                    key={course._id}
                                    id={course._id}
                                    badge={course.category}
                                    title={course.title}
                                    subtitle={course.subtitle}
                                    price={course.price}
                                    image={course.thumbnail}
                                />
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <Button className="btn bootBtn mt-3 px-4" onClick={() => {
                                navigate("/courses");
                            }}>Browse All Courses <i className="bi bi-arrow-right ms-1"></i></Button>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container">
                        <div className="row g-4 align-items-stretch">
                            <div className="col-lg-6">
                                <div
                                    className="p-5 rounded-4 text-white bg-gradient start-teaching h-100 d-flex flex-column justify-content-between">
                                    <div className="become-instructor-text">
                                        <h3 className="fw-bold">Get In Touch</h3>
                                        <p className="mb-4">Instructors from around the world teach millions of students on E-tutor. We provide the
                                            tools and skills to teach what you love.</p>
                                    </div>

                                    <div
                                        onClick={() => {
                                            navigate("/help");
                                        }}
                                        className="btn btn-light align-self-start">Contact Us <i className="bi bi-arrow-right ms-1"></i>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card h-100 steps-card">
                                    <div className="card-body p-4">
                                        <h5 className="fw-semibold mb-3">Your teaching & earning steps</h5>
                                        <ol className="list-unstyled m-0">
                                            <li className="d-flex align-items-center mb-3"><span className="step me-3">1</span> Apply to become instructor
                                            </li>
                                            <li className="d-flex align-items-center mb-3"><span className="step me-3">2</span> Build & edit your profile
                                            </li>
                                            <li className="d-flex align-items-center mb-3"><span className="step me-3">3</span> Create your new course</li>
                                            <li className="d-flex align-items-center"><span className="step me-3">4</span> Start teaching & earning</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container">
                        <div className="row g-3 align-items-center">
                            <div className="col-12 col-md-auto">
                                <h6 className="mb-0">6.3k trusted companies</h6>
                            </div>
                            <div className="col">
                                <div className="partner-companies d-flex flex-wrap gap-5 justify-content-center opacity-75">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                                        alt="Netflix" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                                        alt="YouTube" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                                        alt="Google" />
                                    <img src="https://orangemagazine.ph/wp-content/uploads/2025/03/Lenovo-Logo.png"
                                        alt="Lenovo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
