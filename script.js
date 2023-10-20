// Denne funksjonen skal kobles opp til button i HTML via onclick.
function unitConverter() {
    //Henter verdier fra elementene med angitte ID'er i de fire neste const linjene
    const userInput = document.querySelector("#userInputID").value;
    console.log(userInput);
    const  fromValue = document.querySelector("#fromValueID").value;
    console.log(fromValue);
    const toValue = document.querySelector("#toValueID").value;
    console.log(toValue);
    const displayValue = document.querySelector("#displayValueID");
    console.log(displayValue);
    //Har logget verdiene til konsollen hver for seg for feilsøking


//Setter opp en tom let variabel for å lagre resultatet som utregnes i tråd med if/else linjene som kodes under.
    let result;

/* Her kommer de tidligere nevnte if/else kode linjene som sjekker om "fromValue" og "toValue" variablene passer sammen,
slik at riktig mattematisk utregning, i henhold til veriene jeg har satt opp her, kan utføres. */

    if (fromValue === "cm" && toValue === "m") {
        result = userInput / 100; //Konverter centimeter til meter
    } else if (fromValue === "cm" && toValue === "km") {
        result = userInput / 100000; //Konverter centimeter til kilometer
    } else if (fromValue === "m" && toValue === "cm") {
        result = userInput * 100; //Konverter meter til centimeter
    } else if (fromValue === "m" && toValue === "km") {
        result = userInput / 1000; //Konverter meter til kilometer
    } else if (fromValue === "km" && toValue === "cm") {
        result = userInput * 100000; //Konverter kilometer til centimeter
    } else if (fromValue === "km" && toValue === "m") {
        result = userInput * 1000; //Konverter meter til kilometer
    }

    //Kode for å vise en error pop-up hvis man prøver å konvertere til og fra samme enhet
    if (fromValue === "cm" && toValue === "cm") {
        alert("Enheten kan ikke konverteres til samme enhet som er satt.\nPrøv igjen.");
    }
    if (fromValue === "m" && toValue === "m") {
        alert("Enheten kan ikke konverteres til samme enhet som er satt.\nPrøv igjen.");
    }
    if (fromValue === "km" && toValue === "km") {
        alert("Enheten kan ikke konverteres til samme enhet som er satt.\nPrøv igjen.");
    }

    //Koden under gjør at JavaScript viser resultatet av utregningen i nettleseren
    //Legger ved en .toFixed(4) til result, slik at antall desimal som vises er begrenset til 4.
    displayValue.textContent = result.toFixed(4);
}