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
        $(".buttons").append(button);
    });

    // $()



});
// END OF DOCUMENT.READY