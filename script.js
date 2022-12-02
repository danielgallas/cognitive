// getting info from submit form

var form = document.getElementById("boxOne");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const emotion = document.getElementById("emotion").value;
    const description = document.getElementById("description").value;
    console.log(emotion);
    console.log(description);
    const boxOneDone = document.createElement("p");
    // const newContent = document.createTextNode("Emotion: " + emotion);
    // boxOneDone.classList.add('boxOne');
    boxOneDone.innerHTML = `<h2>Emotion: ${emotion}</h2>
    <h3>Description: ${description}</h3>
    `;
    form.replaceWith(boxOneDone);
});

