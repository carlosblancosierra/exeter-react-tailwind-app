import React, { useEffect, useRef } from 'react';
import isotype from '../../images/shield.png';
import { communities, lots } from '../../mockData';

function NeighborhoodMap() {
    const mapRef = useRef(null);
     const script = document.createElement('script');
    const API_KEY = 'AIzaSyDz2FKb2ycgzICI19trmRpL0XDt5DmO1h8'
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
                })
                marker.addListener('click', () => {
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<p class="font-bold">${lot.community}</p><p>${lot.address}</p>`,
                    });
                    infoWindow.open(map, marker);
                }
                );
            });

        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section className='dark:bg-gray-700'>
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl mx-auto p-5 md:p-10'>
            <div className='pr-5'>
             <h2 className="text-3xl font-semibold md:text-5xl text-gray-900 dark:text-white uppercase">
                Design your dream home
            </h2>
            <p className='text-gray-900 dark:text-white text-md md:text-lg mt-5'>
                Exeter Building Company owns premiun lots in Raleigh in Wake Forest that are available for client design, our team will help you choose a location and design your dream home
            </p>
            <ul className="divide-y divide-gray-100 mt-5">
                {lots.map((lot) => (
                <li key={lot.address}>
                    <div className="flex min-w-0 gap-x-4">
                        {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{lot.address}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{lot.community}</p>
                        </div>
                    </div>
                    {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                    </div> */}
                </li>
            ))}
        </ul>
        <p className='mt-2'>
                    <a
                        href="/"
                        className="inline-block min-w-80 bg-black text-white text-center mb-2 rounded border px-12 py-3 text-md font-medium transition hover:bg-gray-800 focus:outline-none focus:ring focus:ring-cyan-900 "
                    >
                        Available for Presale
                    </a>
                </p>
            </div>
            <div ref={mapRef} style={{ width: '100%', height: '650px' }}></div>
            </div>
        </section>
    );
}

export default NeighborhoodMap;
