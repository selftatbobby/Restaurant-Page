import { contentElement } from "./page-load";
let contactElement = document.createElement("div");
let contactContent = document.createElement("p")

const contactLoad = () => {
    //Add menu elements to contentElement
    contentElement.appendChild(contactElement);
    contactElement.classList.add("tabcontent");

    contactContent.innerHTML = "Contact info: 6969696969";
    contactElement.appendChild(contactContent);

    //Hide menuElement
    contactElement.style.display = "none";
    
}

export { contactLoad, contentElement, contactElement, contactContent };