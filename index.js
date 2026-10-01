popupData = [
    {
        "width": "200px",
        "height": "100px",
        "text": "Are you sure you want to DELETE YOUR ACCOUNT?",
        "buttonText": "Yes"
    },
    {
        "width": "200px",
        "height": "100px",
        "text": "Absolutely sure? There will be <span style='color: red'>NO WAY TO UNDO THIS!</span>",
        "buttonText": "Yes"
    },
    {
        "width": "200px",
        "height": "150px",
        "text": "Are you absolutely sure??? I'm sure you have many happy memories stored on this account!",
        "buttonText": "..."
    },
    {
        "width": "200px",
        "height": "100px",
        "text": "Hmm.",
        "buttonText": "..."
    },
    {
        "width": "200px",
        "height": "100px",
        "text": "This seems way too easy to be an inconveinience!",
        "buttonText": "..."
    },
    {
        "width": "200px",
        "height": "100px",
        "text": "How about we play a game?",
        "buttonText": "Sure"
    },
    {
        "width": "200px",
        "height": "150px",
        "text": "A simple game of skill. All you have to do is survive five rounds.",
        "buttonText": "Alright"
    },
    {
        "width": "200px",
        "height": "100px",
        "text": "If you win, I'll let you delete your account.",
        "buttonText": "Okay"
    },
    {
        "width": "200px",
        "height": "100px",
        "text": "But if I win, you have to keep your account intact.",
        "buttonText": "Deal"
    }
]

function popup(width, height, text, buttonText, index) {
    const popupElement = document.createElement("div");
    popupElement.className = "popup";
    popupElement.style.width = width;
    popupElement.style.height = height;

    message = document.createElement("p");
    message.innerHTML = text;

    button = document.createElement("button");
    button.className = "popup-button";
    button.innerHTML = buttonText;
    button.style.width = width;
    button.onclick = () => {
        if (index == 0) { // Change back to 8 later
            const popups = document.querySelectorAll(".popup");
            popups.forEach(p => {
                p.remove();
            });

            deleteButton = document.querySelector(".delete-button");
            deleteButton.style.display = "none";

            startShuffle(3, 1, container);
        }
        else {
            popupIndex = index + 1;
            popup(
                popupData[popupIndex]["width"],
                popupData[popupIndex]["height"],
                popupData[popupIndex]["text"],
                popupData[popupIndex]["buttonText"],
                popupIndex
            )
        }
    }

    closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.onclick = () => {
        popupElement.classList.add("deleting");
        
        popupElement.addEventListener('transitionend', function() {
            popupElement.remove();
        });
    }

    const container = document.getElementById("container");
    container.append(popupElement);
    popupElement.append (closeButton);
    popupElement.append(message);
    popupElement.append(button)
}

shuffleData = [
    {
        "columns": 3,
        "rows": 1,
        "winText": "",
        "loseText": ""
    }
]

function startShuffle(columns, rows, container, index) {
    for (row = 0; row < columns; row++) {
        for (column = 0; column < rows; column++) {
            let cup = document.createElement('img');
            cup.src = "CupDemoSprite.png"
            cup.className = "cup";

            const margin = 10;

            cup.style.width = String(100 / columns - 2 * margin) + "vw";
            cup.style.left = String(100 / columns * row + margin) + "vw";
            cup.style.top = String(100 / columns * column + margin) + "vw";

            container.append(cup);
        }
    }

    const cups = document.querySelectorAll(".cup");
    const correctCup = cups[Math.floor(Math.random() * cups.length)];

    setTimeout(() => {
        correctCup.classList.add("correct-cup");
    }, 1000);

    for (i = 1; i <= 5; i++) {
        setTimeout(() => {
            let index1;
            let index2;

            while (true) {
                index1 = Math.floor(Math.random() * cups.length)
                index2 = Math.floor(Math.random() * cups.length)

                if (index1 != index2) {
                    break;
                }
            }

            position1x = cups[index1].style.left;
            position2x = cups[index2].style.left;
            position1y = cups[index1].style.top;
            position2y = cups[index2].style.top;

            cups[index1].style.left = position2x;
            cups[index2].style.left = position1x;
            cups[index1].style.top = position2y;
            cups[index2].style.top = position1y;
        }, 1000 + i * 500);
    }

    cups.forEach(cup => {
        cup.onclick = () => {
            console.log("wrong!");
        }
    });
    correctCup.onclick = () => {
        console.log("correct!");
    }
}