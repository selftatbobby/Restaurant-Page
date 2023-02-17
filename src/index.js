import "./style.css";
import { pageLoad, contentElement, headerElement, buttonElement, 
    buttonElement1, buttonElement2, mainElement, imageElement, sloganElement, tabcontent } from "./page-load";
import { menuLoad, menuElement, menuContent } from "./menu-load";
import { contactLoad, contactElement, contactContent } from "./contact-load";

let displayTab0 = () => {
    var i;  

    //Set all tabcontent classed elements' display to none
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //Shows the selected tab's content
    tabcontent[0].style.display = "block";
}

let displayTab1 = () => {
    var i;  

    //Set all tabcontent classed elements' display to none
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //Shows the selected tab's content
    tabcontent[1].style.display = "block";
}

let displayTab2 = () => {
    var i;  

    //Set all tabcontent classed elements' display to none
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //Shows the selected tab's content
    tabcontent[2].style.display = "block";
}

pageLoad();
menuLoad();
contactLoad();

buttonElement.classList.add("active");

function displayTab(index) {
    var i;  

    //Set all tabcontent classed elements' display to none
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    //Removes 'active' class from all buttons with 'tablinks' class 
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }

    //Adds 'active' class to current target button
    //e.currentTarget is only available whle the event is being handled
    // e.target.className += " active";
    // console.log(e.currenTarget);
    // this.className += " active";
    // console.log(this);

    //Shows the selected tab's content
    tabcontent[index].style.display = "block";
    console.log(tabcontent[index]);

}



//highlights selected tab, dehighlights others, and hides all tab content
function currentTab(e) {
    var i, tablinks;

    //Set all tabcontent classed elements' display to none
    // for (i = 0; i < tabcontent.length; i++) {
    //     tabcontent[i].style.display = "none";
    //   }

    //Removes 'active' class from all buttons with 'tablinks' class   
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

    //Adds 'active' class to current target button  
    e.currentTarget.className += " active";
    // console.log(e.currentTarget);

 

}
// console.log(tabcontent[0]);
// console.log(tabcontent[1]);


buttonElement.addEventListener("click", currentTab);
buttonElement.addEventListener("click", displayTab0)

buttonElement1.addEventListener("click", currentTab);
buttonElement1.addEventListener("click", displayTab1);

buttonElement2.addEventListener("click", currentTab);
buttonElement2.addEventListener("click", displayTab2);

// buttonElement.onclick = displayReset;
// buttonElement.addEventListener("click", displayReset);
// buttonElement1.addEventListener("click", displayReset);
// buttonElement2.addEventListener("click", displayReset);



