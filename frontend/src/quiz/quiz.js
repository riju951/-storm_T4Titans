import React, { useState } from 'react';
import axios from 'axios';
import './quiz.css';

const Quiz = () => {
    const [answers, setAnswers] = useState({});

    const handleChange = (e, questionId) => {
        setAnswers({
            ...answers,
            [questionId]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            await axios.post(
                'http://localhost:5000/quiz/submit',
                { userId: 'USER_ID', results: answers },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Submitted answers:', answers);
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };

    const questions = [
        "Do you enjoy working in a team?",
        "Do you like solving complex problems?",
        "Are you comfortable speaking in public?",
        "Do you enjoy leading a team?",
        "Are you interested in technology?",
        "Do you enjoy helping others?",
        "Are you comfortable working with numbers?",
        "Do you enjoy creating art?",
        "Are you interested in scientific research?",
        "Do you like organizing events?",
        // Add more questions as needed
    ];

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">Career quiz</h2>
            <form className="quiz-form" onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div className="question" key={index}>
                        <p className="question-title">{`Question ${index + 1}: ${question}`}</p>
                        <div className="answer-options">
                            <div className="answer-option">
                                <input
                                    type="radio"
                                    id={`q${index + 1}a1`}
                                    name={`question${index + 1}`}
                                    value="Yes"
                                    onChange={(e) => handleChange(e, `question${index + 1}`)}
                                />
                                <label htmlFor={`q${index + 1}a1`}>Yes</label>
                            </div>
                            <div className="answer-option">
                                <input
                                    type="radio"
                                    id={`q${index + 1}a2`}
                                    name={`question${index + 1}`}
                                    value="No"
                                    onChange={(e) => handleChange(e, `question${index + 1}`)}
                                />
                                <label htmlFor={`q${index + 1}a2`}>No</label>
                            </div>
                        </div>
                    </div>
                ))}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Quiz;


