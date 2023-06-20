var button = document.querySelectorAll(".button");

button.forEach(element => {
    element.addEventListener("click", function (){
        document.querySelector(".div-absolute").classList.toggle("clicked");
    })
});