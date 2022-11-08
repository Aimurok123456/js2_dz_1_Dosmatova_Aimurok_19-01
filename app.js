// 1) Используя регулярные выражения
// необходимо сделать поле для ввода формата
// ИНН - ппервыми цифрами должны быть либо 1 либо 0,
// а затем еще 13 цифр (в общем должно быть 14 цифр).

const registerInput = document.querySelector("#registerInput")
const registerCheck = document.querySelector(".registerCheck")
const registerResult = document.querySelector(".registerResult")
const  registerRegExp = /^[0,1]\d{13}$/

registerCheck.addEventListener("click", () => {

    if (registerRegExp.test(registerInput.value)) {
        registerResult.innerText = "ok"
        registerResult.style.color = "green"
    } else {
        registerResult.innerText = "not ok"
        registerResult.style.color = "red"
    }
})

let pos = 0
const little = document.querySelector(".little__block")
function move (){
    pos++
    little.style.left = `${pos}px`

    if (pos <= 70){
        move()
    }
    else if (pos > 1200){
        pos = 0
    }
    else {
        pos += 70
    }
}
little.addEventListener('click', move)