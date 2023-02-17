import spoonCereal from "../src/spoon-cereal.png";

let contentElement = document.getElementById("content");
let headerElement = document.createElement("div");
let buttonElement = document.createElement("button");
let buttonElement1 = document.createElement("button")
let buttonElement2 = document.createElement("button")
let mainElement = document.createElement("div");
let imageElement = document.createElement("img");
let sloganElement = document.createElement("p");
let tabcontent = document.getElementsByClassName("tabcontent");

const pageLoad = () => {

    //Add button elements to contentElement
    contentElement.appendChild(headerElement); 
    headerElement.appendChild(buttonElement);
    buttonElement.innerHTML = "Home";
    headerElement.appendChild(buttonElement1);
    buttonElement1.innerHTML = "Menu";
    headerElement.appendChild(buttonElement2);
    buttonElement2.innerHTML = "Contact";
    buttonElement.classList.add("tablinks");
    buttonElement1.classList.add("tablinks");
    buttonElement2.classList.add("tablinks");

    
    //Add content elements to contentElement
    contentElement.appendChild(mainElement);
    mainElement.classList.add("tabcontent");
    
    mainElement.appendChild(sloganElement);
    sloganElement.innerHTML = "Food tastes good. At One Bite, TRY MORE with LESS!";
    

    //Add image content to mainElement
    mainElement.appendChild(imageElement);
    // imageElement.src = "../src/spoon-cereal.png";
    imageElement.src = spoonCereal;
    imageElement.alt = "Spoon of cereal"
}

export { pageLoad, contentElement, headerElement, buttonElement, buttonElement1, buttonElement2, mainElement, imageElement, sloganElement, tabcontent };

