var obj = {
    name: "Jeremiah",
    age: 35,
    isCool: true,
    friends: ["Nicole", "nobody else"],
    add: function(x, y){
        return x +y;
    }
}

console.log(obj.add(10,5));


var comments = {};
comments.data = ["hey", "super", "nice"];

function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
};

console.log(print(comments.data));


comments.print =function(){
    this.data.forEach(function(el){
        console.log(el);
    });
};

console.log(comments.print());



