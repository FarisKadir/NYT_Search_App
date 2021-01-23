var searchTerm = $("#search-term").val();
var recordsNumber = $("#records-number").val();
var startYear = $("#start-year").val();
var endYear = $("#end-year").val();

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

$("#search-button")
$("#submit-button")
$("#top-articles")