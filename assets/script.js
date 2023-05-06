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

function weather(){
const requestUrl = 'https://api.openweathermap.org / data / 2.5 / weather ? q = { cit } & APPID==={APIstorm}';


fetch(requestUrl)
.then(function (response){
    return response.json();
})
.then(function(data) {
    for(let i = 0; i <data.length; i++) {
        const createTableRow=document.createElement('tr');
        const tableData = document.createElement('td');
        const link = document.createElement('a');
        link.textContent = data[i].html_url;
        link.href = data[i]/html_url;
        tableData.appendChild(link);
        createTableRow.appendChild(tableData)
        ff.appendChild(createTableRow)
    }
});

}





    const timer = window.setInterval(function() {
        const Ctime = dayjs().format('MMMM,D')
        var Date = $("<p></p>").text(Ctime);
        $("Nava").text(Date[0].outerText);
    
    }, 1000);

$(".Nava").append(Date);







$('.button').on('click', function() {
    const neu = cit
    cit.push(neu)
    localStorage.setItem('Cname', JSON.stringify(cit.val()));
    weather()
});
