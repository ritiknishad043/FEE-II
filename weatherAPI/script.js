const apiKey="76f5cf970cf95a836707abfd90bfa5fb";

const button=document.getElementById("search");

button.addEventListener("click",getWeather);

async function getWeather(){

const city=document.getElementById("city").value;

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

if(data.cod!="200"){

document.getElementById("weather").innerHTML="City not found";

return;

}

document.getElementById("weather").innerHTML=`

<h2>${data.name}</h2>

<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

<h1>${data.main.temp}°C</h1>

<p>${data.weather[0].description}</p>

<p><b>Humidity:</b> ${data.main.humidity}%</p>

<p><b>Wind:</b> ${data.wind.speed} m/s</p>

<p><b>Feels Like:</b> ${data.main.feels_like}°C</p>

`;

}

catch(error){

document.getElementById("weather").innerHTML="Something went wrong";

}

}