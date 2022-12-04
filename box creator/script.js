// defining global scope variables and getting info from html

var numberOfBoxes = 1;
var currentBox = "box " + numberOfBoxes;
var currentForm = "form " + numberOfBoxes;
var form = document.getElementById(currentForm);
var box = document.getElementById(currentBox);
var container = document.getElementById("container");

// creating a box

function createBox(thisBox) {
    currentBox = "box " + numberOfBoxes;
    currentForm = "form " + numberOfBoxes;
    form = document.getElementById(currentForm);
    box = document.getElementById(currentBox);
    console.log(currentBox);
    console.log(currentForm);
    console.log(form);    
    console.log(box);    
    
    const closingBox = document.createElement("p");
    closingBox.innerHTML = `<h2>Box closed</h2>
    <h3>Description: Now open a new box</h3>
    `;
    form.replaceWith(closingBox);
    
    numberOfBoxes = thisBox + 1;
    currentBox = "box " + numberOfBoxes;
    const newBoxBelow = document.createElement("div");
    newBoxBelow.setAttribute("id", currentBox);
    newBoxBelow.classList.add("grid-item");
    newBoxBelow.innerHTML = `<h3>This is the new stuff! Box number ${numberOfBoxes}</h3>
    <form id="form ${numberOfBoxes}">
    <button type="submitAgain">Submit</button>
    </form>`;
    currentForm = "form " + numberOfBoxes;
    form = document.getElementById(currentForm);
    container.append(newBoxBelow);
};

// when submit is clicked

container.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("numberOfBoxes = " + numberOfBoxes);
    createBox(numberOfBoxes);
    console.log("numberOfBoxes = " + numberOfBoxes);
});

container.addEventListener("submitAgain", function(event){
    event.preventDefault();
    console.log("numberOfBoxes = " + numberOfBoxes);
    createBox(numberOfBoxes);
    console.log("numberOfBoxes = " + numberOfBoxes);
});

