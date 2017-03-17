
var items = [];
var flag = true;
var count = 0;
while (flag){
    var question = prompt("What do you what to do?");

    if (question == "new" ){
        var todo = prompt("What do you want to add?");
        newItem(todo);
    }if(question == "list"){
        list();
    }if(question == "quit"){
        flag =false;
    }if(question == "remove"){
        var index = prompt("Which element do you wnat to remove?");
            remove(index);
    }else 
        alert("try again");
}
function newItem (newItem){
    items.push(todo); 
    alert(newItem + " has been added to the todoList");
}

function list (){

    items.forEach(function(item){
        console.log(item);
    });

}
function remove(index){
    alert("the item at index " + index +" which is "+ items[index] + " has been removed");
    items.splice(index, 1);
}
