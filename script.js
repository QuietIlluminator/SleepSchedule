var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var hours = [];

function display() {
  hours = [];

  hours.push(document.getElementById("sundayHours").value);
  hours.push(document.getElementById("mondayHours").value);
  hours.push(document.getElementById("tuesdayHours").value);
  hours.push(document.getElementById("wednesdayHours").value);
  hours.push(document.getElementById("thursdayHours").value);
  hours.push(document.getElementById("fridayHours").value);
  hours.push(document.getElementById("saturdayHours").value);



  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: days,
      datasets: [{
        data: hours,
        label: "Daily sleep",
        backgroundColor: 'rgb(153, 204, 255)',
        borderColor: 'rgb(51, 153, 255)',
        fill: false
      }]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: 'Tracking Your Sleep',
        fontSize: 36
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Hours',
            fontSize: 36

          }
        }],

        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Days',
            fontSize: 36
          }
        }]
      }
    }
  });

}