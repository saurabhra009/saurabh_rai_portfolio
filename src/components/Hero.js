import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [learning, setLearning] = useState("");
    const [learningsList, setLearningsList] = useState([]);

    const handleInputChange = (e) => {
        setLearning(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (learning) {
            setLearningsList([...learningsList, learning]);
            setLearning("");
        }
    };

    return (
        <section id="home" className="hero">
            <div className="blackboard">
                <h3>Today's Learning</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={learning} 
                        onChange={handleInputChange} 
                        placeholder="What did you learn today?" 
                        className="input-learning"
                    />
                    <button type="submit" className="btn">Add</button>
                </form>
                <ul className="learnings-list">
                    {learningsList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
