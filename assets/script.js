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
var cit= $('#city');
const sity=JSON.parse(localStorage.getItem('Cname'));
const sh = $('.SH');
const ff= $('.ff')
const uity = [];













function weather(){
    const requestUrl = "https://api.openweathermap.org/data/2.5/weather?q={cit.val()}&APPID==={APIstorm}";


fetch(requestUrl)
.then(function (response){
    return response.json();
})
.then(function(data) {
    
    const cityName = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const createTableRow = document.createElement('tr');
    const cityNameData = document.createElement('td');
    cityNameData.textContent = cityName;
    createTableRow.appendChild(cityNameData);
    const tempData = document.createElement('td');
    tempData.textContent = temp;
    createTableRow.appendChild(tempData);
    const descData = document.createElement('td');
    descData.textContent = desc;
    createTableRow.appendChild(descData);
    ff.appendChild(createTableRow);
    
    
    
});
}      
    





    const timer = window.setInterval(function() {
        const Ctime = dayjs().format('MMMM,D')
        var Date = $("<p></p>").text(Ctime);
        $("Nava").text(Date[0].outerText);
    
    }, 1000);

$(".Nava").append(Date);







$('.button').on('click', function() {
    uity.push(cit.val());
    localStorage.setItem('Cname', JSON.stringify(uity));
for( i=0; i < uity.length; i++) {
        const bity = document.createElement("button");
        bity.textContent = uity[i];
        bity.append(sh);
   
}});
