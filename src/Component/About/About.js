import React from 'react';
import resort from '../../assets/photo/img2.jpg'

const About = () => {
    return (
        <div className='container mt-5 d-flex'>
            <div className='image'>
                <img src={resort} alt="resort-photo" />
            </div>
            <div className='ms-5'>
                <h4 className='text-center'>About us </h4>
                <p>Customer satisfection is our main goal. We create value for customer. Our resort provide you comfort zone and give safety. We also focus on customer secuirty. Make your journey better with us. You can make memories with our resort. </p>
            </div>

        </div>
    );
};

export default About;