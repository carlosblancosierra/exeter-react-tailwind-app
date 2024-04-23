import React from 'react';

const HomesiteCard = ({ obj }) => {
    const image = obj.image_card || obj.main_image_url;
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="aspect-video">
                <img className="object-cover w-full h-full rounded-tl-lg rounded-tr-lg" src={image} alt="" />
            </div>

            <div className="p-2 bg-dark-blue text-center">
                <h5 className="font-semibold tracking-tight text-white">{obj?.address}</h5>
                <p className="text-xs text-gray-200 text-center uppercase tracking-wide">{obj?.community}</p>
                <p className='text-xs text-gray-300 mt-1'>
                    <span className='font-bold'>{obj.beds}</span> bed

                    {obj?.half_baths > 0 ? (
                        <span>
                            <span className='font-bold'>{' ' + obj.baths}/{obj?.half_baths}</span> baths
                        </span>
                    ) :
                        (
                            <span>
                                <span className='font-bold'>{' ' + obj.baths}</span> bath
                            </span>
                        )
                    }
                    {obj?.sqft > 0 && (
                        <span>
                            <span className='font-bold'> {obj?.sqft}</span> sqft
                        </span>
                    )}

                </p>
            </div>
        </div>
    );
};

export default HomesiteCard;
