import React from 'react';
import { Link } from 'react-router-dom';
import HomesiteCard from '../HomesiteCard/HomesiteCard';
import homesites from '../../mockData';
import SwipeCarousel from '../SwipeCarousel/SwipeCarousel';

const HomeFeatured = () => {
    return (
        <section className='dark:bg-gray-700'>
            <div className='max-w-screen-2xl mx-auto pt-10'>
                <h2 className="text-3xl text-center font-bold md:text-3xl text-gray-900 dark:text-white uppercase">
                    Exeter Crafted Homes
                </h2>
                <p className='text-center text-gray-900 dark:text-white text-md md:text-lg mt-5'>
                    We have a variety of homesites available in the Raleigh area. Under Construction, Move-In Ready, and Custom Homesites available.
                </p>
                <div className='mx-auto px-4 py-4 sm:px-6 lg:px-8 grid grid-cols-1 hidden md:grid md:grid-cols-4 gap-1 '>
                    {homesites.map((homesite, index) => (
                        <div key={index} className='mb-2 md:my-0'>
                            <Link to={`/${homesite.community_slug}/${homesite.slug}`}>
                                <HomesiteCard obj={homesite} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:hidden'>
                <SwipeCarousel objs={homesites} template={HomesiteCard}/>
            </div>
            <div className='mx-auto py-2'>
                <p className='text-center mt-1'>
                    <a
                        href="/"
                        className="inline-block btn bg-dark-blue text-white mb-2 transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                    >
                        Available Homesites
                    </a>
                </p>
            </div>
        </section>
    );
};

export default HomeFeatured;
