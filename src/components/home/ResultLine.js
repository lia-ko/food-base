import React from 'react';

export function convertPrice(pricePoint){
    
    let dollarSigns = '';
    for(var x=0; x < pricePoint; x++){
        dollarSigns = dollarSigns.concat('$');
    }

    return dollarSigns
}

const ResultLine = ({ restaurant }) => {
    return(
        <div className="card">
            <img class="card-image-top" src={restaurant.image_url}  alt="restImage" />
            <div class="card-body">
                <h5 class="card-title">{restaurant.name}</h5>
                <p>{restaurant.address}</p>
                <p>{restaurant.area}</p>
                <p>Price: {convertPrice(restaurant.price)}</p>
            </div>
        </div>
    )
}
export default ResultLine;

