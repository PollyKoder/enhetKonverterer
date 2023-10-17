// Denne funksjonen skal kobles opp til button i HTML via onclick.
function unitConverter() {
    const userInput = document.querySelector("#userInputID").value;
    console.log(userInput);
    const  fromValue = document.querySelector("#fromValueID").value;
    console.log(fromValue);
    const toValue = document.querySelector("#toValue").value;
    console.log(toValue);
    const displayValue = document.querySelector("#displayValueID").value;
    console.log(displayValue);

    let result;

    if (fromValue === "cm" && toValue === "m") {
        result = userInput / 100;
    }

    displayValue.textContent = result;
}