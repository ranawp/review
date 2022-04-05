import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {
    const { name, img, comments, rattings } = props.review
    // console.log(props.review)
    return (
        <div className='col-md-4 shadow border  rounded p-3 '>
            {/* <div>{img}</div> */}

            <div className='review-cart'> <p> <span className='cart font-weight-bold'>Name:</span> {name}</p>
                <p><span className='cart font-weight-bold'> Comment:</span>{comments}</p>
                <p><span className='cart font-weight-bold'> Ratings:</span>{rattings}</p>
            </div>

        </div>



    );
};

export default ReviewCart;