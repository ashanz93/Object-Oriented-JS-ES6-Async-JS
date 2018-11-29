window.onload = function() {
    // callback hell demo
    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: function(data){
            console.log(data);
            $.ajax({
                type: "GET",
                url: "data/friends.json",
                success: function(data){
                    console.log(data);
                    $.ajax({
                        type: "GET",
                        url: "data/places.json",
                        success: function(data){
                            console.log(data);
                            
                        },
                        error: function(jqXHR, textStatus, error){
                            console.log("error");
                        }
                    })
                },
                error: function(jqXHR, textStatus, error){
                    console.log("error");
                }
            })
        },
        error: function(jqXHR, textStatus, error){
            console.log("error");
        }
    })


}