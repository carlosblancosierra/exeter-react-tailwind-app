import React from 'react';
import { Link } from 'react-router-dom';
import NeighborhoodCard from '../NeighborhoodCard/NeighborhoodCard';
import { communities } from '../../mockData';
import SwipeCarousel from '../SwipeCarousel/SwipeCarousel';

const HomeCommunities = () => {

    return (
        <section className='dark:bg-gray-700 max-w-screen-2xl mx-auto'>
            <div className='pt-10 grid grid-cols-1'>
                <h2 className="text-3xl text-center font-bold md:text-3xl text-gray-900 dark:text-white uppercase">
                        Communities
                </h2>
                <p className='text-center text-gray-900 dark:text-white text-md md:text-lg mt-5'>
                    We have a variety of homesites available in the Raleigh area. Under Construction, Move-In Ready, and Custom Homesites available.
                </p>
            </div>

            <div className='py-4 grid grid-cols-1 md:grid-cols-4 gap-1 overflow-x-auto hidden md:grid'>
                {communities.slice(0,4).map((community, index) => (
                    <div key={index} className='mb-2 md:my-0'>
                        <Link to={`/${community}`}>
                            <NeighborhoodCard obj={community} />
                        </Link>
                    </div>
                ))}

            </div>
            <div className='md:hidden'>
                <SwipeCarousel objs={communities} template={NeighborhoodCard} />
            </div>
            <div className='py-4 grid grid-cols-1'>
                <p className='text-center mt-2'>
                    <a
                        href="/"
                        className="inline-block btn bg-dark-blue text-white text-center mb-2 rounded border px-12 py-3 text-md font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                    >
                        All Communities
                    </a>
                </p>
            </div>
        </section>
    );
};

export default HomeCommunities;
