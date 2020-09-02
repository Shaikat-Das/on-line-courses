import React from 'react';
import './Topic.css'
import {Link} from 'react-router-dom';
// link er import kora holo react router install korar por web site theke copy kore

const Topic = (props) => {
    // console.log(props.topic.id); console log korle pabe 10 ta id number k dakhabe.
// const {name, description, instructor, price, id}= props.topic
    return (
        <div className="individual-course">
            {/* link ta dynamic korte parsi identical number dia to={"/"+props.topic.id} dia , eber app.js a jao akta new route naw line 27*/}
            <h2> <Link to={"/course/"+props.topic.id}>Course Name: <p>{props.topic.name}</p></Link></h2>
            <h3>Course Description: <p>{props.topic.description}</p></h3>
            <h3>Instructor:<p>{props.topic.instructor}</p></h3>
            <p>Price:${props.topic.price}</p>
            <p>Identity Number:{props.topic.id}</p>
            <button 
                onClick={() => props.handleAddProduct (props.topic)}
            className="btn btn-success"> Enroll Now</button>
        </div>
    );
};

export default Topic;