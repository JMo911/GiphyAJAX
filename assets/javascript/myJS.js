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

    function makebuttons() {
        //empty everytime so we don't keep appending duplicates
        $(".buttons").empty();
    topics.forEach(function (topic){
        var button = $("<button>");
        button.text(topic);
        button.addClass("button btn btn-dark");
        button.attr("data-name", topic);
        $(".buttons").append(button);
    });
}


//call the makebuttons function
makebuttons();


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
                "alt": "giphys",
                "data-state": "still",
                "data-animateURL": element.images.fixed_height.url,
                "data-stillURL": element.images.fixed_height_still.url,
                "class": "img-fluid"});
        picDiv.append(pic);
        picDiv.append("<p>Rating: " + element.rating + "</p>");
        $(".gifcontainer").append(picDiv);
    })



});
}



$(document).on("click", ".button", displaygiphyinfo);

$(document).on("click", "img", function(){
    if ($(this).attr("data-state") === "still") {
        $(this).attr({"data-state": "animate",
                    "src": $(this).attr("data-animateURL")});

    } else {
            $(this).attr({
                "data-state": "still",
                "src": $(this).attr("data-stillURL")
            }); 
    }
    
});

//ALLOW USER INPUT TO ADD BUTTONS THAT QUERY THE API FOR GIFS FOR THEIR SPORT
var sportInput = document.getElementById("userinput");

document.querySelector("form").addEventListener("submit", function (parameter){
    //prevent page refresh on submit
    parameter.preventDefault();
    topics.push(sportInput.value);
    makebuttons();
    //empty value on click
    sportInput.value="";
})





});
// END OF DOCUMENT.READY