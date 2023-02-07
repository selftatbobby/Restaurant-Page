import "./style.css";
import { pageLoad, contentElement, headerElement, buttonElement, 
    buttonElement1, buttonElement2, mainElement, imageElement, sloganElement, tabcontent } from './page-load';


pageLoad();

function displayReset(target) {
    var i, tablinks;  
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    //Removes 'active' class from all buttons with class 'tablinks'
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Adds 'active' class to current target button
    target.currentTarget.className += " active";

    //Shows the selected tab's content

}


buttonElement.addEventListener("click", displayReset);
buttonElement1.addEventListener("click", displayReset);
buttonElement2.addEventListener("click", displayReset);


