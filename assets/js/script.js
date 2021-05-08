const myWord = [
    "BONJOUR",
    "BONSOIR",
    "AUREVOIR"
];

const allButton = document.querySelectorAll("button[data-letter]");

window.addEventListener("DOMContentLoaded", function () {
    let wordRandom = myWord[Math.floor(Math.random() * 3)];
    for (i = 0; i < wordRandom.length; i++) {
        let createDiv = document.createElement("div");
        createDiv.setAttribute("data-letterguest", wordRandom[i]);
        createDiv.setAttribute("class", "invisible");
        createDiv.innerHTML = "_";
        wordGuest.appendChild(createDiv);
    }
});

buttonReset.addEventListener("click", function () {
    const selectDiv = document.querySelectorAll("div[data-letterguest]");
    if (selectDiv.length > 1) {
        location.reload();
        //     for (i = 0; i < selectDiv.length; i++) {
        //         selectDiv[i].remove();
    }
    //     let wordRandom = myWord[Math.floor(Math.random() * 3)];
    //     for (i = 0; i < wordRandom.length; i++) {
    //         let createDiv = document.createElement("div");
    //         createDiv.setAttribute("data-letterguest", wordRandom[i]);
    //         createDiv.setAttribute("class", "invisible");
    //         createDiv.innerHTML = wordRandom[i];
    //         wordGuest.appendChild(createDiv);
    //     }
    // }
});

allButton.forEach(element => {
    element.addEventListener("click", function () {
        const allDiv = document.querySelectorAll("div[data-letterguest]");
        this.disabled = true;
        for (i = 0; i < allDiv.length; i++) {
            if (this.dataset.letter == allDiv[i].dataset.letterguest) {
                allDiv[i].className = "visible";
                allDiv[i].innerHTML = this.dataset.letter;
                this.value = 1;
                console.log("toto")
            }
        }
        if (this.value == 1) {
            this.style.background = "green";
            this.style.color = "white";
        } else {
            this.style.background = "red";
            this.style.color = "white";
            if (life.value == 1) {
                life.value = "Vous etes mort";
                for (i = 0; i < allButton.length; i++) {
                    allButton[i].disabled = true;
                }
            } else {
                life.value--;
            }
        }
    });
});