import React, { useEffect, useRef } from 'react';
import isotype from '../../images/shield.png';

function HomesiteMap({homesite}) {
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
                center: { lat: homesite.lat, lng: homesite.long }, // Set the initial center of the map to Raleigh, NC
                zoom: 11, // Set the initial zoom level
            });

            // Add markers to the map
            let marker = new window.google.maps.Marker({
                position: { lat: homesite.lat, lng: homesite.long },
                map,
                title: homesite.address,
                icon: {
                    url: isotype,
                    scaledSize: new window.google.maps.Size(20, 25),
                },
            })
            marker.addListener('click', () => {
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<p class="font-bold">${homesite.community}</p><p>${homesite.address}</p>`,
                });
                infoWindow.open(map, marker);
            }
            );
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div ref={mapRef} style={{ width: '100%', height: '300px' }}></div>
    );
}

export default HomesiteMap;
