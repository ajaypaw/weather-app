const apiKey = "f382f5d1ff7722271c115cce8d67d16f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed +" Km/h" ;

    if (data.weather[0].main == "Clouds"){
       weatherIcon.src ="image/cloudy.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="image/sun(1).png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="image/rain.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="image/mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="image/drizzle.png";
    }
    searchBox.value ='';
}


searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
