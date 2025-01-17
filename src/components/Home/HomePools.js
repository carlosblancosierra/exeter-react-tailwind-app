import React from 'react';




const HomePools = () => {
    return (
        <section className='bg-stone-300 home-about flex md:items-center'>
            <div className="
                max-w-screen-2xl sm:px-6 lg:px-8 grid grid-cols-1
                md:gap-4 md:grid-cols-9 p-3"
            >
                <div className='
                    col-span-3 col-start-7
                    md:bg-white/85 rounded flex text-center md:items-center md:min-h-[50rem] md:my-auto
                    dark:bg-gray-800/85
                '>
                    <div className="flex flex-col h-full">
                        <div className='bg-white/85 p-5 md:bg-transparent'>
                            <p className="text-2xl md:text-xl font-semibold md:text-4xl uppercase text-gray-900 dark:text-white text-center">
                             Wake County 2023
                             </p>
                            <h2 className="text-4xl md:text-6xl font-semibold md:text-4xl uppercase md:text-gray-900 dark:text-white tracking-tight">
                            Home Builder of the Year
                            </h2>
                        </div>


                        <div className='flex-grow md:hidden'></div>

                        <div className='bg-white/85 p-5 md:bg-transparent'>
                            <p className='md:text-gray-900 dark:text-white text-sm md:text-lg mt-auto md:mt-8'>
                                Whether you envision a contemporary sanctuary or a timeless haven, our team brings your dream home to life with unparalleled craftsmanship and creativity.
                            </p>

                            <a href="#" className="inline-block min-w-full md:min-w-80 bg-black text-white text-center rounded border px-12 py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-2">
                                Gallery
                            </a>
                            <a href="#" className="inline-block min-w-full md:min-w-80 bg-black text-white text-center rounded border px-12 py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-2">
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
