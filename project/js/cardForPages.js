// Cards
const $cards = document.querySelector('.cards');

const url = 'https://jsonplaceholder.typicode.com/posts';

async function fetchCardsData() {
    try {
        const response = await fetch(`${url}?_limit=8`);
        const data = await response.json();

        data.forEach((card) => {
            const cardBlock = document.createElement('div');
            cardBlock.setAttribute('class', 'card');
            cardBlock.innerHTML = `
                <h2 class="title">${card.title}</h2>
                <div class="Img">
                    <img src="../images/IAm.jpg" alt="">
                </div?>
                <span class="body">${card.body}</span>
            `;
            $cards.append(cardBlock);
        });
    } catch (error) {
        console.log(error);
    }
}

fetchCardsData();





