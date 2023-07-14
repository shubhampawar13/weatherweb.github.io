const fetchData6 = (city) => {
    
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '76ca79eb6emsh513fe130c438530p1976ccjsn50cfbca493d2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        fetch(url, options).then((response) =>{ return response.json()})
            .then((result) => {
                console.log(result);
                cloud_pct5.innerHTML = result.cloud_pct
                temp5.innerHTML = result.temp
                feels_like5.innerHTML = result.feels_like
                humidity5.innerHTML = result.humidity
                min_temp5.innerHTML = result.min_temp
                max_temp5.innerHTML = result.max_temp
                wind_speed5.innerHTML = result.wind_speed
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

                sunrise5.innerHTML = h+ ":"+m;
                sunset5.innerHTML = h2+ ":"+m2;
            })



    } catch (error) {
        console.error(error);
    }
}


fetchData6("Nashik");