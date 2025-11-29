import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    thumbnail: { type: String, default: '' },
    trailer: { type: String, default: '' },
    details: { type: String, default: '' },
    for: { type: String, default: '' },
    requirement: { type: String, default: '' },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;
