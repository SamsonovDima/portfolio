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
    function change() {
        var select = document.getElementsByTagName('select');
        for (var y = 0; y < select.length; y++) {
            select[y].onchange = function(e) {
                // console.log(e) // перенестии  сюда кусок кода

                var out = '';
                for (var i in CityList) {
                    var cantry = event.target.value
                    // console.log(cantry)
                    if (CityList[i].country == cantry) {
                        out += "<option data-val=" + CityList[i].id + " class=citylocation >" + CityList[i].name + "</option>"
                        var outCity = document.getElementById('out');
                        outCity.innerHTML = out
                        // console.log(CityList[i].country)

                        document.body.onclick = function(event) {
                            event = event || window.event;
                            console.log(event)
                            var dataclass = event.target.className;
                            console.log(dataclass)
                            if (dataclass == 'citylocation') {
                                // var dataId = event.target.attributes.id.ownerElement.selectedOptions[0].dataset.val;
                                // var dataId = event.target.attributes[0].value;
                                var dataId = event.target.dataset.val;
                                console.log(dataId)
                                var xhr = new XMLHttpRequest();
                                xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=' + dataId + '&appid=c4ecaf46d9687ed18d60681ab359b68f', false);
                                xhr.send();
                                if (xhr.status != 200) {
                                    // обработать ошибку
                                    alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
                                } else {
                                    // вывести результат
                                    // console.log(xhr.response); // responseText -- текст ответа.
                                    var retOut = JSON.parse(xhr.response);
                                    var out = '';
                                    out += "<h2> Temp: " + retOut.main.temp + " </h2>"
                                    out += '<img src="https://openweathermap.org/img/w/' + retOut.weather[0].icon + '.png">'
                                    var outTemp = document.getElementById('outtemp')
                                    outTemp.innerHTML = out
                                    // console.log(retOut)
                                    // console.log(out)



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
