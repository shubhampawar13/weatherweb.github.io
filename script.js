function getlocation(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let log = position.coords.longitude;
    console.log(lat, log);//lat and longi generated

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${lat}&lon=${log}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '76ca79eb6emsh513fe130c438530p1976ccjsn50cfbca493d2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    async function fetchData2() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            cloud_pct.innerHTML = result.cloud_pct
            temp.innerHTML = result.temp
            feels_like.innerHTML = result.feels_like
            humidity.innerHTML = result.humidity
            min_temp.innerHTML = result.min_temp
            max_temp.innerHTML = result.max_temp
            wind_speed.innerHTML = result.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            const timestamp = result.sunrise;
            const date = new Date(timestamp * 1000);
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            const timestamp2 = result.sunset;
            const date2 = new Date(timestamp2 * 1000);
            let h2 = date2.getHours();
            let m2 = date2.getMinutes();
            let s2 = date2.getSeconds();

            sunrise.innerHTML = h + ":" + m + ":" + s;
            sunset.innerHTML = h2 + ":" + m2 + ":" + s2;
        } catch (error) {
            
            console.error(error);
        }
    }

    fetchData2();
}

function failedToget() {
    fetchData("Delhi");
    console.log("user not given a permission..")
}


const results = navigator.geolocation.getCurrentPosition(getlocation, failedToget);//lat nad ;ongi generator 


const fetchData = (city) => {
    if(city==""){
        city= "Yeola";
    }
    const str = city;
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    

    CityName.innerHTML= capitalizedStr;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '76ca79eb6emsh513fe130c438530p1976ccjsn50cfbca493d2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        fetch(url, options).then(response => response.json())
            .then((result) => {
                // console.log(result);
                cloud_pct.innerHTML = result.cloud_pct
                temp.innerHTML = result.temp
                feels_like.innerHTML = result.feels_like
                humidity.innerHTML = result.humidity
                min_temp.innerHTML = result.min_temp
                max_temp.innerHTML = result.max_temp
                wind_speed.innerHTML = result.wind_speed
                // wind_degrees.innerHTML = response.wind_degrees
                const timestamp = result.sunrise;
                const date = new Date(timestamp * 1000);
                let h = date.getHours();
                let m = date.getMinutes();
                let s= date.getSeconds();

                const timestamp2 = result.sunset;
                const date2 = new Date(timestamp2 * 1000);
                let h2 = date2.getHours();
                let m2 = date2.getMinutes();
                let s2= date2.getSeconds();

                sunrise.innerHTML = h+ ":"+m+":"+s;
                sunset.innerHTML = h2+ ":"+m2+":"+s2;
            })



    } catch (error) {
        console.error(error);
    }
}

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  fetchData(City.value);
});




