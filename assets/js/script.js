const myWorld = [
    "BONJOUR",
    "BONSOIR",
    "AUREVOIR"
];

const allButton = document.querySelectorAll("button[data-letter]");

test.addEventListener("click", function () {
    const selectDiv = document.querySelectorAll("div[data-letterguest]");
    console.log(selectDiv.length)
    if (selectDiv.length < 1) {
        let wordRandom = myWorld[Math.floor(Math.random() * 3)];
        for (i = 0; i < wordRandom.length; i++) {
            console.log(wordRandom[i]);
            let createDiv = document.createElement("div");
            createDiv.setAttribute("data-letterguest", wordRandom[i]);
            createDiv.innerHTML = wordRandom[i];
            document.body.appendChild(createDiv);
        }
    } else {
        location.reload();
    }
});



allButton.forEach(element => {
    element.addEventListener("click", function () {
        const allDiv = document.querySelectorAll("div");
        this.disabled = true;
        for (i = 0; i < allDiv.length; i++) {
            if (this.dataset.letter == allDiv[i].dataset.letterguest) {
                allDiv[i].style.color = "red";
                this.value = 1;
            } else {
                console.log("Erreur");
            }
        }
        if (this.value == 1){
            this.style.background = "green";
            this.style.color = "white"
        } else {
            this.style.background = "red";
            this.style.color = "white"
            if(life.value == 0){
                life.value = "Vous etes mort";
            } else {
                life.value--;
            }

        }
    });
});