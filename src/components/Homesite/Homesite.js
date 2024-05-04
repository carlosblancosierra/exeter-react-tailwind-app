import React, { useState } from 'react';
import pic from '../../images/home/3513-2.jpg';
import { homesites, plans } from '../../mockData';
import { useParams } from 'react-router-dom';
import Nabvar from '../Navbar/Nabvar';
import HomesiteHeroIcons from './HomesiteHeroIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faShare, faPhone } from '@fortawesome/free-solid-svg-icons';
import HomesitePlan from './HomesitePlan';
import HomesiteMap from './HomesiteMap';
import HomesiteRelatedHomes from './HomesiteRelatedHomes';
import HomesiteGallery from './HomesiteGallery';


const Homesite = () => {
    const { community_slug, homesite_slug } = useParams();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const openGallery = () => {
        setIsGalleryOpen(true);
    };

    // Filter homesites based on the provided community_slug and homesite_slug
    const selectedHomesite = homesites.find(
        (homesite) =>
            homesite.community_slug === community_slug &&
            homesite.slug === homesite_slug
    );

    const plan = plans.find((plan) => plan.name === selectedHomesite.plan);
    const images = selectedHomesite.images;

    if (!selectedHomesite) {
        return <div>Homesite not found</div>;
    }

    console.log(selectedHomesite);
    return (
        <div className='pb-5'>
            <Nabvar />

            <section className='bg-dark-blue dark:bg-gray-700'>
                <nav className="flex px-5 pt-2 text-gray-100 bg-dark-blue dark:bg-gray-700 " aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/" className="inline-flex items-center text-xs md:text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faAngleRight} className='dark:text-white' />
                            <a href="#" className="ms-1 text-xs md:text-sm font-medium hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{selectedHomesite.community}</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faAngleRight} className='dark:text-white' />
                            <span className="ms-1 text-xs md:text-sm font-medium md:ms-2 dark:text-gray-400">{selectedHomesite.address}</span>
                        </div>
                    </li>
                </ol>
                </nav>

                <div className="mx-auto pt-2 ">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="col-span-1 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]"
                        style={{backgroundImage: `url(${selectedHomesite.main_image_url})`}}
                        onClick={openGallery}
                        >
                            <div className="absolute bottom-6 left-4">
                                <a href="#" className="rounded-md bg-white p-3 mr-2">
                                    <FontAwesomeIcon icon={faPhone} className='mr-2'/>
                                    Contact us
                                </a>
                                <a href="#" className="rounded-md bg-white p-3">
                                    <FontAwesomeIcon icon={faShare} className='mr-2'/>
                                    Share
                                </a>
                            </div>

                        </div>
                        <div className="col-span-1 bg-cover bg-center bg-no-repeat rounded-xl dark:bg-gray-800 relative grid">
                            <div className="grid grid-cols-2 md:grid-cols-2">
                                <div className="col-span-1 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]"
                                        style={{backgroundImage: `url(${selectedHomesite.images[0]})`}}
                                         onClick={openGallery}
                                        >
                                </div>
                                <div className="col-span-1 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]"
                                        style={{backgroundImage: `url(${selectedHomesite.images[1]})`}}
                                        onClick={openGallery}

                                >

                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-2">
                                <div className="col-span-1 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]"
                                style={{backgroundImage: `url(${selectedHomesite.images[2]})`}}
                                onClick={openGallery}
                                >
                                </div>
                                <div className="col-span-1 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative aspect-[4/3]"
                                style={{backgroundImage: `url(${selectedHomesite.images[3]})`}}
                                onClick={openGallery}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-2xl pt-2 ">
                    <div className="grid grid-cols-1 md:gap-1 md:grid-cols-3 p-5 dark:bg-gray-800">
                        <div className="col-span-2 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative bg-white md:p-5">
                            <p className="font-semibold text-gray-700 dark:text-gray-400 uppercase">{selectedHomesite.community}</p>
                            <h1 className="text-3xl font-bold tracking-tight text-dark-blue dark:text-white mt-2">{selectedHomesite.address}</h1>
                            <p className="my-2 dark:text-white" >{selectedHomesite.city}, {selectedHomesite.state}, {selectedHomesite.zip}</p>
                            <HomesiteHeroIcons selectedHomesite={selectedHomesite} className="pt-5"/>
                            <p className="mt-5 dark:text-white">{selectedHomesite.description}</p>
                            <HomesiteMap homesite={selectedHomesite} />
                        </div>
                        <div className="col-span-1 bg-cover bg-center bg-no-repeat dark:bg-gray-800 relative">
                            <div className="mt-5 md:mt-2">
                                <section className="block bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:mx-10 lg:my-2">
                                    <div className="pb-4 lg:pb-4 px-4 mx-auto card">
                                        <p className="my-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Request Information</p>
                                        <p className="my-4 text-sm font-normal text-gray-700 dark:text-gray-400">Fill out the form below to request more information about this property.</p>

                                        <form action="#">
                                            <div className='grid grid-cols-1 gap-2'>
                                                <div className='col-span-1'>
                                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                                                    <input type="text" id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                                                    <input type="text" id="last_name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                                                </div>
                                            </div>

                                            <div className='grid grid-cols-1 gap-2'>
                                                <div className='col-span-1'>
                                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                    <input type="text" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                                                </div>
                                                <div className='col-span-1'>
                                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                                                    <input type="text" id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                                                </div>
                                            </div>

                                            <div className='col-span-1 mt-2'>
                                                <div className="space-y-2">
                                                    <div className="flex items-center">
                                                        <input type="checkbox" id="property_updates" className="form-checkbox h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded" checked />
                                                        <label htmlFor="property_updates" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Sign up for Property Updates</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='grid grid-cols-1 gap-2'>
                                                <div className='col-span-1'>
                                                    <button type="submit" className="button w-full bg-dark-blue text-white rounded-lg p-3 mt-4 hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:ring-primary-500 dark:text-white dark:border-gray-600">
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <HomesiteGallery imgs={images} isGalleryOpen={isGalleryOpen} setIsGalleryOpen={setIsGalleryOpen} />
            <HomesitePlan plan={plan} />
            <HomesiteRelatedHomes homesites={homesites} />

        </div>
    )
};

export default Homesite;
