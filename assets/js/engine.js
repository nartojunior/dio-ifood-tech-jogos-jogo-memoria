const emojis = [
    "😶‍🌫️", "😶‍🌫️", "🤣", "🤣",
    "🤡", "🤡", "👽", "👽",
    "🐭", "🐭", "🦈", "🦈",
    "🪸", "🪸", "🧌", "🧌"
];

let openedCards = []

let shuffleEmojis = emojis.sort((a, b) =>
    Math.random() > 0.5 ? 2 : -1
)

shuffleEmojis.forEach((value, i) => {
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = value
    box.onclick = handleClick
    document.querySelector(".game").appendChild(box)
})

function handleClick() {
    console.log("girando")
    if (openedCards.length < 2) {
        this.classList.add("boxOpen")
        openedCards.push(this);
    }

    if (openedCards.length === 2) {
        setTimeout(checkmatch, 500)
    }
}

function checkmatch() {
    if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
        openedCards[0].classList.add("boxMatch")
        openedCards[1].classList.add("boxMatch")        
    }
    else {
        openedCards[0].classList.remove("boxOpen")
        openedCards[1].classList.remove("boxOpen")        
    }

    openedCards = []

    if (document.querySelectorAll(".boxOpen").length === shuffleEmojis.length) {
        alert("Parabéns, você venceu!");
    }
}


  