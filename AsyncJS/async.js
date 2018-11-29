window.onload = function() {
    var http = new XMLHttpRequest(); // 0 -> request not initialized
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
    }
    http.open("GET", "data/tweets.json", true); // 1 -> Request set up
    http.send(); // 2 -> Request sent
    

    // jquery method
    $.get("data/tweets.json", function(data) {
        console.log(data);
    });
    console.log("test");
}