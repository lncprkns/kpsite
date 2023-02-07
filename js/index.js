import imageData from "./imgdata.js"
import {BEACH_PIC_API_KEY, WEATHER_API_KEY } from "./apikeys.js"

let jeopardyQuestion


function displayImg() {
    const selectImage = Math.floor(Math.random() * imageData.length)
    const imgCaption = imageData[selectImage].caption
    const imgSrc = imageData[selectImage].image
    const altText = imageData[selectImage].alt
    
    document.getElementById('our-picture').innerHTML = `
        
        <img src="${imgSrc}" alt="${altText}">
        <div id="caption-container">
        <caption>We ${imgCaption}</caption>
        </div>
        `
}

displayImg()

fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=61032&aqi=no`)
    .then(res => res.json())
    .then(currently => document.getElementById("current-weather").innerHTML = `
    <p id="current-temp">Currently: ${Math.round(currently.current.temp_f)}°F</p>
    <p id="real-feel">Real feel: ${Math.round(currently.current.feelslike_f)}°F</p>
    <p id="humidity">Humidity: ${currently.current.humidity}%</p>
    <p id="uv-index">UV Index: ${currently.current.uv}</p>
    <p id="wind-speed">Wind: ${Math.round(currently.current.wind_mph)} mph</p>
    <p id="wind-gusts">Gusts: ${Math.round(currently.current.gust_mph)} mph</p>
    `)

fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=61032&days=3&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(threeDayData => document.getElementById("weather-forecast").innerHTML = `
    <p>Today:</p>
    <p>Hi: ${Math.round(threeDayData.forecast.forecastday[0].day.maxtemp_f)}°F</p>
    <p>Lo: ${Math.round(threeDayData.forecast.forecastday[0].day.mintemp_f)}°F</p>
    <p>UV Index: ${threeDayData.forecast.forecastday[0].day.uv}</p>
    <br>
    <p>Tomorrow:</p>
    <p>Hi: ${Math.round(threeDayData.forecast.forecastday[1].day.maxtemp_f)}°F</p>
    <p>Lo: ${Math.round(threeDayData.forecast.forecastday[1].day.mintemp_f)}°F</p>
    <p>UV Index: ${threeDayData.forecast.forecastday[1].day.uv}</p>
    <br>
    <p>The day after:</p>
    <p>Hi: ${Math.round(threeDayData.forecast.forecastday[2].day.maxtemp_f)}°F</p>
    <p>Lo: ${Math.round(threeDayData.forecast.forecastday[2].day.mintemp_f)}°F</p>
    <p>UV Index: ${threeDayData.forecast.forecastday[2].day.uv}</p>
    `)

fetch("https://jservice.io/api/random")
    .then(res => res.json())
    .then(answer => {  

        document.getElementById("trivia").innerHTML = `
        <p>Difficulty: $${answer[0].value}</p>
        <br>
        <p>Category: ${answer[0].category.title}</p>
        <br>
        <p>Question: ${answer[0].question}</p>`

        document.getElementById("jeopardy-answer").innerHTML = `
        <p id="answer">The answer is: ${answer[0].answer}</p>
        `
    })

fetch("https://icanhazdadjoke.com/", {
    headers: {
        'Accept': 'application/json'
    }})
    .then(res => res.json())
    .then(joke => document.getElementById("dad-joke").innerHTML = `
    <p>${joke.joke}</p>
    `)

fetch(`https://api.unsplash.com/photos/random/?query=beach&client_id=${BEACH_PIC_API_KEY}`)
    .then(res => res.json())
    .then(data => document.getElementById("beach-picture").innerHTML = `
    <img src="${data.urls.small}">
    `)