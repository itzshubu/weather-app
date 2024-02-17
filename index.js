function myFunction() {
    let a = document.getElementById("ul");
    a.classList.toggle("scale");
    let b = document.querySelectorAll(".line");
    var i = 0;
    for (i = 0; i < b.length; i++) {
      b[i].classList.toggle("line2");
    }
  }
  
  
  
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "Your rapid api key put here",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    function city(city) {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        document.getElementById("cityname").innerHTML = city;
        //   document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
        document.getElementById("feels_like").innerHTML = response.feels_like +"°";
        document.getElementById("humidity").innerHTML = response.humidity +"%";
        document.getElementById("humidity2").innerHTML = response.humidity +"%";
        document.getElementById("max_temp").innerHTML = response.max_temp+"°C";
        document.getElementById("min_temp").innerHTML = response.min_temp+"°C";
        document.getElementById("sunrise").innerHTML = response.sunrise;
        document.getElementById("sunset").innerHTML = response.sunset;
        document.getElementById("temp").innerHTML = response.temp + "°C";
        document.getElementById("temp2").innerHTML = response.temp + "°C";
        document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
        document.getElementById("wind_speed").innerHTML = response.wind_speed +" km/h";
        document.getElementById("wind_speed2").innerHTML = response.wind_speed +" km/h";
      })
      .catch((err) => console.log(err));
  }
  
  function myFunction2() {
    let a = document.getElementById("text").value;
    city(a);
  }
  city("Delhi");