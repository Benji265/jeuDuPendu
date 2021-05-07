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
        createDiv.innerHTML = wordRandom[i];
        document.body.appendChild(createDiv);
    }
});

buttonReset.addEventListener("click", function () {
    const selectDiv = document.querySelectorAll("div");
    if (selectDiv.length > 1) {
        for (i = 0; i < selectDiv.length; i++) {
            selectDiv[i].remove();
        }
        let wordRandom = myWord[Math.floor(Math.random() * 3)];
        for (i = 0; i < wordRandom.length; i++) {
            let createDiv = document.createElement("div");
            createDiv.setAttribute("data-letterguest", wordRandom[i]);
            createDiv.setAttribute("class", "invisible");
            createDiv.innerHTML = wordRandom[i];
            document.body.appendChild(createDiv);
        }
    }
});

allButton.forEach(element => {
    element.addEventListener("click", function () {
        const allDiv = document.querySelectorAll("div");
        this.disabled = true;
        for (i = 0; i < allDiv.length; i++) {
            if (this.dataset.letter == allDiv[i].dataset.letterguest) {
                allDiv[i].className = "visible";
                this.value = 1;
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