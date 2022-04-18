const decreaseButton = document.querySelector(".box-buttonList__decrease");
const resetButton = document.querySelector(".box-buttonList__reset");
const increaseButton = document.querySelector(".box-buttonList__increase");
const counter = document.querySelector(".box__counter")
var counterValue = parseInt(counter.innerText);

decreaseButton.addEventListener("click", event => {
    counter.innerText = parseInt(counter.textContent) - 1;
    colorChange();
    
})

resetButton.addEventListener("click", event => {
    counter.textContent = "0";
    colorChange();
    
})

increaseButton.addEventListener("click", event => {
     counter.textContent = parseInt(counter.textContent) + 1;
     colorChange();
     
})

const colorChange = () => {

    counterValue = parseInt(counter.textContent);

    if (counterValue=== 0) {
        counter.style.color = "white";
    } else if (counterValue > 0) {
        counter.style.color = "green";
    } else if (counterValue < 0) {
        counter.style.color = "red";
    }
}


colorChange();


