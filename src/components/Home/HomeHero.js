import React from 'react';
import logo_grey from '../../images/logo-grey.png';

const includedFeatures = [
    'Wake County 2023 Home Builder of the Year',
    'Raleigh’s Premier Custom Home Builder',
    'Specializing in Out-of-Town Buyers',
]

const videoSource = 'https://d3jrfnjafi7hoa.cloudfront.net/videos/2116+Ridge/2116_ridge_rd+(1080p).mp4';

const HomeHero = () => {
    return (
        <section className='bg-dark-blue dark:bg-gray-700'>
            <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3">
                    <div className="p-4 md:p-12 lg:px-12 lg:py-12 col-span-1 bg-cover bg-center bg-no-repeat rounded-xl bg-white dark:bg-gray-800 relative">
                        <div className="mx-auto max-w-xl ">
                            <h1 className="text-5xl text-center md:text-5xl text-gray-900 dark:text-white font-semibold uppercase">
                                <img src={logo_grey} alt="Exeter Building Company" className="w-3/5 mx-auto mb-10" />
                                Build with <span className='text-gold font-semibold'>Confidence</span>
                            </h1>

                            <ul
                                className="md:mt-[7rem] text-lg md:text-base leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 text-center font-medium dark:text-white"
                            >
                                {includedFeatures.map((feature) => (
                                    <li key={feature} className="mt-4 md:mt-[1.5rem] text-gray-900 dark:text-white font-medium">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg> */}
                                        {feature}
                                    </li>
                                ))}

                            </ul>

                            <div className="aspect-video md:hidden mt-4">
                                <video className="object-cover w-full h-full rounded-md mt-2 px-1 " controls autoPlay loop muted>
                                    <source src={videoSource} type="video/mp4" />
                                </video>
                            </div>


                            <div className="mt-2 md:mt-[7rem] text-center relative bottom-0">

                                <p>
                                    <a
                                        href="/available"
                                        className="inline-block min-w-80 bg-black text-white text-center mb-2 rounded border px-12 py-3 text-sm font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                                    >
                                        Available
                                    </a>
                                </p>

                                <p>
                                    <a
                                        href="/our-work"
                                        className="inline-block min-w-80 text-center mb-2 rounded border px-12 py-3 text-sm font-medium transition hover:bg-zinc-200 hover:text-blue focus:outline-none focus:ring focus:ring-cyan-900 text-gray-900 dark:text-white"
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
