var person = {
    name: "Jeremiah",
    age: 25,
    race: "white"
};

console.log(person.age);

person.age += 1;
console.log(person.age);

person.race = "italian";


var posts = [

{
    title: "Groovy",
    author: "Jeremiah",
    comments: ["Great job", "super awesome post"]

},
{
    title: "not Groovy",
    author: "not Jeremiah",
    comments: ["bad job", "super bad post"]

}

]

console.log(posts[1].comments[0]);

var some = { 
    friends: [ 
       {name: "malfoy"},
       {name: "harry"}
    ],
color: "baby blue",
isEvil: true
};


console.log(some.friends[1].name);
console.log(some.friends[0].name)
