var elForm  = document.querySelector(".form");
var elFormInput  = document.querySelector(".form__input");
var elFormBtn  = document.querySelector(".form__btn");
var elFormSpan  = document.querySelector(".form__span");

var evenNumbers = ["Juft" , 2 , 4 , 6 , 8 , 10];
var oddNumbers = ["Toq" , 3 , 5 , 7 , 9 , 11];

elForm.addEventListener("submit", function(e){
    e.preventDefault();
    var elInputVal = elFormInput.value;
    if (elInputVal % 2 == 0){
        elFormSpan.textContent = "Bu juft son !!!";
        evenNumbers.push(elInputVal);
        console.log(evenNumbers);
        elFormSpan.classList.add("green")
        elFormSpan.classList.remove("dark");
    }else {
        elFormSpan.textContent = "Bu toq son !!!";
        oddNumbers.push(elInputVal);
        console.log(oddNumbers);
        elFormSpan.classList.add("dark");
        elFormSpan.classList.remove("green");
    }
} )