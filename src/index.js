import "./style.css";
import { pageLoad, contentElement, headerElement, buttonElement, 
    buttonElement1, buttonElement2, mainElement, imageElement, sloganElement, tabcontent } from './page-load';


pageLoad();
buttonElement.classList.add("active");

function displayReset(target, index) {
    var i, tablinks;  

    //Set all tabcontent classed elements' display to none
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    //Removes 'active' class from all buttons with 'tablinks' class 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Adds 'active' class to current target button
    target.currentTarget.className += " active";
    console.log(target.currentTarget);

    //Shows the selected tab's content
    // tabcontent[index].style.display = "block";
    // console.log(tabcontent[0]);

}


// buttonElement.addEventListener("click", displayReset);
buttonElement.onclick = displayReset;
buttonElement1.addEventListener("click", displayReset);
buttonElement2.addEventListener("click", displayReset);



