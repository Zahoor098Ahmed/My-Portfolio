// const apiKey = "e3a068f45ff319e171a4952e6772b7cf";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
//     if (response.status == 404) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".weather").style.display = "none";
//     } else {
//         var data = await response.json();

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

//         if (data.weather[0].main === "Clouds") {
//             weatherIcon.src = "https://nashvillegeek.com/wp-content/uploads/2016/05/cloud.jpg";
//         } else if (data.weather[0].main === "Clear") {
//             weatherIcon.src = "https://t4.ftcdn.net/jpg/03/20/79/15/360_F_320791512_NaGL6O9TgvPf8VGTATl99NS8CiED05hE.jpg";
//         } else if (data.weather[0].main === "Rain") {
//             weatherIcon.src = "https://cdn2.vectorstock.com/i/1000x1000/15/91/heavy-rain-icon-in-cartoon-style-vector-9581591.jpg";
//         } else if (data.weather[0].main === "Drizzle") {
//             weatherIcon.src = "https://cdn-icons-png.freepik.com/512/4837/4837689.png";
//         } else if (data.weather[0].main === "Mist") {
//             weatherIcon.src = "https://cdn.pixabay.com/photo/2022/02/19/22/48/forest-7023487_640.jpg";
//         }

//         document.querySelector(".weather").style.display = "block";
//         document.querySelector(".error").style.display = "none";
//     }
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });


const apiKey = "e3a068f45ff319e171a4952e6772b7cf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Use locally stored images
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/cloud.jpg"; // Local image
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "MY-PORTFOLIO./images/clear.jpg"; // Local image
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "MY-PORTFOLIO./images/rain.jpg"; // Local image
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "MY-PORTFOLIO./images/drizzle.jpg"; // Local image
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "MY-PORTFOLIO./images/mist.jpg"; // Local image
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});