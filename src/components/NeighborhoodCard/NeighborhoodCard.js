import React from 'react';

const NeighborhoodCard = ({ obj }) => {
    const image = obj.image_card;
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="aspect-[3/4]">
                <img className="object-cover w-full h-full rounded-tl-lg rounded-tr-lg" src={image} alt="" />
            </div>

            <div className="p-2 bg-dark-blue ">
                <p className="font-semibold text-white text-center">{obj.name}</p>
                <p className="font-base text-white text-center text-xs">{obj.city}, {obj.state} {obj.zip}</p>
            </div>
        </div>
    );
};

export default NeighborhoodCard;
