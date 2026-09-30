popupData = [
    {
        "width": "10px",
        "height": "10px",
        
    }
]

function popup(width, height, text, buttonText) {
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

    closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.onclick = () => {
        popupElement.remove();
    }

    const container = document.getElementById("container");
    container.append(popupElement);
    popupElement.append (closeButton);
    popupElement.append(message);
    popupElement.append(button)
}