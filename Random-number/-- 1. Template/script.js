const name = document.querySelector(".number");
const btn = document.querySelector(".generate")

const generateNumber =()=>{
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    name.textContent = randomNumber;
}

btn.addEventListener("click", generateNumber);



