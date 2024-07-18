//  Variables  
var newDate1;
var newDate2;



function createPieChart() {
  var xValues = ["Income", "Expense"];
  var yValues = [50, 50];
  var barColors = ["red", "green"];

  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Balance from " + newDate1 + " to " + newDate2,
      },
    },
  });



}



$(document).ready(function() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    var day = ("0" + currentDate.getDate()).slice(-2);
    var dayOne = "01";
    var formattedDate = year + '-' + month + '-' + day;
    var formattedDate2 = year + '-' + month + '-' + dayOne;


    $('#current-date').val(formattedDate);
    $('#first-day-month').val(formattedDate2);

    newDate1 = formattedDate;
    newDate2 = formattedDate2;

    

});


$("#open-navbar-menu").click(function(){
    $(".menu-components").show();

});


$("#close-menu-drop").click(function() {
    $(".menu-components").hide();
});



$("#display-piechart").click(function() {
  createPieChart();
  $(".modal").show();  
  
});

$("#current-date").on('change', function(){
   
  newDate1 = $(this).val();
  
});


$("#first-day-month").on('change',function(){
  newDate2 = $(this).val(); 

});


$(".close-modal").click(function(){
  $(".modal").hide(); 
});

