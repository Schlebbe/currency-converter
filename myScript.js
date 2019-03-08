'use strict';
fillLists();

let input = document.getElementById("currencyInput");
input.addEventListener("keyup", Convert);

let currency = document.querySelectorAll(".currency");
for (const iterator of currency) {
    iterator.addEventListener("change", Convert);
}

function fillLists() {
    let currencies = document.querySelectorAll(".currency");
    api.getData();
    let result = api.getCookie("rates");

    for (const property in result) {
        if (result.hasOwnProperty(property)) {

            let newOption = document.createElement('option');
            let textnode = document.createTextNode(property);
            newOption.appendChild(textnode);

            let newOption2 = document.createElement('option');
            let textnode2 = document.createTextNode(property);
            newOption2.appendChild(textnode2);

            for (const property in currencies) {
                if (currencies.hasOwnProperty(property)) {
                    const currencyFrom = currencies[0];
                    const currencyTo = currencies[1];
                    currencyFrom.appendChild(newOption);
                    currencyTo.appendChild(newOption2);
                }
            }
        }
    }
}

function Convert() {
    let currencyInput = document.getElementById("currencyInput").value;
    let currencyFrom = document.getElementById("currencyFrom").value;
    let currencyTo = document.getElementById("currencyTo").value;
    let newCurrency = document.getElementById("newCurrency");
    let rates = api.getCookie("rates");
    let newValue;

    for (const property in rates) {
        if (rates.hasOwnProperty(property)) {
            const currencyFromValue = rates[property];

            if (property == currencyFrom) {

                for (const key in rates) {
                    if (rates.hasOwnProperty(key)) {
                        const currencyToValue = rates[key];

                        if (currencyInput != null && key == currencyTo) {
                            newValue = currencyInput / currencyFromValue * currencyToValue;
                            newCurrency.value = newValue;
                        }
                    }
                }
            }
        }
    }
}