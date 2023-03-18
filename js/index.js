import imageData from "./imgdata.js"
import { BEACH_PIC_API_KEY, WEATHER_API_KEY, WORDNIK_API_KEY } from "./apikeys.js"


const currentTime = new Date().toLocaleTimeString("en-us", {timeStyle: "short"})

// Determines whether the greeting is good morning or hello based on the time

if(currentTime.slice(-2) == "AM") {
    document.getElementById("greeting").textContent = "Good morning my love!"
} else {
    document.getElementById("greeting").textContent = "Hello my love!"
}

// Selects the image of us

function displayImg() {
    const selectImage = Math.floor(Math.random() * imageData.length)
    const imgCaption = imageData[selectImage].caption
    const imgSrc = imageData[selectImage].image
    const altText = imageData[selectImage].alt
    
    document.getElementById('our-picture').innerHTML = `
        
        <img src="${imgSrc}" />

        `
}

displayImg()

// Current Weather

fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=61032&aqi=no`)
    .then(res => res.json())
    .then(currently => document.getElementById("current-weather").innerHTML = `
    <hr>
    <p id="current-temp-label">Current Weather</p>
    <p id="current-temp">${Math.round(currently.current.temp_f)}°F</p>
    <p id="real-feel-label">Real feel</p>
    <p id="real-feel">${Math.round(currently.current.feelslike_f)}°F</p>
    <div class="container">
        <div class="container weather-details">
            <p id="humidity">Humidity: ${currently.current.humidity}%</p>
            <p id="uv-index">UV Index: ${currently.current.uv}</p>
        </div>
        <div class="container weather-details">
            <p id="wind-speed">Wind: ${Math.round(currently.current.wind_mph)} mph</p>
            <p id="wind-gusts">Gusts: ${Math.round(currently.current.gust_mph)} mph</p>
        </div>
    </div>
    `)

// Weather Forecast

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=61032&days=3&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(threeDayData => document.getElementById("weather-forecast").innerHTML = `
    <p id="forecast-label">Your 3-Day Forecast</p>
    <div class="day">
        <p>Today</p>
    </div>
    <div class="min-max-temp">
        <p>Hi: ${Math.round(threeDayData.forecast.forecastday[0].day.maxtemp_f)}°F</p>
        <p>Lo: ${Math.round(threeDayData.forecast.forecastday[0].day.mintemp_f)}°F</p>
    </div>
    <div class="uv-sunset">
        <p>UV Index: ${threeDayData.forecast.forecastday[0].day.uv}</p>
        <p>Sunset: ${threeDayData.forecast.forecastday[0].astro.sunset}</p>
    </div>
    <br>
    <div class="day">
        <p>Tomorrow</p>
    </div>
    <div class="min-max-temp">
        <p>Hi: ${Math.round(threeDayData.forecast.forecastday[1].day.maxtemp_f)}°F</p>
        <p>Lo: ${Math.round(threeDayData.forecast.forecastday[1].day.mintemp_f)}°F</p>
    </div>
    <div class="uv-sunset">
        <p>UV Index: ${threeDayData.forecast.forecastday[1].day.uv}</p>
        <p>Sunset: ${threeDayData.forecast.forecastday[1].astro.sunset}</p>
    </div>
    <br>
    <div class="day">
        <p>${threeDayData.forecast.forecastday[2].date}</p>
    </div>
    <div class="min-max-temp">
        <p>Hi: ${Math.round(threeDayData.forecast.forecastday[2].day.maxtemp_f)}°F</p>
        <p>Lo: ${Math.round(threeDayData.forecast.forecastday[2].day.mintemp_f)}°F</p>
    </div>
    <div class="uv-sunset">
        <p>UV Index: ${threeDayData.forecast.forecastday[2].day.uv}</p>
        <p>Sunset: ${threeDayData.forecast.forecastday[2].astro.sunset}</p>
    </div>
    `   
    )

// Word of the day

fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${WORDNIK_API_KEY}`)
    .then(res => res.json())
    .then(word => {
        document.getElementById("word-of-the-day").innerHTML = `
        <a id="wordnik-link" href="https://www.wordnik.com/words/${word.word}"><img id="wordnik-badge" src="/wordnik_badge_a2.png" alt="Powered by Wordnik"></a>
        <p id="word-intro">Your word of the day!</p>
        
        
         
        <p id="word">${word.word}</p>
        `
        for (let i = 0; i < word.definitions.length; i++) {
            document.getElementById("word-of-the-day").innerHTML += `
            <p>${word.definitions[i].text}</p>
            <br/>
            `
        }
    })

// Jeopardy Question  

fetch("https://jservice.io/api/random") 
    .then(res => res.json())
    .then(answer => {  

        document.getElementById("trivia").innerHTML = `
        <p id="jeopardy-dollar">$${answer[0].value}</p>
        <p class="jeopardy-category">${answer[0].category.title}</p>
        <p class="jeopardy-question">${answer[0].question}</p>`

        document.getElementById("jeopardy-answer").innerHTML = `
        <p>Answer:</p>
        <p>${answer[0].answer}</p>
        `
    })

// Dad joke

fetch("https://icanhazdadjoke.com/", {
    headers: {
        'Accept': 'application/json'
    }})
    .then(res => res.json())
    .then(joke => document.getElementById("dad-joke").innerHTML = `
    <p>${joke.joke}</p>
    `)

// Random beach photo -- YOU NEED TO ADD PHOTO CREDIT!!

fetch(`https://api.unsplash.com/photos/random/?query=beach&client_id=${BEACH_PIC_API_KEY}`)
    .then(res => res.json())
    .then(data => document.getElementById("beach-picture").innerHTML = `
    <img src="${data.urls.small}">
    `)
