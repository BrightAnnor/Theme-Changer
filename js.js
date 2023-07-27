// console.log('Annor Bright')

// window.alert('Hello World')

// this is a comment
/*This is a multi-line comment */

// Variables

const bb = document.getElementById('bb')
const body = document.getElementById('body')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')

function dark(){
    body.style.backgroundColor = 'midnightblue'
    sun.innerHTML = `<i class="fa-regular fa-sun fa-2xl" style="color: #ffffff;"></i>`
    moon.innerHTML = `<i class="fa-regular fa-moon fa-2xl" style="color: #ffffff; transiton:.4s;"></i>`
    body.style.color = 'white'
}
function light(){
    body.style.backgroundColor = 'white'
    sun.innerHTML = `<i class="fa-regular fa-sun fa-2xl"></i>`
    moon.innerHTML = `<i class="fa-regular fa-moon fa-2xl" ></i>`
    body.style.color = 'black'
    
}

let isDarkTheme = false;
function setTheme(){
    isDarkTheme = !isDarkTheme
    if(isDarkTheme ){
        dark()
    }
    else{
        light()
    }
}
bb.addEventListener('click', setTheme)