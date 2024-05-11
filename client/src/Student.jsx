import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    const handleRatingChange = (index) => {
        setFeedback(prevState => ({
            ...prevState,
            rating: index + 1
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        setFeedback({
            teacherName: '',
            rating: 0,
            review: ''
        });
        setSubmitted(true);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={i < feedback.rating ? "star gold" : "star"}
                    onClick={() => handleRatingChange(i)}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
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
                                <div className="star-rating">
                                    {renderStars()}
                                </div>
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
