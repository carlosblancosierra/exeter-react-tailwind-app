import React from 'react';




const HomePools = () => {
    return (
        <section className='bg-stone-300 home-pools flex items-center bg-fixed'>
            <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8 grid grid-cols-1 md:gap-4 md:grid-cols-3">
                <div className='col-span-1 col-start-3 md:min-h-[50rem] bg-white/85 p-5 rounded flex items-center dark:bg-gray-800/85'>
                    <div>
                        <p className="text-2xl md:text-xl font-semibold md:text-4xl uppercase text-gray-900 dark:text-white text-center">
                            Wake County 2023
                            </p>
                        <h2 className="text-2xl md:text-5xl font-semibold md:text-4xl uppercase text-gray-900 dark:text-white text-center">
                        Home Builder of the Year
                        </h2>

                        <p className='text-gray-900 dark:text-white text-base mt-5 text-justify px-8'>
                            We specialize in crafting indoor and outdoor living spaces that seamlessly merge modern aesthetics with classical charm.
                            </p>


                        <p className='text-gray-900 dark:text-white text-base mt-5 text-justify px-8'>
                            Whether you envision a contemporary sanctuary or a timeless haven, our team brings your dream home to life with unparalleled craftsmanship and creativity.
                        </p>
                        <div className='text-center mt-5'>
                            <a href="#" className="inline-block min-w-80 bg-black text-white text-center rounded border px-12 py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-2">
                                Gallery
                            </a>
                            <a href="#" className="inline-block min-w-80 bg-black text-white text-center rounded border px-12 py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-2">
                                Pools
                            </a>
                            <a href="#" className="inline-block min-w-80 bg-black text-white text-center rounded border px-12 py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-2">
                                Signature Homes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default HomePools;
