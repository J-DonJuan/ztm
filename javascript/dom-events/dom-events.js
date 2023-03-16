var button = document.querySelector("button");
var input = document.querySelector("input");
var ul = document.querySelector("ul");

const appendLi = () => {
    var newChild = document.createElement("li");
    newChild.appendChild(document.createTextNode(input.value));
    ul.appendChild(newChild);
    input.value="";
}

const inputLength = () => {
    return input.value.length;
}

button.addEventListener("click", function(){
    if (inputLength() > 0){
        appendLi();
    }
})

input.addEventListener("keypress", function(event){
    if (inputLength() > 0 && event.code === "Enter"){
        appendLi();
    }
})
