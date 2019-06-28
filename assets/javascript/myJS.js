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
    $(".gifcontainer").empty();
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
    var imagearray = response.data;
    imagearray.forEach(function(element){
        var picDiv = $("<div>");
        var pic= $("<img>");
        pic.attr({"src": element.images.fixed_height_still.url,
                "alt": "giphys"});
        picDiv.append(pic);
        // pic.append(element.images);
        $(".gifcontainer").append(picDiv);
    })

    // var gifDiv = $("<div>");
    // gifDiv.append(response);
    // $(".gifcontainer").append(gifDiv);

});
}
//TRY THE TOGGLE METHOD TO GO BETWEEN STILL PIC AND GIF?
//look in response.images for the still version. Store that and flip flop between the two on click.
//use the pausing Gifs activity as a reference
//store a data-animate and a data-still value to call diff sources on click.


$(document).on("click", ".button", displaygiphyinfo);




});
// END OF DOCUMENT.READY