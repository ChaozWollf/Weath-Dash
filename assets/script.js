

const APIstorm = "46b8f30c47e39abae3cbe5ebea90da76"
const city = $('.city-name');
var cit = $('#city');
const sity = JSON.parse(localStorage.getItem('Cname'));
const sh = $('.SH');
const ff = $('.FF');
const uity = [];
const current = $('.Current');
const one = $('.one');
const two = $('.two');
const three = $('.three');
const four = $('.four');
const five = $('.five');
const currentDate = dayjs();
const nextFiveDates = [];


for (let i = 1; i <= 5; i++) {
    const nextDate = currentDate.add(i, 'day');
    nextFiveDates.push(nextDate);
}

 currentDate.format('YYYY-MM-DD');



// Date in corner

const timer = window.setInterval(function () {
    const Ctime = dayjs().format('MMMM,D')
    var Date = $("<p></p>").text(Ctime);
    $(".Nava").text(Date[0].outerText);

}, 1000);

$(".Nava").append(Date);

// current weather function with appends for display
function weather(rity) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${rity}&appid=${APIstorm}&units=imperial`;

  
    
   fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const cityName = data.name;
            const createTableRow = document.createElement('tr');
            const icon = data.weather[0].icon;
            const img = document.createElement("img");
            img.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
            const desc = data.weather[0].description;
            const temp = data.main.temp;
            const wind = data.wind.speed;
            const cityNameData = document.createElement('td');
            cityNameData.textContent = cityName;
            const descData = document.createElement('td');
            descData.textContent = desc;
            const tempData = document.createElement('tr');
            tempData.textContent = "Temp:" + temp + " F";
            const windData = document.createElement('tr');
            windData.textContent ="Wind:" + wind + " mph";
            createTableRow.appendChild(cityNameData);
            createTableRow.append(currentDate);
            createTableRow.appendChild(img);
            createTableRow.appendChild(descData);
            createTableRow.appendChild(tempData);
            createTableRow.appendChild(windData);
            current[0].appendChild(createTableRow);


        });
}

// future forcast with appends for display
function forcast(rity) {
    const requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${rity}&appid=${APIstorm}&units=imperial`


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const icon0 = data.list[0].weather[0].icon;
            const img0 = document.createElement("img");
            img0.setAttribute("src", `https://openweathermap.org/img/wn/${icon0}@2x.png`);
            const desc1 = data.list[0].weather[0].description;
            const temp1 = data.list[0].main.temp;
            const wind1 = data.list[0].wind.speed;
            const createTableRow1 = document.createElement('tr');
            const descData1 = document.createElement('td');
            descData1.textContent = desc1;
            const tempData1 = document.createElement('tr');
            tempData1.textContent ="Temp: "+ temp1+ "F";
            const windData1 = document.createElement('tr');
            windData1.textContent = "Wind:"+ wind1 + " mph" ;
            createTableRow1.append(nextFiveDates[0]);
            createTableRow1.appendChild(img0);
            createTableRow1.appendChild(descData1);
            createTableRow1.appendChild(tempData1);
            createTableRow1.appendChild(windData1);
            one[0].appendChild(createTableRow1);
            const icon8 = data.list[8].weather[0].icon;
            const img8 = document.createElement("img");
            img8.setAttribute("src", `https://openweathermap.org/img/wn/${icon8}@2x.png`);
            const desc2 = data.list[8].weather[0].description;
            const temp2 = data.list[8].main.temp;
            const wind2 = data.list[8].wind.speed;
            const createTableRow2 = document.createElement('tr');
            const descData2 = document.createElement('td');
            descData2.textContent = desc2;
            const tempData2 = document.createElement('tr');
            tempData2.textContent = "Temp:" + temp2 + " F";
            const windData2 = document.createElement('tr');
            windData2.textContent ="Wind:" + wind2 + " mph";
            createTableRow2.append(nextFiveDates[1]);
            createTableRow2.appendChild(img8);
            createTableRow2.appendChild(descData2);
            createTableRow2.appendChild(tempData2);
            createTableRow2.appendChild(windData2);
            two[0].appendChild(createTableRow2);
            const icon16 = data.list[16].weather[0].icon;
            const img16 = document.createElement("img");
            img16.setAttribute("src", `https://openweathermap.org/img/wn/${icon16}@2x.png`);
            const desc3 = data.list[16].weather[0].description;
            const temp3 = data.list[16].main.temp;
            const wind3 = data.list[16].wind.speed;
            const createTableRow3 = document.createElement('tr');
            const descData3 = document.createElement('td');
            descData3.textContent = desc3;
            const tempData3 = document.createElement('tr');
            tempData3.textContent = "Temp:" + temp3 + " F";
            const windData3 = document.createElement('tr');
            windData3.textContent = "Wind:" + wind3 + " mph"; ;
            
            createTableRow3.append(nextFiveDates[2]);
            createTableRow3.appendChild(img16);
            createTableRow3.appendChild(descData3);
            createTableRow3.appendChild(tempData3);
            createTableRow3.appendChild(windData3);
            three[0].appendChild(createTableRow3);
            const icon24 = data.list[24].weather[0].icon;
            const img24 = document.createElement("img");
            img24.setAttribute("src", `https://openweathermap.org/img/wn/${icon24}@2x.png`);
            const desc4 = data.list[24].weather[0].description;
            const temp4 = data.list[24].main.temp;
            const wind4 = data.list[24].wind.speed;
            const createTableRow4 = document.createElement('tr');
            const descData4 = document.createElement('td');
            descData4.textContent = desc4;
            const tempData4 = document.createElement('tr');
            tempData4.textContent = "Temp:" + temp4 + " F";
            const windData4 = document.createElement('tr');
            windData4.textContent = "Wind:" + wind4 + " mph";;
            createTableRow4.append(nextFiveDates[3]);
            createTableRow4.appendChild(img24);
            createTableRow4.appendChild(descData4);
            createTableRow4.appendChild(tempData4);
            createTableRow4.appendChild(windData4);
            four[0].appendChild(createTableRow4);
            const icon32 = data.list[32].weather[0].icon;
            const img32 = document.createElement("img");
            img32.setAttribute("src", `https://openweathermap.org/img/wn/${icon32}@2x.png`);
            const desc5 = data.list[32].weather[0].description;
            const temp5 = data.list[32].main.temp;
            const wind5 = data.list[32].wind.speed;
            const createTableRow5 = document.createElement('tr');
            const descData5 = document.createElement('td');
            descData5.textContent = desc5;
            const tempData5 = document.createElement('tr');
            tempData5.textContent = "Temp:" + temp5 + " F" ;
            const windData5 = document.createElement('tr');
            windData5.textContent = "Wind:" + wind5 + " mph";
            createTableRow5.append(nextFiveDates[4]);
            createTableRow5.appendChild(img32);
            createTableRow5.appendChild(descData5);
            createTableRow5.appendChild(tempData5);
            createTableRow5.appendChild(windData5);
            five[0].appendChild(createTableRow5);
        })

};

// Button for display and retrieval of previous seach 
$('.button').on('click', function () {
    var rity = cit.val();
    uity.push(cit.val());
    localStorage.setItem('Cname', JSON.stringify(uity));
    sh.text("");
    current.text("");
    one.text("");
    two.text("");
    three.text("");
    four.text("");
    five.text("");
    weather(rity);
    forcast(rity);
    for (i = 0; i < uity.length; i++) {
        const bity = document.createElement("button");
        bity.classList.add("hope");
        bity.textContent = uity[i];
        bity.addEventListener('click', event => {
            var rity = event.target.innerHTML;
            console.log(event.target.innerHTML);
            current.text("");
            one.text("");
            two.text("");
            three.text("");
            four.text("");
            five.text("");
            weather(rity);
            forcast(rity);
        });
        sh.append(bity);
    }
});




