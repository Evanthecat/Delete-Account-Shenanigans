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
    closeButton.innerHTML = "<span class="icon">"

    const container = document.getElementById("container");
    container.append(popupElement);
    popupElement.append(message);
    popupElement.append(button)
}