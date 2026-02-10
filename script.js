const convertbutton = document.querySelector(".convertbutton")
const ValueToConvert = document.querySelector("#valuetoconvert")
const ValueConverted = document.querySelector("#valueconverted")
const selectcurrency = document.querySelector(".selectcurrency")
const selecttocovert = document.querySelector(".select-to-convert")


function convert() {


    if (selecttocovert.value == "brltoconvert") {

        const inputvalue = document.querySelector(".inputvalue").value

        const brlvalue = 1
        const Dolarvalue = 5.2
        const Eurovalue = 6.2
        const Libravalue = 7.11
        const BTCvalue = 367.24590

        if (selectcurrency.value == "dolar") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputvalue / Dolarvalue)

        }
        if (selectcurrency.value == "euro") {
            ValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputvalue / Eurovalue)

        }
        if (selectcurrency.value == "libra") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputvalue / Libravalue)

        }
        if (selectcurrency.value === "bitcoin") {
            ValueConverted.innerHTML =
                (inputvalue / BTCvalue).toFixed(8) + " BTC"
        }
        if (selectcurrency.value == "brl") {
            ValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputvalue * brlvalue)


        }
        ValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputvalue)
    }

    if (selecttocovert.value == "dolartoconvert") {

        const inputvalue = document.querySelector(".inputvalue").value

        const brlvalue = 5.2
        const Dolarvalue = 1
        const Eurovalue = 0.93
        const Libravalue = 0.79
        const BTCvalue = 0.000015


        if (selectcurrency.value == "brl") {
            ValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputvalue * brlvalue)

        }
        if (selectcurrency.value == "dolar") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputvalue * Dolarvalue)

        }
        if (selectcurrency.value == "euro") {
            ValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputvalue * Eurovalue)

        }
        if (selectcurrency.value == "libra") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputvalue * Libravalue)

        }
        if (selectcurrency.value === "bitcoin") {
            ValueConverted.innerHTML =
                (inputvalue * BTCvalue).toFixed(8) + " BTC"
        }

        ValueToConvert.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputvalue)
    }

    if (selecttocovert.value == "libratoconvert") {

        const inputvalue = document.querySelector(".inputvalue").value

        const brlvalue = 7.11
        const Dolarvalue = 1.26
        const Eurovalue = 1.17
        const Libravalue = 1
        const BTCvalue = 36724.59

        if (selectcurrency.value == "brl") {
            ValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputvalue * brlvalue)

        }
        if (selectcurrency.value == "dolar") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputvalue * Dolarvalue)

        }
        if (selectcurrency.value == "euro") {
            ValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputvalue * Eurovalue)

        }
        if (selectcurrency.value == "libra") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputvalue * Libravalue)

        }
        if (selectcurrency.value === "bitcoin") {
            ValueConverted.innerHTML =
                ((inputvalue * Dolarvalue) / BTCvalue).toFixed(8) + " BTC"


        }

        ValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputvalue)
    }

    if (selecttocovert.value == "eurotoconvert") {

        const inputvalue = document.querySelector(".inputvalue").value

        const brlvalue = 6.20
        const Dolarvalue = 1.08
        const Eurovalue = 1
        const Libravalue = 0.85
        const BTCvalue = 36724.59

        if (selectcurrency.value == "brl") {
            ValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputvalue * brlvalue)

        }
        if (selectcurrency.value == "dolar") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputvalue * Dolarvalue)

        }
        if (selectcurrency.value == "euro") {
            ValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputvalue * Eurovalue)

        }
        if (selectcurrency.value == "libra") {
            ValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputvalue * Libravalue)

        }
        if (selectcurrency.value == "bitcoin") {
            ValueConverted.innerHTML =
                ((inputvalue * Dolarvalue) / BTCvalue).toFixed(8) + " BTC"


        }

        ValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputvalue)
    }

    if (selecttocovert.value == "bitcointoconvert") {
        const inputvalue = Number(document.querySelector(".inputvalue").value);

        const brlvalue = 356728.58;
        const Dolarvalue = 68921.98;
        const Eurovalue = 57651.37;
        const Libravalue = 50142.25;

        if (selectcurrency.value == "brl") {
            ValueConverted.innerHTML =
                new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
                    .format((inputvalue * brlvalue).toFixed(8));
        }

        if (selectcurrency.value == "dolar") {
            ValueConverted.innerHTML =
                new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
                    .format((inputvalue * Dolarvalue).toFixed(8));
        }

        if (selectcurrency.value == "euro") {
            ValueConverted.innerHTML =
                new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })
                    .format((inputvalue * Eurovalue).toFixed(8));
        }

        if (selectcurrency.value == "libra") {
            ValueConverted.innerHTML =
                new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
                    .format((inputvalue * Libravalue).toFixed(8));
        }

        if (selectcurrency.value == "bitcoin") {
            ValueConverted.innerHTML = inputvalue + " BTC";
        }

        ValueToConvert.innerHTML = inputvalue + " BTC";
    }

}


const currencyimgtoconvert = document.querySelector("#imagetoconvert")
const currencynametoconvert = document.querySelector("#currencynametoconvert")
const currencyname = document.querySelector("#currencyname")
const currencyimg = document.querySelector(".currency-img")

function changecurrencytoconvert() {
    if (selecttocovert.value == "brltoconvert") {
        currencynametoconvert.innerHTML = "Real"
        currencyimgtoconvert.src = "./assets/fcf15cc7ea5a0aa77537e7939a6742b588d600a6.png"
    }

    if (selecttocovert.value == "dolartoconvert") {
        currencynametoconvert.innerHTML = "Dólar Americano"
        currencyimgtoconvert.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }
    if (selecttocovert.value == "eurotoconvert") {
        currencynametoconvert.innerHTML = "Euro"
        currencyimgtoconvert.src = "./assets/e821c316359fe6050c52b9c7479798be6e1584e2.png"
    }
    if (selecttocovert.value == "libratoconvert") {
        currencynametoconvert.innerHTML = "Libra"
        currencyimgtoconvert.src = "./assets/Libra.png"
    }
    if (selecttocovert.value == "bitcointoconvert") {
        currencynametoconvert.innerHTML = "bitcoin"
        currencyimgtoconvert.src = "./assets/BTC.png"
    }

    convert()
}

function changecurrency() {

    if (selectcurrency.value == "dolar") {
        currencyname.innerHTML = "Dólar Americano"
        currencyimg.src = "./assets/0bd85ff79a7dabec33201d95eb1a05fdea133971.png"
    }
    if (selectcurrency.value == "euro") {
        currencyname.innerHTML = "Euro"
        currencyimg.src = "./assets/e821c316359fe6050c52b9c7479798be6e1584e2.png"
    }
    if (selectcurrency.value == "libra") {
        currencyname.innerHTML = "Libra"
        currencyimg.src = "./assets/Libra.png"
    }
    if (selectcurrency.value == "bitcoin") {
        currencyname.innerHTML = "bitcoin"
        currencyimg.src = "./assets/BTC.png"
    }
    if (selectcurrency.value == "brl") {
        currencyname.innerHTML = "Real"
        currencyimg.src = "./assets/fcf15cc7ea5a0aa77537e7939a6742b588d600a6.png"
    }
    convert()
}

selectcurrency.addEventListener("change", changecurrency)
convertbutton.addEventListener("click", convert)
selecttocovert.addEventListener("change", changecurrencytoconvert)

