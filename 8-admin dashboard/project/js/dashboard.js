$('.counter-up').counterUp({
    delay: 10, 
    time: 1000
})

let dateArr = ['jul 21', 'jul 20', 'jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12'];
let orderCountArr = [7,5,6,4,6,4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
   
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Orders Count',
                data: orderCountArr,
                backgroundColor: [
                    '#007bff30',
                ],
                borderColor: [
                    '#007bff',
                ],
                borderWidth: 1,
                tension:0
            },
            {
                label: 'Viewer Count',
                data: viewerCountArr,
                backgroundColor: [
                    '#28a74530',
                ],
                borderColor: [
                    '#28a745',
                ],
                borderWidth: 1,
                tension:0
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                ticks: {
                    beginAtZero: true
                }
            }],
           xAxes:[{
               display: false,
               grildLines: [{
                   
               }]
           }]
        },
        legend:{
            display: true,
            shape:"circle",
            position: 'top',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});

let orderFormPlace = [5,15,7,20,9];
let place = ["YGN","MDY","NPY","SHAN","MGW"]

const OP = document.getElementById('op').getContext('2d');
const OPChart = new Chart(OP, {
    type: 'doughnut',
    data: {
        labels: place,
        datasets: [{
            label: '# of Votes',
            data: orderFormPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            lineTension: 0,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                display:false,
                ticks: {
                    beginAtZero: true
                }
            }],
           xAxes:[{
               display: false,
               grildLines: [{
                   
               }]
           }]
        },
        legend:{
            display: true,
            shape:"circle",
            position: 'bottom',
            labels: {
                fontColor: '#333',
                usePointStyle:true
            }
        }
    }
});