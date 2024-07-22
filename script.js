function myFunction() {
  let a = document.getElementById("ul");
  a.classList.toggle("scale");
  let b = document.querySelectorAll(".line");
  var i = 0;
  for (i = 0; i < b.length; i++) {
    b[i].classList.toggle("line2");
  }
}



  const API_Key = `${keys.apikey}`
  function city(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      document.getElementById("cityname").innerHTML = city;
      document.getElementById("temp").innerHTML = response.main.temp + "°C";
      document.getElementById("feels_like").innerHTML = response.main.feels_like + "°C";
      document.getElementById("min_temp").innerHTML = response.main.temp_min+"°C";
      document.getElementById("max_temp").innerHTML = response.main.temp_max+"°C";
      document.getElementById("humidity").innerHTML = response.main.humidity +"%";
      document.getElementById("visibility").innerHTML = response.visibility+"m";
      document.getElementById("weather").innerHTML = response.weather[0].main;
      document.getElementById("description").innerHTML = response.weather[0].description;
      document.getElementById("wind_speed").innerHTML = response.wind.speed +" km/h";
      document.getElementById("wind_degrees").innerHTML = response.wind.deg;
    })
    .catch((err) => console.log(err));
}

function myFunction2() {
  let a = document.getElementById("text").value;
  if(a!="")city(a);
}
city("Delhi");

document.getElementById("text").addEventListener("keypress", function(event) {
  // Check if the key pressed is the Enter key (key code 13)
  if (event.key === "Enter") {
      event.preventDefault();
      // Run your code here
      myFunction2()
  }
});
