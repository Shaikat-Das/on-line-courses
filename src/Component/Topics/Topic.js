import React from 'react';
import './Topic.css'

const Topic = (props) => {
    
    return (
        <div className="individual-course">
            <h2>Course Name: <p>{props.topic.name}</p></h2>
            <h3>Course Description: <p>{props.topic.description}</p></h3>
            <h3>Instructor:<p>{props.topic.instructor}</p></h3>
            <p>Price:${props.topic.price}</p>
            <button 
                onClick={() => props.handleAddProduct (props.topic)}
            className="btn btn-success"> Enroll Now</button>
        </div>
    );
};

export default Topic;