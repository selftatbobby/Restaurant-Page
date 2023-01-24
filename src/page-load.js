const pageLoad = () => {
    let contentElement = document.getElementById("content");
    let headerElement = document.createElement("div");
    let buttonElement = document.createElement("button");
    let buttonElement1 = document.createElement("button")
    let buttonElement2 = document.createElement("button")

    contentElement.appendChild(headerElement); 
    headerElement.appendChild(buttonElement);
    buttonElement.innerHTML = "Home";
    headerElement.appendChild(buttonElement1);
    buttonElement1.innerHTML = "Menu";
    headerElement.appendChild(buttonElement2);
    buttonElement2.innerHTML = "Contact";

    let mainElement = document.createElement("div");
    contentElement.appendChild(mainElement);
    let sloganElement = document.createElement("p");
    sloganElement.innerHTML = "Food tastes good. At One Bite, TRY MORE with LESS!";
    mainElement.appendChild(sloganElement);

    let imageElement = document.createElement("img");
    imageElement.src = "../src/spoon-cereal.png";
    contentElement.appendChild(imageElement);
    imageElement.alt = "Spoon of cereal"
}

export { pageLoad };