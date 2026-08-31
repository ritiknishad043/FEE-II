import React from "react";
import "./Productcard.css";
function Productcard(props){
    return(
        <>
            <div className="product-card">
                <img src={props.image} alt={props.name} />
                <h2>Product Name: {props.name}</h2>
                <p>Product Description: {props.description}</p>
                <p>Price: {props.price}</p>
                <p>
                    Available:{" "}
                    <span className={props.available ? "available" : "not-available"}>
                        {props.available ? "Yes" : "No"}
                    </span>
                </p>
                <div className="button-container">
                    <button className="cart-btn">Add to Cart</button>
                    <button className="buy-btn">Buy Now</button>
                </div>
            </div>
        </>
    )
}
export default Productcard;