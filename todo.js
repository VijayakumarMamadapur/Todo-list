let inputbox = document.querySelector('#inputbox');
let list = document.querySelector('#list');

inputbox.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addItem(inputbox.value); // Pass the value of inputbox
        inputbox.value = ""; // Clear the input box
    }
});

let addItem = (value) => { // Change the parameter name from 'inputbox' to 'value'
    let listItem = document.createElement("li");
    listItem.innerHTML = `${value}<i></i>`; // Use backticks and ${} for template literal

    listItem.addEventListener("click", function () {
        this.classList.toggle('done');
    });

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });

    list.appendChild(listItem);
}
