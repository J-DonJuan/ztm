var button = document.getElementById("button");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li);
})

