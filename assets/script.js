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


    const timer = window.setInterval(function() {
        const Ctime = dayjs().format('MMMM:D:HH:mm')
        var Date = $("<p></p>").text(Ctime.Val());
        $(".navbar-brand").append(Date);
        
    }, 60000);


console.log(timer)







$('.button').on('click', function() {
    const neu = cit
    cit.push(neu)
    localStorage.setItem('Cname', JSON.stringify(cit.val()));

});