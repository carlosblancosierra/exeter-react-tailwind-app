import React, { useEffect, useRef } from 'react';
import isotype from '../../images/shield.png';
import { lots } from '../../mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function NeighborhoodMap() {
    const mapRef = useRef(null);
    const script = document.createElement('script');
    const API_KEY = 'AIzaSyDz2FKb2ycgzICI19trmRpL0XDt5DmO1h8';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;

    useEffect(() => {
        // Load the Google Maps API script
        document.head.appendChild(script);

        script.onload = () => {
            // Initialize the map
            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 35.8458271, lng: -78.6505518 }, // Set the initial center of the map to Raleigh, NC
                zoom: 11, // Set the initial zoom level
            });

            // Add markers to the map
            lots.forEach((lot) => {
                let marker = new window.google.maps.Marker({
                    position: { lat: lot.lat, lng: lot.long },
                    map,
                    title: lot.address,
                    icon: {
                        url: isotype,
                        scaledSize: new window.google.maps.Size(20, 25),
                    },
                });
                marker.addListener('click', () => {
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<p class="font-bold">${lot.community}</p><p>${lot.address}</p>`,
                    });
                    infoWindow.open(map, marker);
                });
            });
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section className='dark:bg-gray-700'>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-screen-2xl mx-auto p-5 md:p-10'>
                <div className='md:pr-5'>
                    <h2 className="text-3xl font-semibold md:text-5xl text-gray-900 dark:text-white uppercase tracking-tight">
                        Design your dream home
                    </h2>
                    <p className='text-gray-900 dark:text-white text-md md:text-lg mt-5'>
                        Exeter Building Company owns premium lots in Raleigh in Wake Forest that are available for client design. Our team will help you choose a location and design your dream home.
                    </p>
                    <table className="w-full divide-y divide-gray-100 mt-5">
                        <thead>
                            <tr>
                                <th className=""></th>
                                <th className=""></th>
                                <th className=""></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lots.map((lot) => (
                                <tr key={lot.address} className='border-b' onClick={() => window.open(lot.url)}>
                                    <td className="text-xs leading-5 text-gray-500">
                                        <span className="text-sm font-semibold leading-6 text-gray-900">{lot.community}</span><br />
                                        {lot.address}
                                    </td>
                                    <td className="text-xs leading-5 text-gray-500">
                                        <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                            <FontAwesomeIcon icon={faCircle}
                                            className={`text-${lot.status.toLowerCase()} mr-1 text-xs`}
                                            width='7px'/>
                                            {lot.status}
                                        </span>
                                    </td>
                                    <td className="text-xs leading-5 text-gray-500">
                                        {lot.acres} acres
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-2 md:mt-0 col-span-2" ref={mapRef} style={{ width: '100%', height: '650px' }}></div>
            </div>
            <div className='mx-auto py-4 grid grid-cols-1 p-5'>
                <p className='text-center'>
                    <a
                        href="/"
                        className="inline-block btn btn-gold text-center mb-2 transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                    >
                        Presale Homesites
                    </a>
                </p>
            </div>
            <hr/>
        </section>
    );
}

export default NeighborhoodMap;
