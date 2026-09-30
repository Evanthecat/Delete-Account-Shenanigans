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
        popupIndex = index + 1;
        popup(
            popupData[popupIndex]["width"],
            popupData[popupIndex]["height"],
            popupData[popupIndex]["text"],
            popupData[popupIndex]["buttonText"],
            popupIndex
        )
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