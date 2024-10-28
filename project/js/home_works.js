//проверка на email
let inputGmail = document.querySelector("#gmail_input")
let buttonGmail = document.querySelector("#gmail_button")
let resultGmail = document.querySelector("#gmail_result")
const regExpGmail = /@gmail.com/
buttonGmail.onclick = () => {
    if (regExpGmail.test(inputGmail.value)) {
        resultGmail.innerHTML = "you are registration successful!"
        resultGmail.style.color = "green"
    } else {
        resultGmail.innerHTML = "you not registration"
        resultGmail.style.color = "red"
    }
}
//перемешение одного блока внутри его родителя
let child = document.querySelector(".child_block");
let parent = document.querySelector(".parent_block");
let positionX = 0
let positionY = 0
const offsetWidth = parent.offsetWidth - child.offsetWidth
const offsetHeight = parent.offsetHeight - child.offsetHeight
const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX !== 0 && positionY >= offsetHeight) {
        positionX--
        child.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX === 0 && positionY !== 0) {
        positionY--
        child.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()

// таймер
let time = 0
let interval;
let seconds = document.querySelector("#seconds")
let startButton = document.querySelector("#start")
let stopButton = document.querySelector("#stop")
let resetButton = document.querySelector("#reset")

startButton.onclick = () => {
    if (!interval) {
        interval = setInterval(() => {
            time++
            seconds.textContent = time
        }, 1000)
    }
}
stopButton.onclick = () => {
    clearInterval(interval)
    interval = null
}

resetButton.onclick = () => {
    time = 0
    clearInterval(interval)
    seconds.textContent = time
    interval = null
};


// console any data


const log = async () => {
    try {
        const response = await fetch("../data/any.json")
        const data = await response.json();
        console.log(data)
    }catch (e) {
        console.log(e)
    }
}
log()
//card characters
// const persons = new XMLHttpRequest()
// persons.open("GET", "../data/persons.json")
// persons.setRequestHeader("Persons", "application/json")
// persons.send()
const xml = async () => {
    try {
        const response = await fetch("../data/persons.json")
        const persons = await response.json()
        const $card = document.querySelector(".characters-list")


            persons.forEach((person) => {
                const character = document.createElement('div');
                character.innerHTML = `
        <img src="${person.url}" alt="">
        <h4>${person.name}</h4>
        <span>${person.type}</span>
        `
                character.setAttribute("class", "character")
                $card.appendChild(character);
            })

    }catch (e) {
        console.log(e)
    }
}
xml()












