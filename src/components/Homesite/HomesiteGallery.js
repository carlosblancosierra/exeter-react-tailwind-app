import React from 'react';

const HomesiteGallery = ({ homesite }) => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl pt-2">
                <div className="grid grid-cols-1 md:grid-cols-1">
                    <div className="col-span-1 bg-white dark:bg-gray-800 p-5">
                        <h2 className="text-2xl font-bold text-dark-blue dark:text-white">Gallery</h2>
                    </div>
                    <div className="col-span-6 bg-white dark:bg-gray-800 p-5">
                        <div className="grid grid-cols-6">
                            {homesite.images.map((image, index) => (
                                <div key={index} className="bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]" style={{backgroundImage: `url(${image})`}}>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomesiteGallery;
