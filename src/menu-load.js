import { contentElement } from "./page-load";
let menuElement = document.createElement("div");
let menuContent = document.createElement("p")

const menuLoad = () => {
    //Add menu elements to contentElement
    contentElement.appendChild(menuElement);
    menuElement.classList.add("tabcontent");

    menuContent.innerHTML = "The Menu";
    menuElement.appendChild(menuContent);

    //Hide menuElement
    menuElement.style.display = "none";
    
}

export { menuLoad, contentElement, menuElement, menuContent };
