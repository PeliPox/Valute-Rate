const btnRestart = document.querySelector('#restart')
btnRestart.addEventListener('click', function () {
    console.log('hello!')
});

async function getCurrency(){
    const url = "https://www.cbr-xml-daily.ru/daily_json.js"
    const response = await fetch(url)
    const data = await response.json()
    renderRates(data)
}

getCurrency()

function renderRates(data) {
    const usdRate = data.Valute.USD.Value
    // const eurRate = data.Valute.EUR.Value

    const usdElement = document.querySelector('#usd')
    // const eurElement = document.querySelector('#eur')

    usdElement.innerText = usdRate
    // eurElement.innerText = eurRate
    console.log(`USD = ${usdRate}`)
}

const valuteForm = document.querySelector('#valute-form')
const valuteInput = document.querySelector('#valute-input')

valuteForm.addEventListener('submit', renderRates)
function formHandler(event){
    event.preventDefault()
    const valuteName = valuteInput.value

}