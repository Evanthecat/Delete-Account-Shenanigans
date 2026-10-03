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

function createPopup(width, height, text, buttonText, onClick) {
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

    button.onclick = onClick;

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

function closePopup() {
    let popup = document.querySelector(".popup");

    if (popup) {
        popup.classList.add("deleting");
    
        popup.addEventListener('transitionend', function() {
            popup.remove();
        });
    }
}

function popup(width, height, text, buttonText, index) {
    let onClick = () => {
        if (index == 8) {
            deleteButton = document.querySelector(".delete-button");
            deleteButton.style.display = "none";

            startShuffle(3, 1, container, 0);
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

        closePopup();
    }

    createPopup(width, height, text, buttonText, onClick);
}

shuffleData = [
    {
        "columns": 3,
        "rows": 1,
        "width": "200px",
        "height": "100px",
        "winText": "Seems like that was too easy for you! Let me try something harder...",
        "loseText": "Ha! This game is working much better!",
        "buttonWinText": "Next",
        "buttonLoseText": "Try again",
        "shuffles": 10,
        "shuffleSpeed": 400
    },
    {
        "columns": 3,
        "rows": 2,
        "width": "200px",
        "height": "100px",
        "winText": "Still not enough? How about 3x3?",
        "loseText": "You beat me last round, I beat you this round. Let's call it a tie so far.",
        "buttonWinText": "Next",
        "buttonLoseText": "Try again",
        "shuffles": 50,
        "shuffleSpeed": 200
    },
    {
        "columns": 3,
        "rows": 3,
        "width": "200px",
        "height": "100px",
        "winText": "Seriously? How are you still here? Alright, next round.",
        "loseText": "Yes! I won! You're way too good at this, you know.",
        "buttonWinText": "Next",
        "buttonLoseText": "Try again",
        "shuffles": 50,
        "shuffleSpeed": 200
    },
    {
        "columns": 4,
        "rows": 4,
        "width": "200px",
        "height": "150px",
        "winText": "I have no words. I guess I'll have to step it up for the final round. I'm thinking something other than cups this time.",
        "loseText": "How has it taken you this long to lose? I can barely process information that fast!",
        "buttonWinText": "Next",
        "buttonLoseText": "Try again",
        "shuffles": 50,
        "shuffleSpeed": 150
    }
]

let bulletsOn = true;

function win(container) {
    bulletsOn = false;

    let bullets = document.querySelectorAll(".bullet");
    bullets.forEach(bullet => {
        bullet.remove()
    });

    let cups = document.querySelectorAll(".cup");
    cups.forEach(cup => {
        cup.remove();
    });

    let deleteButton = document.querySelector(".delete-button");
    deleteButton.remove();

    h1 = document.createElement("h1");
    h1.innerHTML = "Successfully Deleted Account!";

    container.append(h1);

    closePopup();
}

function lose(container) {
    bulletsOn = false;

    let bullets = document.querySelectorAll(".bullet");
    bullets.forEach(bullet => {
        bullet.remove()
    });

    let cups = document.querySelectorAll(".cup");
    cups.forEach(cup => {
        cup.remove();
    });

    let deleteButton = document.querySelector(".delete-button");
    deleteButton.remove();

    h1 = document.createElement("h1");
    h1.innerHTML = "You Lost! Refresh the page to try again.";

    closePopup();

    container.append(h1);
}

function spawnBullet(container) {
    if (bulletsOn) {
        setTimeout(() => {
            let bullet = document.createElement('img');

            let randomNumber = Math.random();
            bullet.style.left = String(90 * randomNumber) + "vw";
            
            bullet.className = "bullet";
            bullet.src = "X_Icon.png";

            container.append(bullet);

            bullet.addEventListener('animationend', function() {
                bullet.remove();
            });

            spawnBullet(container);

            bullet.addEventListener('mouseover', function() {
                lose(container);
            });
        }, 50);
    }
}

function finalStage(container) {
    let deleteButton = document.querySelector(".delete-button");
    deleteButton.remove();

    setTimeout(() => {
        spawnBullet(container);

        deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Account";
        deleteButton.className = "delete-button";

        let onClick = () => {
            win(container);
        }

        deleteButton.onclick = () => {
            createPopup("200px", "100px", "Delete your Account?", "Yes", onClick)
        }
        container.append(deleteButton)
    }, 1000);
}

function startShuffle(columns, rows, container, index) {
    for (let row = 0; row < columns; row++) {
        for (let column = 0; column < rows; column++) {
            let cup = document.createElement('img');
            cup.src = "CupDemoSprite.png"
            cup.className = "cup";

            const margin = 10;

            cup.style.width = "min(" + String(100 / columns - 2 * margin) + "vw, " + String(100 / columns - 2 * margin) + "vh" + ")";
            cup.style.left = "min(" + String(100 / columns * row + margin) + "vw, " + String(100 / columns * row + margin) + "vh" + ")";
            cup.style.top = "min(" + String(100 / columns * column + margin) + "vw, " + String(100 / columns * column + margin) + "vh" + ")";
            cup.style.transition = "transition: left " + shuffleData[index]["shuffleSpeed"] + " top " + shuffleData[index]["shuffleSpeed"]

            container.append(cup);
        }
    }

    const cups = document.querySelectorAll(".cup");
    const correctCup = cups[Math.floor(Math.random() * cups.length)];

    setTimeout(() => {
        correctCup.classList.add("correct-cup");
    }, 1000);

    for (i = 1; i <= shuffleData[index]["shuffles"]; i++) {
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
        }, 1500 + i * shuffleData[index]["shuffleSpeed"]);
    }

    cups.forEach(cup => {
        cup.onclick = () => {
            // const onClick = () => {
            //     startShuffle(
            //         shuffleData[index]["columns"], 
            //         shuffleData[index]["rows"], 
            //         container, 
            //         index
            //     );

            //     closePopup();
            // }

            // createPopup(
            //     shuffleData[index]["width"],
            //     shuffleData[index]["height"],
            //     shuffleData[index]["loseText"],
            //     shuffleData[index]["buttonLoseText"],
            //     onClick
            // )
            lose(container);
        }
    });
    correctCup.onclick = () => {
        const oldCups = document.querySelectorAll(".cup");

        oldCups.forEach(cup => {
            cup.remove();
        });
        
        let onClick;
        if (index < 3) {
            onClick = () => {
                startShuffle(
                    shuffleData[index + 1]["columns"], 
                    shuffleData[index + 1]["rows"], 
                    container, 
                    index + 1
                );

                closePopup();
            }
        }
        else {
            onClick = () => {
                closePopup();

                const oldCups = document.querySelectorAll(".cup");

                oldCups.forEach(cup => {
                    cup.remove();
                });

                finalStage(container);
            }
        }

        createPopup(
            shuffleData[index]["width"],
            shuffleData[index]["height"],
            shuffleData[index]["winText"],
            shuffleData[index]["buttonWinText"],
            onClick
        )
    }
}