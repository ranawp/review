import React from 'react';
import CustomerReview from '../Hooks/Review';
import './AllReview.css'

const AllReviews = () => {
    const [reviews, setreviews] = CustomerReview();
    return (
        <div className='container mt-5'>
            <div className='row gy-3 g-2'>
                <h1 className='cart text-center'>All Reviews</h1>
                {
                    reviews.map(review =>
                        <div className='col-md-4 border shadow p-3'>
                            <p>Name: {review.name} </p>
                            <p>Comments: {review.comments} </p>
                            <p>Ratings: {review.rattings} </p>

                        </div>

                    )
                }
            </div>


        </div>
    );
};

export default AllReviews;