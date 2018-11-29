window.onload = function() {
    // JS Style
    /* function get(url) {
        return new Promise (function(resolve, reject){
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", url, true);
            xhttp.onload = function(){
                if(xhttp.status == 200){
                    resolve(JSON.parse(xhttp.response));
                } else {
                    reject(xhttp.statusText);
                }
            }
            xhttp.onerror = function() {
                reject(xhttp.statusText);
            }
            xhttp.send();
        });
    }

    var promise = get("AsyncJS/data/tweets.json"); // Promise - Placeholder for a future event
    promise.then(function(tweets){
        console.log(tweets);
        return get("AsyncJS/data/friends.json")
    }).then(function(friends){
        console.log(friends);
        return get("AsyncJS/data/places.json")
    }).then(function(places){
        console.log(places);
    }).catch(function(error){
        console.log(error);
    })*/

    // jQuery way
    $.get("AsyncJS/data/tweets.json").then(function(tweets){
        console.log(tweets);
        return $.get("AsyncJS/data/friends.json");
    }).then(function(friends){
        console.log(friends);
        return $.get("AsyncJS/data/places.json");
    }).then(function(places){
        console.log(places);
    })
}