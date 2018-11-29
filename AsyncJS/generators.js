window.onload = function(){
    genWrap(function* (){
        var tweets = yield $.get("AsyncJS/data/tweets.json");
        console.log(tweets);

        var friends = yield $.get("AsyncJS/data/friends.json");
        console.log(friends);

        var places = yield $.get("AsyncJS/data/places.json");
        console.log(places);
    });

    function genWrap(generator) {
        var gen = generator();

        function handle(yielded) {
            if(!yielded.done){
                yielded.value.then(function(data){
                    return handle(gen.next(data));
                })
            }
        }

        return handle(gen.next());
    }
}