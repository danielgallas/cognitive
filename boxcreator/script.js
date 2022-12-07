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
    
    // closing previous box
    const emotion = document.getElementById("emotion").value;
    const description = document.getElementById("description").value;
    const closingBox = document.createElement("p");
    const newContent = document.createTextNode("Emotion: " + emotion);
    closingBox.innerHTML = `<h2>Emotion: ${emotion}</h2>
    <h3>Description: ${description}</h3>
    `;
    form.replaceWith(closingBox);
    
    numberOfBoxes = thisBox + 1;
    currentBox = "box " + numberOfBoxes;
    const newBoxBelow = document.createElement("div");
    newBoxBelow.setAttribute("id", currentBox);
    newBoxBelow.classList.add("grid-item");
    newBoxBelow.innerHTML = `
    <h2>Box ${numberOfBoxes}</h2>
    <form id="form ${numberOfBoxes}">
        <label for="emotion">Emotion</label><br>
        <input type="text" name="emotion" id="emotion" size="47" value="Happy"><br>
        <label for="description">Description</label><br>
        <textarea name="description" id="description" rows="10" cols="50" placeholder="Please enter a description here" required>A great mood</textarea><br>
        <button type="submit">Submit</button>
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
