import React from 'react';
import { Link } from 'react-router-dom';
import homesites from '../../mockData';
import Navbar from '../Navbar/Nabvar';
import { faAngleRight, faShare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvailableHomesiteCard from './AvailableHomesiteCard';

const Available = () => {
    return (
        <>
        <Navbar />
        <nav className="flex px-5 py-2 text-gray-100 bg-dark-blue dark:bg-gray-700 " aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-xs md:text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faAngleRight} className='dark:text-white' />
                            <a href="#" className="ms-1 text-xs md:text-sm font-medium hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Available</a>
                        </div>
                    </li>
                </ol>
        </nav>

        <section className='dark:bg-gray-700'>
            <div className='max-w-screen-2xl mx-auto py-10 grid grid-cols-1'>
                <h1 className="text-3xl text-center font-bold md:text-3xl text-gray-900 dark:text-white uppercase">
                    Exeter Crafted Homes
                </h1>
                <p className='text-center text-gray-900 dark:text-white text-md md:text-lg mt-5'>
                    We have a variety of homesites available in the Raleigh area. Under Construction, Move-In Ready, and Custom Homesites available.
                </p>
                <div className='mx-auto px-4 py-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-1'>
                    {homesites.map((homesite, index) => (
                        <div key={index} className='mb-2 md:my-0'>
                            <Link to={`/${homesite.community_slug}/${homesite.slug}`}>
                                <AvailableHomesiteCard obj={homesite} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
        </>
    );
};

export default Available;
