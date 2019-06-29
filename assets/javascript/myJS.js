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

var params;


function displaygiphyinfo(){
    $(".gifcontainer").empty();
    var sport = $(this).attr("data-name");
    var url="https://api.giphy.com/v1/gifs/search?q=";
    params="&limit=200&rating=g";
    var apikey="&api_key=RYnKoIeTUvFnDqLxzaqXC9HtLFtkD8mk";
    var queryurl=url + sport + params + apikey;
    var arraybegin;
    var arrayend;

    //increase limit to 200 lets say
    //on initial 'sport button click, append 1-10 (position 0-9)
    //then, for every 'getmoregifs' button click, append the next 10 
$.ajax({
    url: queryurl,
    method: "GET"
}).then(function renderGifSet(response, arraybegin, arrayend){
    arraybegin=0;
    arrayend=10;

    var imagearray = response.data;
    var thisSlice = imagearray.slice(arraybegin,arrayend);
    
    thisSlice.forEach(function(element){
        var picDiv = $("<div>");
        picDiv.addClass("text-center");
        var pic= $("<img>");
        pic.attr({
                "src": element.images.fixed_height_still.url,
                "alt": "giphys",
                "data-state": "still",
                "data-animateURL": element.images.fixed_height.url,
                "data-stillURL": element.images.fixed_height_still.url,
                "class": "img-fluid"});
        picDiv.append(pic);
        picDiv.append("<p>Rating: " + element.rating + "</p>");
        $(".gifcontainer").append(picDiv);




    })


               //MOREGIFBUTTON CLICK EVENT
               $(document).on("click", ".moregifsbutton", function(event){
                event.preventDefault();
                arraybegin +=10;
                arrayend += 10;
                console.log(arraybegin, arrayend);
                thisSlice = imagearray.slice(arraybegin,arrayend);
                thisSlice.forEach(function(element){
                     var picDiv = $("<div>");
                     picDiv.addClass("text-center");
                     var pic= $("<img>");
                     pic.attr({
                         "src": element.images.fixed_height_still.url,
                         "alt": "giphys",
                         "data-state": "still",
                         "data-animateURL": element.images.fixed_height.url,
                         "data-stillURL": element.images.fixed_height_still.url,
                         "class": "img-fluid"
                     });
                     picDiv.append(pic);
                     picDiv.append("<p>Rating: " + element.rating + "</p>");
                     $(".gifcontainer").append(picDiv);
                }); 
                
                
                
 
     
         });

    //MORE GIFS BUTTON
    //as soon as they click this button, just append the next 10 that are in my response
    var moreGifsButtonDiv = $("<div>");
    moreGifsButtonDiv.addClass("col-12");
    var moreGifsButton = $("<button>");
    moreGifsButton.addClass("btn btn-dark moregifsbutton");
    moreGifsButton.text("Click here for more GIFs");
    moreGifsButtonDiv.append(moreGifsButton);
    $(".gifcontainer").append(moreGifsButtonDiv);




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