mapboxgl.accessToken =token;
    const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: listing.geometry.coordinates, // starting position [lng, lat]
	zoom: 9, // starting zoom
});

// Set marker options.
const marker = new mapboxgl.Marker({
    color: 'red',
    draggable: true
}).setLngLat(listing.geometry.coordinates)
.setPopup(new mapboxgl.Popup().setHTML("<p>Exact Location After Booking</p>")) 
    .addTo(map);