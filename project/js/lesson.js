// PHONE CHECKER
const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")
const regExp = /^\+996 [2579]\d \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }

}
//tab slider


let tabItems = document.querySelectorAll(".tab_content_item");
let tabParent = document.querySelector(".tab_content_items");
let contentBlocks = document.querySelectorAll(".tab_content_block");
const hideTabContent = () => {
    contentBlocks.forEach(item => {
        item.style.display = "none"
    })
    tabItems.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (index = 0) => {
    contentBlocks[index].style.display = "block"
    tabItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()
let tabindex = 0
tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
                tabindex = index
            }
        })
    }
}

setInterval(() => {
    if (tabindex < 4) {
        tabindex++
    } else {
        tabindex = 0
    }
    hideTabContent()
    showTabContent(tabindex)
}, 5000)
// Converter

async function setupCurrencyConverter() {
    const som = document.querySelector('#som');
    const usd = document.querySelector('#usd');
    const eur = document.querySelector('#eur');
    try {
        const response = await fetch("../data/converter.json");
        const data = await response.json();
        const usdExchangeRate = data.usd;
        const eurExchangeRate = data.eur;

        function updateSomValue(inputValue) {
            if (!isNaN(inputValue)) {
                usd.value = (inputValue / usdExchangeRate).toFixed(2);
                eur.value = (inputValue / eurExchangeRate).toFixed(2);
            } else {
                usd.value = "";
                eur.value = "";
            }
        }

        function updateUsdValue(inputValue) {
            if (!isNaN(inputValue)) {
                som.value = (inputValue * usdExchangeRate).toFixed(2);
                eur.value = (inputValue * (usdExchangeRate / eurExchangeRate)).toFixed(2);
            } else {
                som.value = "";
                eur.value = "";
            }
        }

        function updateEurValue(inputValue) {
            if (!isNaN(inputValue)) {
                som.value = (inputValue * eurExchangeRate).toFixed(2);
                usd.value = (inputValue * (eurExchangeRate / usdExchangeRate)).toFixed(2);
            } else {
                som.value = "";
                usd.value = "";
            }
        }

        som.oninput = () => {
            const inputValue = parseFloat(som.value);
            updateSomValue(inputValue);
        };

        usd.oninput = () => {
            const inputValue = parseFloat(usd.value);
            updateUsdValue(inputValue);
        };

        eur.oninput = () => {
            const inputValue = parseFloat(eur.value);
            updateEurValue(inputValue);
        };
    } catch (error) {
        console.log(error);
    }
}

setupCurrencyConverter();

// card switcher
const card = document.querySelector(".card")
const prevButton = document.querySelector("#btn-prev")
const nextButton = document.querySelector("#btn-next")
let cardId = 1
let firstSlider = () => {
    if (cardId <= 0) {
        cardId = 200
    }
    if (cardId >= 201) {
        cardId = 1
    }
    const f = async () => {
       try {
           const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
           const data = await response.json();
           const {id, title, completed} = data

           card.innerHTML = `
            <p>${title}</p>
            <p>${completed}</p>
            <span>${id}</span> 
            `
       }catch (e) {
           console.log(e)
       }
    }
    f()
}
firstSlider()
nextButton.onclick = () => {
    cardId++
    firstSlider()
}
prevButton.onclick = () => {
    cardId--
    firstSlider()
}
const log = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    console.log(data)
}
log()

// weather

const SearchInput = document.querySelector(".cityName")
// const searchBtn = document.querySelector("#search")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")

const API = "e417df62e04d3b1b111abeab19cea714"
const URL = "http://api.openweathermap.org/data/2.5/weather"
SearchInput.oninput = async () => {
    try {
        // console.log(data.name, data.main.temp)
        const response = await fetch(`${URL}?q=${SearchInput.value}&appid=${API}&units=metric`)
        const data = await response.json()
        city.innerHTML = data.name || "city is not"
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp) + "&deg;" + "C" : ""
    } catch (e) {
        console.log(e)
    }
    //finally {
    //     console.log("ok")
    // }
    // .then((response) => response.json())
    // .then(data => {
    //     //
    // })
}

