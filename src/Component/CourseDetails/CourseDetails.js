import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData/fakeData'
import Courses from '../Courses/Courses'
const CourseDetails = () => {
    const {id} = useParams();
    const product = fakeData.find(pd =>pd.id === id);
    console.log(product);
    return (
        <div>
    
            <h2>Course {id} detail is coming soon</h2>
            <Courses product = {product}></Courses>
        </div>
    );
};

export default CourseDetails;