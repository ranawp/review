import React from 'react';
import './Home.css';
import resortPhoto from '../../assets/photo/img-1.jpg';
import CustomerReview from '../Hooks/Review';
import ReviewCart from '../ReviewCarts/ReviewCart';
import { Link } from 'react-router-dom';




const Home = () => {
    const [reviews, setreviews] = CustomerReview();
    return (
        <>
            <div className='heroSection'>
                <div className='left-section'>
                    <h1>Find your favorite resort <br /> in Cox's Bazar. </h1>
                    <p>Enjoy your best time with your friends and familly. We are here to help you booking resort with special discount for you.Let's enjoy!!!!</p>
                    <button className='bookButton'>Book Now</button>

                </div>
                <div>
                    <img className='hero-section-image' src={resortPhoto} alt="resturantphoto" />
                </div>
            </div>
            <h1 className='reviewHeader'>Reviews: {reviews.slice(0, 3).length} </h1>


            <div className='container mt-4'>
                <div className='row gy-4 gx-5'>

                    {
                        reviews.slice(0, 3).map(review =>
                            <ReviewCart
                                cart={review.id}
                                review={review}
                            > </ReviewCart>


                        )
                    }
                    <button className='show-more-button mt-3 mb-3'><Link to='/orderReview'>Show More</Link></button>



                </div>
            </div>









        </>

    );
};

export default Home;