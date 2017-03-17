var movies = [ 
{
    title: "In bruges",
    rating: 5,
    haveSeen: false
},
{
    title: "Beauty and the Beast",
    rating: 5,
    haveSeen: false
},
{
    title: "logan",
    rating: 3,
    haveSeen: true
},
{
    title: "Frozen",
    rating: 4,
    haveSeen: true
}
]

function buildString(movie) {
    if(movie.hasSeen == true){
        var result = "You have watched ";
    }else {
        var result = "You have not watched ";
    } 
    result += "\"" + movie.title + "\" ";
    result += "- " + movie.rating + " stars ";
    return result;
}

movies.forEach(function(movie){
    console.log(buildString(movie))
});


