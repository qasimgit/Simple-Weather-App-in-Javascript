window.addEventListener('load' , ()=> {
    let lon;
    let lat;

    let timeZone = document.querySelector('.timezone');
    let temperature = document.querySelector('.degree');
    let description = document.querySelector('.temperature-desrciption');

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log("Position",position)
            lon = position.coords.longitude;
            lat = position.coords.latitude;
                 const api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
                  
            fetch(api) 
            .then(res => {
                return res.json();
        })
        .then(data => {
            console.log(data);

            const thistemp = data.main.temp; 
            temperature.textContent = thistemp;

            const location = data.name;
            timeZone.textContent = location;

            const desc = data.weather;
            description.textContent = desc;
        });



        })
    };


})