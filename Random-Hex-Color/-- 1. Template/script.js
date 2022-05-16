const hex = document.querySelector('.hex');
const btn = document.querySelector('.generate');

const generateColor = ()=>{
    const hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    hex.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

btn.addEventListener('click', generateColor);