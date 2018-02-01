google.charts.load('current', {
    'packages':['geochart', 'corechart'],
    'mapsApiKey': 'AIzaSyDQVpoQl_Qs9sX8mElHOOvWKK5_n8HKDFw'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    // Create the data table.

    var options_geo = {'title':'Emotional Intelligence',
        'width':1000,
        'height':1000,
    };

    var jsonDataString = $.ajax({
        url:"http://emotional-apps.com/apis/meit/stats/getdata.php?test=1&gender=all&age=all&begindate=2000-01-01&enddate=2014-11-24",
        dataType:"json",
        async:false
    }).done(function(data){
        var dataArray = [["Country", "Score average"]];
        console.log(dataArray)
        $.each(data, function() {
            var countryObject = [this.iso3, parseFloat(this.score_average)];
            dataArray.push(countryObject);
        });

        console.log(dataArray[0][0,1])

        //var ScoreData = google.visualization.arrayToDataTable(dataArray[[1,2]]);


        var options_bar = {
            title: "Emotional intelligence by country",
            width: 1000,
            height: 1000,
            bar: {groupWidth: "95%"},
            legend: {position: "left"},
        }
        //var geochart = new google.visualization.GeoChart(document.getElementById('regions_div'));
        //geochart.draw(emoData, options_geo);
        var barchart = new google.visualization.BarChart(document.getElementById('bar_chart'));
        barchart.draw(emoData, options_bar);
    });


}