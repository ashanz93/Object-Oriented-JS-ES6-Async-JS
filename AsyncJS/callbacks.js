function handleError(jqXHR, textStatus, error){
    console.log(error);
}

function cbTweets(data)
{
    $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: cbFriends,
        error: handleError
    })
}

function cbFriends(data)
{
    $.ajax({
        type: "GET",
        url: "data/places.json",
        success: function(data){
            console.log(data);
        },
        error: handleError
    })
}

window.onload = function() {
    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError
    })
}