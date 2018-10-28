var requestURL = 'city.list.json'; //файл json и с информацией который лежит в корне возле index.html
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var CityList = request.response;
    outCity(CityList);
}

function outCity(CityList) {

    // document.body.onclick = function(event) { // поменять на что то другое 
    //     event = event || window.event;
    function change(){
        var select = document.getElementsByTagName('select');
        for (var y=0; y < select.length; y++){
            select[y].onchange = function(e){
                console.log(e) // перенестии  сюда кусок кода

                var out = '';
                for (var i in CityList) {
                    var cantry = event.target.value
                    console.log(cantry)
                    if (CityList[i].country == cantry) {
                        out += "<p data-id=" + CityList[i].id + " class=citylocation >" + CityList[i].name + "</p>"
                        var outCity = document.getElementById('out');
                        outCity.innerHTML = out
                        console.log(CityList[i].country)
        
                        document.body.onclick = function(event) {
                            event = event || window.event;
        
                            if (event.target.className == 'citylocation') {
                                var dataId = event.target.dataset.id;
                                // console.log(dataId)
                                var xhr = new XMLHttpRequest();
                                xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=' + dataId + '&appid=c4ecaf46d9687ed18d60681ab359b68f', false);
                                xhr.send();
                                if (xhr.status != 200) {
                                    // обработать ошибку
                                    alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
                                } else {
                                    // вывести результат
                                    console.log(xhr.response); // responseText -- текст ответа.
                                    var retOut = JSON.parse(xhr.response);
                                    var out = '';
                                    out += "<h2> Temp: " + retOut.main.temp + " </h2>"
                                    out +='<img src="https://openweathermap.org/img/w/'+ retOut.weather[0].icon +'.png">'
                                    var outTemp = document.getElementById('outtemp')
                                    outTemp.innerHTML = out
                                    console.log(retOut)
                                    console.log(out)
                                
                            
        
                        }
                    }
                }
                }
            }
            }
        }
    }
    change()


}
