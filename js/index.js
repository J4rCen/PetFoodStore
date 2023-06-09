window.addEventListener("scroll", () => {
    let windowHeight = window.scrollY;
    if(windowHeight > 30) {
        up.classList.add("up-show")
        up.classList.remove("up-hide")
    } else {
        up.classList.add("up-hide")
        up.classList.remove("up-show")
    }
})

up.addEventListener("click", ()=> {
    window.scrollTo(screenY, 0)
})

navCatFood.addEventListener("click", ()=> {
    window.scrollTo(0, sectionCatFood-navBar)
})

navDogFood.addEventListener("click", ()=> {
    window.scrollTo(0, sectionDogFood-navBar)
})

navRodentsFood.addEventListener("click", () => {
    window.scrollTo(0, sectionRodentsFood-navBar)
})

buyButton.forEach(item => item.addEventListener("click", () => {
    basket.classList.remove("basket-hide")
    basket.classList.add("basket-show")
    basketImage.setAttribute("src", item.parentElement.childNodes[0].childNodes[0].getAttribute("src"))    
}))

function resetForm() {
    basket.classList.add("basket-hide")
    basket.classList.remove("basket-show")
    basketForm.reset()
}

basketForm.addEventListener("submit", (item) => {
    const data = new FormData(basketForm)
    let checkResult = ""
    for(let a of data) {
        checkResult = a[1]
    }
    
    alert("Вы купили " + item.target[0].value + `${item.target[0].value == 1 ? " упаковку" : item.target[0].value > 1 && item.target[0].value < 5 ? " упаковки" : item.target[0].value >= 5 ? " упаковок" : ""}`+ ", массой " + checkResult)
    
    item.preventDefault();
    resetForm();
})

basketClose.addEventListener("click", () => {
    resetForm();
})

themeChanges.addEventListener("click", ()  => {
    if(docElements.head.children[5].getAttribute("href") == "css/lightTheme.css") {
        docElements.head.children[5].setAttribute("href", "css/darkTheme.css")
    } else {
        docElements.head.children[5].setAttribute("href", "css/lightTheme.css")
    }
})

writeToUsForm.addEventListener("submit", (item) => {
    
    alert("Спасибо мы получили ваше сообщения: " + '"' + item.target[1].value + '"\n' + "Ответ будет отправлен на вашу почту: " + item.target[0].value)

    item.preventDefault()
    writeToUsForm.reset()
})