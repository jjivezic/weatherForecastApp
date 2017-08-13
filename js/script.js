// Show temperature in 10 big cityies
function getWeatherOf10cityies(city) {

    var method = 'GET';
    var request = new XMLHttpRequest();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b2ed80cc211d2fe0dc7c2bf64493b7c9';
    //  console.log('url', url);
    var async = true;
    request.open(method, url, async);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var resp = request.responseText;
            var data = JSON.parse(request.responseText);
            var name = data.name;
            var state = data.sys.country;
            var kelvin = 273.15;
            var mainTempToCelsius = data.main.temp - kelvin;
            var mainTemp = mainTempToCelsius.toFixed(2);
            var mainTempMinToCelsius = data.main.temp_min - kelvin + '&#8451;';
            var mainTempMin = mainTempToCelsius.toFixed(2);
            var mainTempMaxToCelsius = data.main.temp_max - kelvin + '&#8451;';
            var mainTempMax = mainTempToCelsius.toFixed(2);
            var main = data.weather[0].main;
            var description = data.weather[0].description;
            // console.log(data);

            var london = document.querySelector('.london');
            var belgrade = document.querySelector('.belgrade');
            var paris = document.querySelector('.paris');
            var rome = document.querySelector('.rome');
            var hongKong = document.querySelector('.hongKong');
            var istanbul = document.querySelector('.istanbul');
            var madrid = document.querySelector('.madrid');
            var newYork = document.querySelector('.newYork');
            var mexico = document.querySelector('.mexico');
            var sydney = document.querySelector('.sydney');


            if (name == 'London') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                london.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                london.appendChild(img);
                london.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                london.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Belgrade') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                belgrade.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                belgrade.appendChild(img);
                belgrade.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                belgrade.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Paris') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                paris.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                paris.appendChild(img);
                paris.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + '</p> ');
                paris.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Rome') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                rome.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                rome.appendChild(img);
                rome.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + '</p> ');
                rome.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Hong Kong') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                hongKong.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                hongKong.appendChild(img);
                hongKong.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                hongKong.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Istanbul') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                istanbul.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                istanbul.appendChild(img);
                istanbul.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                istanbul.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Madrid') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                madrid.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                madrid.appendChild(img);
                madrid.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                madrid.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'New York') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                newYork.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                newYork.appendChild(img);
                newYork.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                newYork.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Mexico') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                mexico.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                mexico.appendChild(img);
                mexico.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                mexico.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }
            if (name == 'Sydney') {
                var imgIcon = data.weather[0].icon + '.png';
                var img = new Image();
                img.src = 'http://openweathermap.org/img/w/' + imgIcon;
                sydney.insertAdjacentHTML('beforeend', '<h2 class= "city-name">' + name + ', ' + state + '</h2> ');
                sydney.appendChild(img);
                sydney.insertAdjacentHTML('beforeend', '<p class= "city-temp">' + mainTemp + '&#8451;' + ' </p> ');
                sydney.insertAdjacentHTML('beforeend', '<p class= "city-description">' + description + ' </p> ');
            }

        } else {
            // We reached our target server, but it returned an error
            console.log('erorro')
        }
        return data;
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();
}


var londonData = getWeatherOf10cityies('london');
var belgradeData = getWeatherOf10cityies('belgrade');
var parisData = getWeatherOf10cityies('paris');
var romeData = getWeatherOf10cityies('rome');
var HongKongData = getWeatherOf10cityies('hong kong');
var IstanbulData = getWeatherOf10cityies('istanbul');
var madridData = getWeatherOf10cityies('madrid');
var newYorkData = getWeatherOf10cityies('new york');
var mexicoData = getWeatherOf10cityies('mexico');
var sydneyData = getWeatherOf10cityies('sydney');


// Search cityies by name and show weather 
function getCurrentWeatherByCityName() {

    var currentWeather = document.querySelector('#current-weather');
    //  currentWeather.innerHTML = '';
    var cityName = document.querySelector('.cw-city-name');
    cityName.innerHTML = '';
    var cityImg = document.querySelector('.cw-city-img');
    cityImg.innerHTML = '';

    var cityTemp = document.querySelector('.cw-city-temp');
    cityTemp.innerHTML = '';
    var cityOther = document.querySelector('.cw-city-other');
    cityOther.innerHTML = '';
    var inputCityValue = document.querySelector('.inputCityValue').value;
    var body = document.querySelector('body');

    var request = new XMLHttpRequest();
    var method = 'GET';
    // var url=  'http://api.openweathermap.org/data/2.5/forecast?q=' + inputCityValue + '&appid=b2ed80cc211d2fe0dc7c2bf64493b7c9' ;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + inputCityValue + '&appid=b2ed80cc211d2fe0dc7c2bf64493b7c9';
    console.log('url1', url);
    var async = true;

    request.open(method, url, async);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            var resp = request.responseText;
            var data = JSON.parse(request.responseText);
            var name = data.name;
            var wind = data.wind.speed + 'km/h';
            var pressure = data.main.pressure;
            var state = data.sys.country;
            var kelvin = 273.15;
            var mainTempToCelsius = data.main.temp - kelvin;
            var mainTemp = mainTempToCelsius.toFixed(2);
            var mainTempMinToCelsius = data.main.temp_min - kelvin ;
            var mainTempMin = mainTempMinToCelsius.toFixed(2);
            var mainTempMaxToCelsius = data.main.temp_max - kelvin;
            var mainTempMax = mainTempMaxToCelsius.toFixed(2);
            var main = data.weather[0].main;
            var description = data.weather[0].description;

            var imgIcon = data.weather[0].icon + '.png';
            var img = new Image();
            img.src = 'http://openweathermap.org/img/w/' + imgIcon;

            cityName.insertAdjacentHTML('beforeend', '<h2>' + name + ', ' + state + '</h2> ');
            cityImg.appendChild(img);
            cityImg.insertAdjacentHTML('beforeend', '<p>' + description.toUpperCase() + ' </p> ');
            cityTemp.insertAdjacentHTML('beforeend', '<p>' + 'Current: ' + mainTemp + '&#8451;' + ' </p> ');
            cityTemp.insertAdjacentHTML('beforeend', '<p>' + 'Min: ' + mainTempMin + '&#8451;' + ' </p> ');
            cityTemp.insertAdjacentHTML('beforeend', '<p>' + 'Max: ' + mainTempMax + '&#8451;' + ' </p> ');
            cityOther.insertAdjacentHTML('beforeend', '<p>' + 'Pressure: ' + pressure + ' </p> ');
            cityOther.insertAdjacentHTML('beforeend', '<p>' + 'Wind: ' + wind + ' </p> ');

            if (main == 'Clear') {
                body.setAttribute('style', 'background:url("./img/clear-day.jpg")');
            } else if (main == 'Rain') {
                body.setAttribute('style', 'background:url("./img/rainy-day.jpg")');
            } else if (main == 'Clouds' && description == 'few clouds') {
                body.setAttribute('style', 'background:url("./img/few-clouds-day.jpg")');
            } else if (main == 'Clouds' && description == 'scattered clouds') {
                body.setAttribute('style', 'background:url("./img/scat-clouds.jpg")');
            } else if (main == 'Clouds') {
                body.setAttribute('style', 'background:url("./img/cloudy-day.jpg")');
            } else if (main == 'Thunderstorm') {
                body.setAttribute('style', 'background:url("./img/tunderstorm.jpg")');
            } else if (main == 'Mist') {
                body.setAttribute('style', 'background:url("./img/mist.jpg")');
            } else if (main == 'Haze') {
                body.setAttribute('style', 'background:url("./img/haze.jpg")');
            } else if (main == 'Fog') {
                body.setAttribute('style', 'background:url("./img/fog.jpg")');
            }

            inputCityValue = ' ';
        };
    }
    request.send();
};
var btnSearch = document.querySelector('.btn-search');
btnSearch.addEventListener('click', function (data) {
    getCurrentWeatherByCityName();
    document.querySelector('.inputCityValue').value = ""; //clear input fild search
})





function getCurentLocation() {
    navigator.geolocation.watchPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        getWeatherOfCurrentLocation(latitude, longitude)
    });
    // window.location.reload(true);
}

function getWeatherOfCurrentLocation(latitude, longitude) {
    //console.log(latitude, longitude);
    var currentWeather = document.querySelector('.current-location');

    var cityName = document.querySelector('.cw-city-name1');
    cityName.innerHTML = '';
    var cityImg = document.querySelector('.cw-city-img1');
    cityImg.innerHTML = '';

    var cityTemp = document.querySelector('.cw-city-temp1');
    cityTemp.innerHTML = '';
    var cityOther = document.querySelector('.cw-city-other1');
    cityOther.innerHTML = '';
    var inputCityValue = document.querySelector('.inputCityValue').value;
    var body = document.querySelector('body');

    var request = new XMLHttpRequest();
    var method = 'GET';
    //wether for 5 days api
    // var url=  'http://api.openweathermap.org/data/2.5/forecast?lat='+ latitude +'&lon='+ longitude +'&appid=b2ed80cc211d2fe0dc7c2bf64493b7c9' ;
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=b2ed80cc211d2fe0dc7c2bf64493b7c9';
    console.log('url1', url); //api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    var async = true;

    request.open(method, url, async);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            var description = data.weather[0].main;
            var data = JSON.parse(request.responseText);
            var resp = request.responseText;
            var data = JSON.parse(request.responseText);
            console.log(data);
            var name = data.name;
            var state = data.sys.country;
            var pressure = data.main.pressure;
            var kelvin = 273.15;
            var mainTempToCelsius = data.main.temp - kelvin;
            var mainTemp = mainTempToCelsius.toFixed(2);
            var mainTempMinToCelsius = data.main.temp_min - kelvin;
            var mainTempMin = mainTempMinToCelsius.toFixed(2);
            var mainTempMaxToCelsius = data.main.temp_max - kelvin;
            var mainTempMax = mainTempMaxToCelsius.toFixed(2);
            var wind = data.wind.speed + 'km/h';
            var main = data.weather[0].main;
            var description = data.weather[0].description;

            var imgIcon = data.weather[0].icon + '.png';
            var img = new Image();
            img.src = 'http://openweathermap.org/img/w/' + imgIcon;
            cityName.insertAdjacentHTML('beforeend', '<h2>' + name + ', ' + state + '</h2> ');
            cityImg.appendChild(img);
            cityImg.insertAdjacentHTML('beforeend', '<p>' + description.toUpperCase() + ' </p> ');
            cityTemp.insertAdjacentHTML('beforeend', '<p>' + 'Current: ' + mainTemp + '&#8451;' + ' </p> ');
            cityTemp.insertAdjacentHTML('beforeend', '<p>' + 'Min: ' + mainTempMin + '&#8451;' + ' </p> ');
            cityTemp.insertAdjacentHTML('beforeend', '<p>' + 'Max: ' + mainTempMax + '&#8451;' + ' </p> ');
            cityOther.insertAdjacentHTML('beforeend', '<p>' + 'Pressure: ' + pressure + ' </p> ');
            cityOther.insertAdjacentHTML('beforeend', '<p>' + 'Wind: ' + wind + ' </p> ');

            if (main == 'Clear') {
                body.setAttribute('style', 'background:url("./img/clear-day.jpg")');
            } else if (main == 'Rain') {
                body.setAttribute('style', 'background:url("./img/rainy-day.jpg")');
            } else if (main == 'Clouds' && description == 'few clouds') {
                body.setAttribute('style', 'background:url("./img/few-clouds-day.jpg")');
            } else if (main == 'Clouds' && description == 'scattered clouds') {
                body.setAttribute('style', 'background:url("./img/scat-clouds.jpg")');
            } else if (main == 'Clouds') {
                body.setAttribute('style', 'background:url("./img/cloudy-day.jpg")');
            } else if (main == 'Thunderstorm') {
                body.setAttribute('style', 'background:url("./img/tunderstorm.jpg")');
            } else if (main == 'Mist') {
                body.setAttribute('style', 'background:url("./img/mist.jpg")');
            } else if (main == 'Haze') {
                body.setAttribute('style', 'background:url("./img/haze.jpg")');
            } else if (main == 'Fog') {
                body.setAttribute('style', 'background:url("./img/fog.jpg")');
            }

        };
    }
    request.send();
};

var btnSearch = document.querySelector('.btn-location');
btnSearch.addEventListener('click', function (data) {

    getCurentLocation();


})