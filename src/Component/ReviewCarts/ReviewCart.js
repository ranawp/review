import React from 'react';

const ReviewCart = (props) => {
    const { name, img, comments, rattings } = props.review
    // console.log(props.review)
    return (
        <div className='col-md-4 shadow border  rounded p-3'>
            {/* <div>{img}</div> */}

            <div> <p> <span className='text-primary font-weight-bold'>Name:</span> {name}</p>
                <p><span className='text-primary font-weight-bold'> Comment:</span>{comments}</p>
                <p><span className='text-primary font-weight-bold'> Ratings:</span>{rattings}</p>
            </div>

        </div>



    );
};

export default ReviewCart;