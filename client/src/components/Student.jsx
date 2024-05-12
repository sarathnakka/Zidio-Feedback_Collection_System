import React, { useState } from 'react';
import axios from 'axios';
import './Student.css';

function Student() {
    const [feedback, setFeedback] = useState({
        teacherName: '',
        rating: 0,
        review: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/submit-feedback', feedback)
            .then(response => {
                console.log(response.data);
                setSubmitted(true);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return ( 
        <div className="home-container">
            {submitted ? (
                <>
                <h2>Thank you for your review!</h2>
                <Link to="/" className="btn btn-primary mt-3">Logout</Link>
                </>
            ) : (
                <>
                    <h2>Feedback Form</h2>
                    <div className="form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="teacherName">Teacher :</label>
                                <select
                                    name="teacherName"
                                    value={feedback.teacherName}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select Teacher</option>
                                    <option value="Sarath">Sarath</option>
                                    <option value="Bhavesh">Bhavesh</option>
                                    <option value="muntaha">muntaha</option>
                                    <option value="saloni">saloni</option>
                                    <option value="reddy">reddy</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Rating:</label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={feedback.rating}
                                    onChange={handleChange}
                                    className="form-control"
                                    min="1"
                                    max="5" // Update to 5 stars
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Review:</label>
                                <textarea
                                    name="review"
                                    value={feedback.review}
                                    onChange={handleChange}
                                    className="form-control"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </>
            )}
        </div>
     );
}

export default Student;
