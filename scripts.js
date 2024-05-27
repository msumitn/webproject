document.getElementById('tripForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Fetch data and update map
    fetchWeather(destination);
    updateMap(destination);

    alert(`Trip planned to ${destination} from ${startDate} to ${endDate}`);
});

function fetchWeather(city) {
    const apiKey = 'b2d29d8e9c17533a85231d3338fcb5e7';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            console.log('Weather data:', data);
            // Process and display weather data
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function updateMap(destination) {
    const locations = {
        bengaluru: { lat: 12.9716, lng: 77.5946 },
        delhi: { lat: 28.6139, lng: 77.2090 },
        mumbai: { lat: 19.0760, lng: 72.8777 },
        goa: { lat: 15.2993, lng: 74.1240 }
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: locations[destination]
    });

    new google.maps.Marker({
        position: locations[destination],
        map: map
    });
}

// Initialize the map with a default location
function initMap() {
    const defaultLocation = { lat: 20.5937, lng: 78.9629 }; // Center of India
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: defaultLocation
    });
}

window.initMap = initMap;

