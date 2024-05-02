import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
function Home() {
    const [feedback, setFeedback] = useState({
        role: '',
        rating: '',
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
        // Submit feedback logic
        console.log(feedback);
        // Reset feedback state
        setFeedback({
            role: '',
            rating: '',
            review: ''
        });
        setSubmitted(true);
    };

    return ( 
        <div className="home-container">
            {submitted ? (
                <>
                    <h2>Thank you for your review!</h2>
                    <Link to="/login" className="btn btn-primary mt-3">Logout</Link>
                </>
            ) : (
                <>
                    <h2>Feedback Form</h2>
                    <div className="form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="role">Role:</label>
                                <select
                                    name="role"
                                    value={feedback.role}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select Role</option>
                                    <option value="Student">Student</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="HOD">HOD</option>
                                    <option value="Principal">Principal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating:</label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={feedback.rating}
                                    onChange={handleChange}
                                    className="form-control"
                                    min="1"
                                    max="10"
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

export default Home;
