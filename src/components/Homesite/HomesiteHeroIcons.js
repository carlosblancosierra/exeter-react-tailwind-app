import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faBed, faBath, faHouse } from '@fortawesome/free-solid-svg-icons';

const HomesiteHeroIcons = ({ selectedHomesite }) => {
    return (
        <div>
            <div className="md:flex overflow-x-auto text-dark-blue dark:text-white">
                <div className="md:flex items-center">
                    <FontAwesomeIcon icon={faHouse} className="mr-2" />
                    <span className="font-bold mr-2">{selectedHomesite.sqft}</span> sqft
                    <span className='mx-2 hidden md:inline'>·</span>
                </div>
                <div className="md:flex items-center">
                    <FontAwesomeIcon icon={faBed} className="mr-2" />
                    <span className="font-bold mr-2">{selectedHomesite.beds}</span> Beds
                    <span className='mx-2 hidden md:inline'>·</span>
                </div>
                <div className="md:flex items-center">
                    <FontAwesomeIcon icon={faBath} className="mr-2" />
                    <span className="font-bold mr-2">{selectedHomesite.baths}/{selectedHomesite.half_baths}</span> Baths
                    <span className='mx-2 hidden md:inline'>·</span>
                </div>
                <div className="md:flex items-center">
                    <FontAwesomeIcon icon={faExpand} className="mr-2" />
                    <span className="font-bold mr-2">{selectedHomesite.acres}</span> acres
                </div>
            </div>
        </div>

    );
};

export default HomesiteHeroIcons;
