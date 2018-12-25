$(document).ready(function () {

    'use strict';

    // show & hide box
    $('.box').click(function () {
        $(this).toggleClass('show hide');
    });

    // responsive nav
    var nav = $('.nav'),
        animateTime = 500,
        navLink = $('.header .top .navLink');
        navLink.click(function () {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
        } else {
            nav.stop().animate({
                height: '0'
            }, animateTime);
        }
    });

    // responsive options
    // Dropdown toggle
    $('.dropdown-toggle').click(function(){
        $(this).next('.dropdown').toggle();
    });
    
    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
        $('.dropdown').hide();
        }
    });

});

/* Function to animate height: auto */
function autoHeightAnimate(element, time){
  	var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
    	element.height(curHeight); // Reset to Default Height
    	element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
}


// box 1 chart

    var ctx = document.getElementById('myCanvas').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            //labels: ["Positive" ,"Netural", "Negative"],
            datasets: [
                {
                    label: 'Points',
                    backgroundColor: [
                        '#6AB04D',
                        '#B7143F',
                        '#F1C40F'
                    ],
                    data: [50, 25, 35]
                }
            ]
        },
        options: {
            cutoutPercentage: 65
        }
    });

//box 2 chart

var ctx = document.getElementById('canvas2').getContext('2d');
var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: {
        //labels: ["Positive" ,"Netural", "Negative"],
        datasets: [
            {
                label: 'Points',
                backgroundColor: [
                    '#6AB04D',
                    '#B7143F',
                    '#F1C40F'
                ],
                data: [45, 10, 45],
                borderWidth: 11
            }
        ]
    },
    options: {
        rotation: Math.PI * -0.3
    }
});

// map

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#929699");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Add some data
polygonSeries.data = [{
  "id": "RU",
  "name": "Russia : 35",
  "value": 35,
  "fill": am4core.color("#5C5FFF")
}, {
  "id": "CA",
  "name": "Canada : 63",
  "value": 63,
  "fill": am4core.color("#5C5CFF")
}, {
    "id": "BR",
    "name": "Brazil : 23",
    "value": 23,
    "fill": am4core.color("#5C5CFF")
  }];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";