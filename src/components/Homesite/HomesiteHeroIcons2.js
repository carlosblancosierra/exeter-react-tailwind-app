import React from 'react';

const HomesiteHeroIcons2 = ({ selectedHomesite }) => {
    const { acres, beds, baths, half_baths, sqft } = selectedHomesite;
    const valuesToRender = [acres, beds, baths, half_baths, sqft].filter(value => value !== null);

    return (
        <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {valuesToRender.map((value) => (
                <li
                    className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"
                    key={value}
                >
                    {value}
                </li>
            ))}
        </ul>
    );
};


export default HomesiteHeroIcons2;
