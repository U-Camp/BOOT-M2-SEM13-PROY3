const currencyDate = document.getElementById("currency-date")
const btnDate = document.getElementById("btn-date")
var ctx = document.getElementById('myChart').getContext('2d');



const state = {
    label: "hola",
    rates: "",
    labels: "",
    dataValues: ""
}


function fetchData(date){
    console.log(date)
    let dateToLookFor = date
    if(!dateToLookFor){
        dateToLookFor = "latest"
    }

    const key = "30def6fe443530fb27395a0e260193cf"
    return fetch(`https://data.fixer.io/api/${dateToLookFor}?access_key=${key}&base=EUR&symbols=USD,GBP,MXN,CAD,ERN,BYN,CUP`).then((res) => {
        return res.json()
    }).then(data => {
        state.rates = data.rates
        state.label = "Tipo de cambio EUR"
        state.labels = Object.keys(data.rates)
        state.dataValues = Object.values(data.rates)
    })   
}

function generateChart(dataLabel, dataLabels, dataValues){
    console.log(dataLabels)
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataLabels,
            datasets: [{
                label: dataLabel,
                data: dataValues,
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}




const update = () => {
    myChart.destroy()
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["1"],
            datasets: [{
                label: "cambio",
                data: ["3"],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const init = async () => {
    await fetchData()
    await generateChart(state.label,state.labels,state.dataValues)
}

init()