// Foursquare API for venue recommendations
const clientId = "VARXCPL3G0XFN1WIUDNV3PN2OGA2BHA3XI2AQZIT0BCHVNPF";
const clientSecret = "ZTMCSXKRJ0DVH1BFUAEEHG5J4G41AM51GEYJ2KXIO1POUX4J";
const venueUrl = "https://api.foursquare.com/v2/venues/explore?near=";

// OpenWeather API for current weather
const openWeatherKey = "7fb0bf73c56f0657fb771435a4e906ec";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get venue data from Foursquare
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${venueUrl}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20210101`;

  try {
    const response = await fetch(urlToFetch);

    if (response.ok) {
      const jsonResponse = await response.json();
      const venuesArray = jsonResponse.response.groups[0].items;
      // Access 'venue' property inside 'venuesArray' JSON object
      const venues = venuesArray.map((item) => item.venue);
      return venues;
    }
  } catch (error) {
    console.log(error);
  }
};

// Get weather data from OpenWeather
const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

  try {
    const response = await fetch(urlToFetch);
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// Render venue data from Foursquare
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

// Render weather data from OpenWeather
const renderForecast = (day) => {
  let weatherContent = createWeatherHTML(day);
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach((venue) => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");

  getVenues().then((venues) => {
    return renderVenues(venues);
  });
  getForecast().then((forecast) => {
    return renderForecast(forecast);
  });
  return false;
};

$submit.click(executeSearch);
