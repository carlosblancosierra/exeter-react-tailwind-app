import React from 'react';
import { Link } from 'react-router-dom'; // Import the correct Link component from react-router-dom
import PlanGalleryCard from './PlanGalleryCard';
import { plans } from '../../mockData';
import Navbar from '../Navbar/Nabvar';
import { faAngleRight, faShare, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlanGallery = () => {
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
                            <a href="#" className="ms-1 text-xs md:text-sm font-medium hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Plan Gallery</a>
                        </div>
                    </li>
                </ol>
        </nav>
            <section className='dark:bg-gray-700'>
                <div className='max-w-screen-2xl mx-auto py-10 grid grid-cols-1'>
                    <h2 className="text-3xl text-center font-bold md:text-3xl text-gray-900 dark:text-white uppercase">
                            Plans
                        </h2>
                        <p className='text-center text-gray-900 dark:text-white text-md md:text-lg mt-5'>
                            Developed by the top designers in town exclusively for Exeter Building Company.
                        </p>
                    <div className='mx-auto pt-4 grid grid-cols-2 md:grid-cols-4 gap-1'>
                    {plans.map((plan, index) => (
                            <div key={index} className='md:my-0'>
                                <Link to={`/${plan}`}>
                                    <PlanGalleryCard obj={plan} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=' grid grid-cols-1'>
                    <p className='text-center'>
                        <a
                            href="/"
                            className="inline-block min-w-80 bg-black text-white text-center mb-2 rounded border px-12 py-3 text-md font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                        >
                            Design your plan
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default PlanGallery;
