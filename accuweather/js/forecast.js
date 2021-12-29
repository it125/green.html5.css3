let url = "https://api.openweathermap.org/data/2.5/weather";
    url += "?appid=86ca54e737b95b856aa7e3df379815c5";
    url += "&units=metric";
    url += "&lang=kr";
    url += "&q=incheon";
    
    // 보기 편하게 분리함(q={city name}&)

// 현재 날씨의 모든 정보
function getCurrenWeather(city) {
    var dataObj;
    var openWeatherAPI = url;
    $.ajax({
        type:"GET",
        url: openWeatherAPI,
        dataType: "json",
        // async: false,
        success: function(data) {
            dataObj = data;
            /*
            console.log("result" + JSON.stringify(dataObj));
            console.log( dataObj.main.temp); // 객체
            console.log(dataObj.weather[0].main); // 배열
            console.log(dataObj.wind.speed); 
            console.log(dataObj.main.temp_max);
            console.log(dataObj.sys.country);
            console.log(dataObj.main.humidity);
            */

        },
        error: function(request, status, error) {
            // 응답 에러 시 처리 작업
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });
    return dataObj;
}
// 현재 날씨  온도
function getCurrentTemp(city) {
    var temp = {};
    var openWeatherAPI = url;
    $.ajax({
        type:"GET",
        url: openWeatherAPI,
        dataType: "json",
        // async: false,
        success: function(data) {
            temp.celsius = data.main.temp;
        },
        error: function(request, status, error) {
            // 응답 에러 시 처리 작업
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });
    return dataObj;
}

var result =  getCurrenWeather();
