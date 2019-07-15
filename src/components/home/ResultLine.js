import React from 'react';

export function convertPrice(pricePoint){
    let priceCategory = '';
    for(var x=0; x < pricePoint; x++){
        priceCategory = priceCategory.concat('$');
    }

    return priceCategory
}

const ResultLine = ({ restaurant }) => {
    return(
        <div className="card">
            <img className="card-image-top" src={restaurant.image_url}  alt="restImage" />
            <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p>{restaurant.address}</p>
                <p>{restaurant.area}</p>
                <p>Price: {convertPrice(restaurant.price)}</p>
            </div>
        </div>
    )
}
export default ResultLine;

