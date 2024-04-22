document.getElementById("trigger").addEventListener("click", function() {
    var letters = document.querySelectorAll(".letters");
    

    setTimeout(function() {
        letters.forEach(function(letter) {
            letter.classList.add("letters");
        });
        
    }, 100); // Задержка в 100 миллисекунд

    letters.forEach(function(letter) {
        letter.classList.remove("letters");
    });
});


let contactText = document.querySelector(".contText")
let buttonContact = document.querySelector(".contTrigger")

buttonContact.addEventListener("click", () => {
    contactText.classList.toggle("contactText__active")
})