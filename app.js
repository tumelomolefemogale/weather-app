const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

//Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
    res.render("index", { weather: null, error: null});
})

app.post("/", async (req, res) => {
    const city = req.body.city;

    if (!city) {
        return res.render("index", { weather: null, error: "Please enter a city." });
    }

    try {

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
        );

        const weatherData = {
            city: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
        };

        res.render("index", { weather: weatherData, error: null})

    } catch (error) {
        res.render("index", { weather: null, error: "City not found."})
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});