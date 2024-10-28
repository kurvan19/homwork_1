//MODAL
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeIcon = document.querySelector('.modal_close');

const openModals = () => {
    modal.style.display = 'block';
    document.body.style.overflow = "hidden"
}
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflowY = ''
}
modalTrigger.onclick = () => openModals()
closeIcon.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

//timeout modal
/*let timeout
const openModal10Second =() => {
    clearTimeout(timeout)
    timeout = setTimeout(()=> {
    openModals()
}, 120000)}
window.onload = openModal10Second;
document.onmousemove = openModal10Second;
document.onscroll = openModal10Second;
document.onclick = openModal10Second;
const checkScrollBottom = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        userReachedBottom();
        window.removeEventListener('scroll', checkScrollBottom);
    }
};

const userReachedBottom = () => {
    openModals()
};

window.addEventListener('scroll', checkScrollBottom);*/
// post data

const form = document.querySelector('form')
const tg = "@fhgdkfjhajdfhk"
const token = "7583409730:AAGZreGv19bGKnGU3PREXlxUPzMvXw6Qn0Q"
const api_url = `https://api.telegram.org/bot${token}/sendMessage`
form.onsubmit = async (event) => {
    event.preventDefault()
    // console.log(event.target)
    const formData = new FormData(form)
    const user = {}
    formData.forEach((item, index) => {
        // console.log(index, item)
        user[index] = item

    })
    const {name, phone} = user
    const text = `name: ${name} \nphone: ${phone}`
    await fetch(api_url, {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({chat_id: tg, text}),
    })
}