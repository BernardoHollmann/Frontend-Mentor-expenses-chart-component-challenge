window.onload = function(){

    function fetchChartData(){
        return fetch('./data.json').then(resp => resp.json()) //.then(data => console.log(data));
    }

    const data = fetchChartData();

    const xValues = [];
    const yValues = [];

    data.then(data => {
        data.forEach(item => {
            xValues.push(item.day)
            yValues.push(item.amount)
        });

        const barColors = "hsl(10, 79%, 65%)";

        new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: [
                    barColors,
                    barColors,
                    'hsl(186, 34%, 60%)',
                    barColors,
                    barColors,
                    barColors,
                    barColors
                  ],
                data: yValues
            }]
        },
        options: {
            legend: {
                display: false
            },
            tooltips: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    title: function(tooltipItem, data) {
                        return ''
                    },
                    label: function(tooltipItem) {
                        return "$" + Number(tooltipItem.yLabel);
                    },
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false 
                    }   
                }]
            }  
        }     
        });
    })
}