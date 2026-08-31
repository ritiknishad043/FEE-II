import React from "react";
import Productcard from "./Productcard";
function Cart({ category }){
    const products = [
        {
            name: "Laptop",
            category: "Computers",
            description: "A powerful laptop for students",
            price: 55000,
            available: true,
            image: "/images/laptop.png"
        },
        {
            name: "Headphones",
            category: "Audio",
            description: "Wireless noise-cancelling headphones",
            price: 2500,
            available: true,
            image: "/images/headphone.png"
        },
        {
            name: "Keyboard",
            category: "Gaming",
            description: "Mechanical RGB gaming keyboard",
            price: 1800,
            available: false,
            image: "/images/keyboard.png"
        },
        {
            name: "Mouse",
            category: "Gaming",
            description: "Wireless gaming mouse",
            price: 1200,
            available: true,
            image: "/images/mouse.png"
        },
        {
            name: "Monitor",
            category: "Computers",
            description: "24-inch Full HD LED monitor",
            price: 8500,
            available: true,
            image: "/images/Monitor.png"
        },
        {
            name: "Smartphone",
            category: "Mobile",
            description: "Latest smartphone with high-quality camera",
            price: 25000,
            available: true,
            image: "/images/Smartphone.png"
        },
        {
            name: "Tablet",
            category: "Mobile",
            description: "Lightweight tablet for study and entertainment",
            price: 18000,
            available: true,
            image: "/images/Tablet.png"
        },
        {
            name: "Smartwatch",
            category: "Wearables",
            description: "Fitness smartwatch with heart-rate tracking",
            price: 4500,
            available: false,
            image: "/images/SmartWatch.png"
        },
        {
            name: "Speaker",
            category: "Audio",
            description: "Portable Bluetooth speaker with deep bass",
            price: 3200,
            available: true,
            image: "/images/Speaker.png"
        },
        {
            name: "Webcam",
            category: "Accessories",
            description: "Full HD webcam for online classes and meetings",
            price: 2800,
            available: true,
            image: "/images/WebCam.png"
        },

        // More products
        {
            name: "Gaming Console",
            category: "Gaming",
            description: "Next-generation gaming console for immersive gaming",
            price: 45000,
            available: true,
            image: "/images/console.png"
        },
        {
            name: "Power Bank",
            category: "Accessories",
            description: "20000mAh fast-charging power bank",
            price: 1800,
            available: true,
            image: "/images/powerbank.png"
        },
        {
            name: "USB Flash Drive",
            category: "Storage",
            description: "128GB high-speed USB flash drive",
            price: 900,
            available: true,
            image: "/images/pendrive.png"
        },
        {
            name: "External SSD",
            category: "Storage",
            description: "1TB portable high-speed external SSD",
            price: 7500,
            available: true,
            image: "/images/ssd.png"
        },
        {
            name: "Printer",
            category: "Office",
            description: "Wireless all-in-one printer for home and office",
            price: 8500,
            available: true,
            image: "/images/printer.png"
        },
        {
            name: "Router",
            category: "Networking",
            description: "Dual-band Wi-Fi router with high-speed connectivity",
            price: 2200,
            available: true,
            image: "/images/router.png"
        },
        {
            name: "Microphone",
            category: "Audio",
            description: "USB condenser microphone for recording and streaming",
            price: 3500,
            available: true,
            image: "/images/microphone.png"
        },
        {
            name: "Desk Lamp",
            category: "Home",
            description: "LED desk lamp with adjustable brightness",
            price: 1200,
            available: true,
            image: "/images/desklamp.png"
        },
        {
            name: "Bluetooth Earbuds",
            category: "Audio",
            description: "Compact wireless earbuds with charging case",
            price: 2200,
            available: true,
            image: "/images/earbuds.png"
        },
        {
            name: "Laptop Stand",
            category: "Accessories",
            description: "Adjustable aluminum laptop stand",
            price: 1500,
            available: true,
            image: "/images/laptopstand.png"
        }
    ];

    const filteredProducts = category === "All" ? products : products.filter((product) => product.category === category);

    return(
        <>

        {filteredProducts.map((product)=>{
            return(<Productcard name={product.name}
            description={product.description}
            price={product.price}
            available={product.available}
            image={product.image}/>)
        })}
        </>
    )
}

export default Cart;