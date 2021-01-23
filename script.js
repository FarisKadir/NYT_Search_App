var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + wAsl028zJJVulhHpago808pMPTaR2yrS + "&q=";

var articleCounter = 0;


function runQuery(numArticles, queryURL) {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(NYTData))

    
    console.log("URL: " + queryURL);
    

    for (var i = 0; i < numArticles; i++) {
        articleCounter++;
    }
}

$("#search-term")
$("#records-number")
$("#start-year")