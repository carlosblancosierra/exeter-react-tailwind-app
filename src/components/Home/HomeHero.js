import React from 'react';
import logo_grey from '../../images/logo-grey.png';

const videoSource = 'https://d3jrfnjafi7hoa.cloudfront.net/videos/2116+Ridge/2116_ridge_rd+(1080p).mp4';

const HomeHero = () => {
    return (
        <section className='bg-dark-blue dark:bg-gray-700'>
            <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3">
                    <div className="p-4 md:p-12 lg:px-12 lg:py-12 col-span-1 bg-cover bg-center bg-no-repeat rounded-xl bg-white dark:bg-gray-800 relative">
                        <div className="mx-auto max-w-xl ">
                            <h1 className="text-4xl text-center md:text-5xl text-gray-900 dark:text-white font-bold uppercase">
                                <img src={logo_grey} alt="Exeter Building Company" className="w-2/5 mx-auto mb-10 hidden md:block" />
                                Build with <span className='text-gold font-semibold'>Confidence</span>
                            </h1>
                            <hr className='mt-3 md:hidden'/>
                            <ul
                                className="mt-5 md:mt-[7rem] text-lg md:text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 text-center font-medium dark:text-white"
                            >

                            <li className="mt-3 md:mt-[1.5rem] text-gray-900 dark:text-white text-base tracking-tighter font-semibold md:text-lg">
                                Wake County 2023 Home Builder of the Year
                            </li>
                            <li className="mt-3 md:mt-[1.5rem] text-gray-900 dark:text-white text-base tracking-tighter font-semibold text-gold md:text-lg">
                                Raleigh’s Premier Custom Home Builder
                            </li>
                            <li className="mt-3 md:mt-[1.5rem] text-gray-900 dark:text-white text-base tracking-tighter font-semibold md:text-lg">
                                Specializing in Out-of-Town Buyers
                            </li>


                            </ul>

                            <div className="aspect-[3/4] md:hidden mt-4">
                                <video className="object-cover w-full h-full rounded mt-2" autoPlay loop muted>
                                    <source src={videoSource} type="video/mp4" />
                                </video>
                            </div>


                            <div className="mt-2 md:mt-[7rem] text-center relative bottom-0">

                                <p>
                                    <a
                                        href="/available"
                                        className="btn btn-gold min-w-full transition focus:ring focus:ring-cyan-900 "
                                    >
                                        Available
                                    </a>
                                </p>

                                <p className='mt-2'>
                                    <a
                                        href="/our-work"
                                        className="inline-block min-w-full text-center mb-2 rounded border px-12 py-3 text-sm font-medium transition hover:bg-zinc-200 hover:text-blue focus:outline-none focus:ring focus:ring-cyan-900 text-gray-900 dark:text-white"
                                    >
                                        Our Work
                                    </a>
                                </p>

                                <p className='font-medium text-gray-900 dark:text-white'>Jeremy Gage</p>
                                <p className='text-sm text-gray-900 dark:text-white'><a href="tel:9195929738">(919) 592-9738</a></p>
                                <p className='text-xs text-gray-900 dark:text-white'><a href="mailto:jgage@exeterbuilding.com">jgage@exeterbuilding.com</a></p>




                            </div>
                        </div>
                    </div>
                    <div className="md:flex flex-col relative hidden col-span-2">
                        <video className="object-cover w-full h-full rounded-md mt-2 px-1" controls autoPlay loop muted>
                            <source src={videoSource} type="video/mp4" />
                        </video>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default HomeHero;
