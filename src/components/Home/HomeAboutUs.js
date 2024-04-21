import React from 'react';




const HomeAboutUs = () => {
    return (
        <section className='bg-stone-300 home-about flex items-center bg-fixed'>
            <div className="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8 grid grid-cols-1 md:gap-4 md:grid-cols-3">
                <div className='col-span-1 col-start-3 md:min-h-[50rem] bg-white/85
                dark:bg-gray-800/85
                p-5 rounded flex items-center text-center'>
                    <div>
                        <h2 className="text-2xl md:text-6xl font-semibold md:text-4xl uppercase text-gray-900 dark:text-white">
                        Exeter Building Company
                    </h2>

                    <p className='text-gray-900 dark:text-white text-md md:text-lg mt-8'>
                        Founded by three longtime friends who love Raleigh, are passionate about home building and wanted to create homes where people could build memories.
                    </p>

                    <a href="/" className="inline-block min-w-80 bg-black text-white text-centerrounded border py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-10">
                        About Us
                    </a>

                    <a href="/" className="inline-block min-w-80 bg-black text-white text-center rounded border py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 mt-2">
                        Exeter Gives Back
                    </a>
                    </div>

                </div>
            </div>
        </section>
    );
};


export default HomeAboutUs;
