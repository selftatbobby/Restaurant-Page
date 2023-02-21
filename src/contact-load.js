import { contentElement } from "./page-load";
let contactElement = document.createElement("div");
let contactContent = document.createElement("p");

const contactLoad = () => {
    //Add menu elements to contentElement
    contentElement.appendChild(contactElement);
    contactElement.classList.add("tabcontent");

    contactContent.innerHTML = "Contact info: (420) 696 9696. Address: Google 'one bite resturant', we're located right next to your kitchen.";
    contactElement.appendChild(contactContent);

    //Hide menuElement
    contactElement.style.display = "none";
    
}

export { contactLoad, contentElement, contactElement, contactContent };