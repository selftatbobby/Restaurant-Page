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

    
    // mainElement.classList.add("main");
    mainElement.classList.add("tabcontent");
    contentElement.appendChild(mainElement);
    
    sloganElement.innerHTML = "Food tastes good. At One Bite, TRY MORE with LESS!";
    mainElement.appendChild(sloganElement);

   
    imageElement.src = "../src/spoon-cereal.png";
    mainElement.appendChild(imageElement);
    imageElement.alt = "Spoon of cereal"
}

export { pageLoad, contentElement, headerElement, buttonElement, buttonElement1, buttonElement2, mainElement, imageElement, sloganElement, tabcontent };

