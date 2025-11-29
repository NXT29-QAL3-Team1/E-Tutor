import React, { useState } from 'react'
import CourseContentDetails from '../../../components/CourseContentDetails'
import CourseSection from "../../../components/CourseSection";
import ReviewDialog from '../../../components/ReviewDialog';
import VideoPlayer from '../../../components/VideoPlayer';
import './courseContent.css';

export default function WatchCourse() {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    const handleOpen = () => setOpen(true);
    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <>
            <ReviewDialog open={open} onClose={handleClose} />
            <section className="watch-course">
                <CourseContentDetails handleOpen={handleOpen} />
                <CourseSection />
            </section>
        </>
    );
}
