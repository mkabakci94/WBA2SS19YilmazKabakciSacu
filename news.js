/**
 * Created by Cem Yilmaz on 12.05.2019.
 */
console.log("--- news API- Modul ---");
//source.json
var api = require("./source");
//keywords.json
var keywords = require("./keywords");
// modul request
const request = require('request');
// the Main Url news.org

var urlMain = api.News.uriMain;
//console.log("Existing Parameters for the API:");
//console.log(api);
//console.log("name: "+api.News.name);
//console.log("Uri main: "+ api.News.uriMain);
// Parameter for Search
var param = "everything?q=apple&";
// user Key for the API
var apiKey = "apiKey=b7c25bcc8daf49d7b8203d0bdd43c563";

var url = urlMain + param + apiKey;
//let objectString = new String('');
badnews = keywords.badnews; // param from keywords dn
goodnews = keywords.goodnews; // params from keywords.json gn
//console.log(badnews);
//console.log(Object.keys(badnews).length);
//console.log(url);
//---------------------------

//------------------
module.exports = {
pruefen: function(objMatch) {

    var param = "everything?q="+objMatch+"&";
    var url = urlMain + param + apiKey;


    request({

        url: url,
        json: true
        }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
           console.log(body) // Print the json response

        }
    })


    let aussage = "Der mensch gewinnwarnung sell ist des Mensch sein Feind Mensch.";
    console.log("news suche nach :"+objMatch);

    // includes methode
    console.log(aussage.includes(objMatch));

    // Traver keywords in Stream
    if(Object.keys(badnews).length) {
        for (var index = 0; index < Object.keys(badnews).length; ++index) {
            console.log("---" + badnews[index].bn);
            console.log(aussage.includes(badnews[index].bn));
        }
    }
    else {console.log("sorry no Badword list or empty"  )}

    if(Object.keys(goodnews).length) {
        for (var index = 0; index < Object.keys(goodnews).length; ++index) {
            console.log("---" + goodnews[index].gn);
            console.log(aussage.includes(goodnews[index].gn));
        }
    }
    else {console.log("sorry no goodword list or empty"  )}

    return aussage.includes(objMatch);

  //  let suchWort= /objMatch/g;
    //console.log("suchWort:" +suchWort);
    //let ergebnis = aussage.match(suchWort);
    /* if (ergebnis) {
        var fundstellen = 'Test:';
        for (var index = 0; index < ergebnis.length; ++index) {
            var fundstellen = fundstellen  + 'Fund: ' + index + ' - ' + ergebnis[index];
        }
        console.log(fundstellen+index)
    }
    else {
        console.log('Kein Vorkommen gefunden!');
    }*/
    }
}
