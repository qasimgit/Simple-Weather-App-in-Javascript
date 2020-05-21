window.addEventListener('load' , ()=> {
    let long;
    let lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = "https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon={long}"

        })
    }
})