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
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            tooltips: {
                callbacks: {
                  title: function(tooltipItem, data) {
                    return ''
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