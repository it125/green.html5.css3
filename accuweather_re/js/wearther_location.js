// 전체 URL 가져오기
var currentURL = location.href;
var urlObj = new URL(currentURL);

// 쿼리스트링 parameter(매개변수) 가져오기
var params = urlObj.searchParams;
var q = params.get("q");
console.log(q);

// 전체 날씨 정보 가져오기
var result = getCurrenWeather(q);

// 데이터 바인딩
$("#temp").text(result.main.temp + "°C");
$("#wind").text(result.wind.speed + "m/s");
$("#humidity").text(result.main.humidity + "%");