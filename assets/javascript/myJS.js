$( document ).ready(function() {
    var topics = [
        "football",
        "soccer",
        "baseball",
        "frisbee",
        "golf",
        "gymnastics",
        "cheerleading",
        "crossfit",
        "jiu-jitsu",
        "rock-climbing",
        "surfing",
        "snowboarding"
    ];

    topics.forEach(function(topic){
        var button = $("<button>");
        button.text(topic);
        button.addClass("button btn btn-dark");
        button.attr("data-name", topic);
        $(".buttons").append(button);
    });

function displaygiphyinfo(){
    var sport = $(this).attr("data-name");
    var url="https://api.giphy.com/v1/gifs/search?q=";
    var params="&limit=10&rating=g"
    var apikey="&api_key=RYnKoIeTUvFnDqLxzaqXC9HtLFtkD8mk";
    var queryurl=url + sport + params + apikey;

$.ajax({
    url: queryurl,
    method: "GET"
}).then(function(response){
    console.log(response);
    // var gifDiv = $("<div>");
    // gifDiv.append(response);
    // $(".gifcontainer").append(gifDiv);

});
}



$(document).on("click", ".button", displaygiphyinfo);




});
// END OF DOCUMENT.READY