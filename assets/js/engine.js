const emojis = [
    "😶‍🌫️", "😶‍🌫️", "🤣", "🤣",
    "🤡", "🤡", "👾", "👾",
    "🐭", "🐭", "🦈", "🦈",
    "🪸", "🪸", "🧌", "🧌"
];

let openedCards = [];

let shuffleEmojis = emojis

/*
let shuffleEmojis = emojis.sort( () =>{
     Math.random() > 0.5 ? 2 : -1 
    })
*/
for(let i=0; emojis.length; i++){
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = shuffleEmojis[i]
    document.querySelector(".game").appendChild(box)
}

//alert("Eita")