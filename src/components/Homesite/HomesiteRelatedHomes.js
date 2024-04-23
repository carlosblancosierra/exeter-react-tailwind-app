import React from 'react';
import { Link } from 'react-router-dom';
import HomesiteRelatedCard from './HomesiteRelatedCard';

const HomesiteRelatedHomes = ({homesites}) => {
    return (
        <section className='dark:bg-gray-700'>
            <div className='max-w-screen-2xl mx-auto py-10 grid grid-cols-1'>
                <h2 className="text-3xl text-center font-bold md:text-3xl text-gray-900 dark:text-white uppercase">
                    Other Homesites
                </h2>
                <div className='mx-auto px-4 py-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-1'>
                    {homesites.map((homesite, index) => (
                        <div key={index} className='mb-2 md:my-0'>
                            <Link to={`/${homesite.community_slug}/${homesite.slug}`}>
                                <HomesiteRelatedCard obj={homesite} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
            <div className='mx-auto py-4 grid grid-cols-1'>
                <p className='text-center mt-2'>
                    <a
                        href="/"
                        className="inline-block min-w-80 bg-black text-white text-center mb-2 rounded border px-12 py-3 text-md font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                    >
                        All Available Homesites
                    </a>
                </p>
            </div>
        </section>
    );
};

export default HomesiteRelatedHomes;
