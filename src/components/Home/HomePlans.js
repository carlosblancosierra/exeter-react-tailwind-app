import React from 'react';
import { Link } from 'react-router-dom';
import PlanCard from '../PlanCard/PlanCard.js';
import { plans } from '../../mockData';

const HomePlans = () => {

    return (
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
                                <PlanCard obj={plan} />
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
                        Plan Library
                    </a>
                </p>
            </div>
        </section>
    );
};

export default HomePlans;
