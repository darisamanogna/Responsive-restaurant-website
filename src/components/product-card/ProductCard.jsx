import React from 'react';

import './product-card.css';

const ProductCard = (props) => {
    // Destructuring the props to get specific properties
    const { title, imgUrl, price } = props.item;

    return (
        <div className="single__product">
            <div className="product__img">
                {/* Displaying the product image */}
                <img src={imgUrl} alt="" className="w-100" />
            </div>

            <div className="product__content">
                <div className="rating text-center">
                    {/* Displaying a 5-star rating */}
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                    <span><i class="ri-star-s-fill"></i></span>
                </div>

                {/* Displaying the product title */}
                <h6>{title}</h6>

                <div className="d-flex align-items center justify-content-between">
                    <span className="price d-flex align-items-center">
                        {/* Displaying the product price */}
                        Price: $<span>{price}</span>
                    </span>
                    <span className="shopping__icon">
                        {/* Displaying a shopping cart icon */}
                        <i class="ri-shopping-cart-line"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;