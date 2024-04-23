"use client"
import { useState } from "react";

const items = [
    {
        id: 1,
        name: "Burger",
        description: "A delicious burger with all the fixings.",
        price: 3.89,
        image: "images/burger.png",
    },
    {
        id: 2,
        name: "Pizza",
        description: "Classic pizza with your choice of toppings.",
        price: 9.99,
        image: "images/cart.svg",
    },
    {
        id: 3,
        name: "Salad",
        description: "Fresh salad with mixed greens and dressing.",
        price: 5.99,
        image: "images/lasagna.png",
    },
    // Add more items here...
    {
        id: 20,
        name: "Drink",
        description: "Refreshing drink to quench your thirst.",
        price: 1.99,
        image: "vercel.svg",
    },
    {
        id: 1,
        name: "Burger",
        description: "A delicious burger with all the fixings.",
        price: 3.89,
        image: "images/burger.png",
    },

    {
        id: 2,
        name: "Pizza",
        description: "Classic pizza with your choice of toppings.",
        price: 9.99,
        image: "images/cart.svg",
    },
    {
        id: 3,
        name: "Salad",
        description: "Fresh salad with mixed greens and dressing.",
        price: 5.99,
        image: "images/lasagna.png",
    },
    // Add more items here...
    {
        id: 20,
        name: "Drink",
        description: "Refreshing drink to quench your thirst.",
        price: 1.99,
        image: "vercel.svg",
    },
    {
        id: 1,
        name: "Burger",
        description: "A delicious burger with all the fixings.",
        price: 3.89,
        image: "images/burger.png",
    },
    {
        id: 2,
        name: "Pizza",
        description: "Classic pizza with your choice of toppings.",
        price: 9.99,
        image: "images/cart.svg",
    },
    {
        id: 3,
        name: "Salad",
        description: "Fresh salad with mixed greens and dressing.",
        price: 5.99,
        image: "images/lasagna.png",
    },
    // Add more items here...

];

const Carousel = () => {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? items.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === items.length - 1 ? 0 : curr + 1));

    const goToSlide = (index: number) => setCurr(index);

    return (
        <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
        >
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`duration-700 ease-in-out ${curr === index ? "block" : "hidden"
                            }`}
                        data-carousel-item
                    >
                        <div className="flex flex-wrap justify-center">
                            {items.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`duration-700 ease-in-out ${index >= curr && index < curr + 3 ? "block" : "hidden"
                                        }`}
                                    style={{ width: "calc(100% / 3)" }}
                                    data-carousel-item
                                >
                                    <div className="flex justify-between p-4">
                                        <Productdetail
                                            key={item.id}
                                            name={item.name}
                                            description={item.description}
                                            price={item.price}
                                            image={item.image}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {items.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${curr === index ? "bg-white" : "bg-gray-300"
                            }`}
                        aria-current={curr === index ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute  top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 dark:bg-gray-800/30 group-hover:bg-green-800 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={next}
                style={{ color: "#ffffff" }} // Change color here
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 dark:bg-gray-800/30 group-hover:bg-green-800 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

        </div>
    );
};

interface ProductDetailProps {
    name: string;
    description: string;
    price: number;
    image: string;
}

const Productdetail = ({ name, description, price, image }: ProductDetailProps) => {
    return (
        <div className="bg-white border border-white shadow-xl p-4 m-2 rounded-lg mt-5 w-64 h-96 flex flex-col justify-center items-center">
            <img src={image} alt={name} className="h-20 w-20 object-center object-cover" />
            <div className="text-center p-5">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="text-lg">{description}</p>
                <p className="text-green-500 text-xl">${price}</p>
            </div>
        </div>
    );
};




export default Carousel;
