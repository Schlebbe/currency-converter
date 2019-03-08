let button = document.getElementById("currencyConvert");
button.addEventListener("click", Convert);

// let globalResultLmao = 
GetData();
var result;

async function GetData() {
    let url = "https://openexchangerates.org/api/latest.json?app_id=548eceb07c57435397f105655e9f882c";
    result = await FetchData(url);
    let currencies = document.querySelectorAll(".currency");

    for (const property in result.rates) {
        if (result.rates.hasOwnProperty(property)) {
            const currency = result.rates[property];

            // console.log(property + " " + currency);
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
    return result;
}

async function FetchData(url) {
    let promise = await fetch(url);
    let data = await promise.json();
    return data;
}

function Convert() {
    let currencyInput = document.getElementById("currencyInput").value;
    let currencyFrom = document.getElementById("currencyFrom").value;
    let currencyTo = document.getElementById("currencyTo").value;
    let buyOrSell = document.getElementsByName("buyOrSell");
    //let newValue = wjfhiuhf

    for (const radio of buyOrSell) {
        if (radio.checked) {
            buyOrSell = radio.value; //True = buy, false = sell.
        }
    }

    for (const property in result.rates) {
        if (result.rates.hasOwnProperty(property)) {
            const currencyFromValue = result.rates[property];

            if (property == currencyFrom) {
                // alert(currencyFromValue); //formula = x/firstrate*2ndrate

                for (const key in result.rates) {
                    if (result.rates.hasOwnProperty(key)) {
                        const currencyToValue = result.rates[key];
                        if (currencyInput != null && key == currencyTo) {
                            newValue = currencyInput / currencyFromValue * currencyToValue;
                            alert(`From ${currencyInput} ${property} to ${key}: ${newValue}`);

                        }

                    }
                }
            }
            // alert(element);
        }
    }
    // if (condition) {

    // }
    // let test = 

}