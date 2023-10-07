const emailHint = document.querySelector('#validEmail')
const emailInput = document.querySelector('#email')

const pass1 = document.querySelector('#pass1')
const passHint = document.querySelector('#validPass')

const pass2 = document.querySelector('#pass2')
const matchPass = document.querySelector('#matchPass')
const passHint2 = document.querySelector('#validPass2')

let password = ''

emailInput.addEventListener('input', () => {
    if(emailInput.validity.valid) {
        emailHint.style.display = "none"
    } else if (!emailInput.validity.valid) {
        emailHint.style.display = "block"
    }
})

pass1.addEventListener('input', () => {
    if(pass1.validity.valid) {
        passHint.style.display = 'none'
    } else {
        passHint.style.display = 'block'
    }

    password = pass1.value

})

console.log(pass1.innerText)

pass2.addEventListener('input', () => {

    if(pass2.validity.valid) {
        passHint2.style.display = 'none'
    } else {
        passHint2.style.display = 'block'
    }


    if(pass1.value === pass2.value) {
        matchPass.style.display = 'none'
    } else {
        matchPass.style.display = 'block'
    }
})
