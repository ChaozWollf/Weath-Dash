//variable to hold the input for city name
//variable to hold past selected cities
//a set and get for local storage (cities)
//a push to be able to add city names to info in local storage
//a form to be able to hold previously selected cities
//a form to hold the 5 day weather info
//weather icons
//a form to hold current weather data
// day.js to be able to get the current date/time
//make sure to get the weather conditions, tempurature, humidity, and windspeed
//

const APIstorm = "46b8f30c47e39abae3cbe5ebea90da76"
const city = $('.city-name');
var cit = $('#city');
const sity = JSON.parse(localStorage.getItem('Cname'));
const sh = $('.SH');
const ff = $('.FF')
const uity = [];
const current = $('.Current');
const one = $('.one')
const two = $('.two')
const three = $('.three')
const four = $('.four')
const five = $('.five')




function weather() {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cit.val()}&appid=${APIstorm}&units=imperial`


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const cityName = data.name;
            const createTableRow = document.createElement('tr');
            const desc = data.weather[0].description;
            const temp = data.main.temp;
            const wind = data.wind[1];
            const cityNameData = document.createElement('td');
            cityNameData.textContent = cityName;
            const descData = document.createElement('td');
            descData.textContent = desc;
            const tempData = document.createElement('tr');
            tempData.textContent = temp;
            const windData = document.createElement('tr');
            windData.textContent = wind;
            createTableRow.appendChild(cityNameData);
            createTableRow.appendChild(descData);
            createTableRow.appendChild(tempData);
            createTableRow.appendChild(windData);
            current[0].appendChild(createTableRow);


        });
}


function forcast() {
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cit.val()}&appid=${APIstorm}&units=imperial`


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const desc1 = data.list[0].weather[0].description;
            const temp1 = data.list[0].main.temp;
            const wind1 = data.list[0].wind[1];
            const createTableRow1 = document.createElement('tr');
            const descData1 = document.createElement('td');
            descData1.textContent = desc1;
            const tempData1 = document.createElement('tr');
            tempData1.textContent = temp1;
            const windData1 = document.createElement('tr');
            windData1.textContent = wind1;
            createTableRow1.appendChild(descData1);
            createTableRow1.appendChild(tempData1);
            createTableRow1.appendChild(windData1);
            one[0].appendChild(createTableRow1);
            const desc2 = data.list[8].weather[0].description;
            const temp2 = data.list[8].main.temp;
            const wind2 = data.list[8].wind[1];
            const createTableRow2 = document.createElement('tr');
            const descData2 = document.createElement('td');
            descData2.textContent = desc2;
            const tempData2 = document.createElement('tr');
            tempData2.textContent = temp2;
            const windData2 = document.createElement('tr');
            windData2.textContent = wind2;
            createTableRow2.appendChild(descData2);
            createTableRow2.appendChild(tempData2);
            createTableRow2.appendChild(windData2);
            two[0].appendChild(createTableRow2);
            const desc3 = data.list[16].weather[0].description;
            const temp3 = data.list[16].main.temp;
            const wind3 = data.list[16].wind[1];
            const createTableRow3 = document.createElement('tr');
            const descData3 = document.createElement('td');
            descData3.textContent = desc3;
            const tempData3 = document.createElement('tr');
            tempData3.textContent = temp3;
            const windData3 = document.createElement('tr');
            windData3.textContent = wind3;
            createTableRow3.appendChild(descData3);
            createTableRow3.appendChild(tempData3);
            createTableRow3.appendChild(windData3);
            three[0].appendChild(createTableRow3);
            const desc4 = data.list[24].weather[0].description;
            const temp4 = data.list[24].main.temp;
            const wind4 = data.list[24].wind[1];
            const createTableRow4 = document.createElement('tr');
            const descData4 = document.createElement('td');
            descData4.textContent = desc4;
            const tempData4 = document.createElement('tr');
            tempData4.textContent = temp4;
            const windData4 = document.createElement('tr');
            windData4.textContent = wind4;
            createTableRow4.appendChild(descData4);
            createTableRow4.appendChild(tempData4);
            createTableRow4.appendChild(windData4);
            four[0].appendChild(createTableRow4);
            const desc5 = data.list[32].weather[0].description;
            const temp5 = data.list[32].main.temp;
            const wind5 = data.list[32].wind[1];
            const createTableRow5 = document.createElement('tr');
            const descData5 = document.createElement('td');
            descData5.textContent = desc5;
            const tempData5 = document.createElement('tr');
            tempData5.textContent = temp5;
            const windData5 = document.createElement('tr');
            windData5.textContent = wind5;
            createTableRow5.appendChild(descData5);
            createTableRow5.appendChild(tempData5);
            createTableRow5.appendChild(windData5);
            five[0].appendChild(createTableRow5);
        })

};

const timer = window.setInterval(function () {
    const Ctime = dayjs().format('MMMM,D')
    var Date = $("<p></p>").text(Ctime);
    $("Nava").text(Date[0].outerText);

}, 1000);

$(".Nava").append(Date);







$('.button').on('click', function () {
    uity.push(cit.val());
    localStorage.setItem('Cname', JSON.stringify(uity));
    sh.html("");
    for (i = 0; i < uity.length; i++) {
        const bity = document.createElement("button");
        bity.textContent = uity[i];
        sh.append(bity);
        weather();
        forcast();
    }
});
