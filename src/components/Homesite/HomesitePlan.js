import React from 'react';

const HomesitePlan = ({ plan }) => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl pt-2">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <div className="col-span-1 bg-white dark:bg-gray-800 p-5">
                        <h2 className="text-2xl font-bold text-dark-blue dark:text-white">The {plan.name}</h2>
                        <p className="text-dark-blue dark:text-white">Download floor plan</p>
                    </div>
                    <div className="col-span-6 bg-white dark:bg-gray-800 p-5">
                        <div className="grid grid-cols-4">
                            {plan.images.map((image, index) => (
                                <div key={index} className="bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]" style={{backgroundImage: `url(${image})`}}>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomesitePlan;
