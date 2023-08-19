const apiKey="869c8a06615dc08b39cfa44fbe5fd194";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function cheackweather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);
       if(response.status==404){
        document.querySelector(".error").style.display="block";
       }
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity ="%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";

    if(data.weather[0].main=="clouds"){
        weatherIcon.src ="cloudy.png";
    }
    else if(data.weather[0].main =="clear"){
        weatherIcon.src="sun.png"

    }
    else if(data.weather[0].main =="rain"){
        weatherIcon.src="rain.png"

    }

    document.querySelector(".error").style.display="none";


}

searchBtn.addEventListener("click",()=>{
    cheackweather(searchBox.value);
})