import React from 'react';

const YelpStars = ({rating}) => {
    //Calculate the width of the stars based off the Rating
    //The number of stars are set with the css: width property
    let width = (rating / 5 * 100);

    return (
            <div>
                <div className="stars-outer">
                    <div className="stars-inner" style={{width: width + '%'}}></div>
                </div>
            </div>
        )
}

export default YelpStars