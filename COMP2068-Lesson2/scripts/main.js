/// <reference path="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />

if (jQuery) {
    $("#lesson-header").show();

    var paraString = $("#lesson-header p").text();

    console.debug(paraString);
}