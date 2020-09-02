import React from 'react';
import './Courses.css'
import fakeInfo from '../../fakeData/fakeData'
import{useState} from 'react';
import Topic from '../../Component/Topics/Topic'
import Cart from '../../Component/cart/Cart'
const Courses = () => { 
const first10= fakeInfo.slice(0,10);
const [courses, setCourses] =useState(first10) 
const [cart, setCart]= useState([]);

const handleAddProduct =(course) =>{
    // console.log('course added ', course);
    const newCart=[...cart, course];
    setCart(newCart);
}
    return (
        <div className="row">
            <h3>Our Total courses shown in this page:   {courses.length} </h3>
            <div className="col-md-8 course-area">
                {
                courses.map(course =><Topic
                handleAddProduct={handleAddProduct}
                    topic={course}></Topic>)
                }
            </div>
            <div className="col-md-4 cart-area">
                    {/* <h3>  This is cart</h3>
                    <h5> Order Summary:{cart.length}</h5> */}
            <Cart cart={cart}> </Cart>
            </div>
        </div>
    );
};

export default Courses;