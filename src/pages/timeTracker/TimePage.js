import React from "react";
import ReactDOM from "react-dom";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

export function TimePage() {
    const chartData = [
        {
            label: "Senin",
            value: "12"
        },
        {
            label: "Selasa",
            value: "10"
        },
        {
            label: "Rabu",
            value: "6"
        },
        {
            label: "Kamis",
            value: "6"
        },
        {
            label: "Jum'at",
            value: "8"
        },
        {
            label: "Sabtu",
            value: "2"
        },
        {
            label: "Minggu",
            value: "0"
        }
    ];

    // STEP 3 - Creating the JSON object to store the chart configurations
    const chartConfigs = {
        type: "column2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                //Set the chart caption
                caption: "Countries With Most Oil Reserves [2017-18]",
                //Set the chart subcaption
                subCaption: "In MMbbl = One Million barrels",
                //Set the x-axis name
                xAxisName: "Country",
                //Set the y-axis name
                yAxisName: "Reserves (MMbbl)",
                numberSuffix: "Jam",
                //Set the theme for your chart
                theme: "fusion"
            },
            // Chart Data
            data: chartData
        }
    };

    return (
        <div className="py-20">
            <ReactFC {...chartConfigs} />
        </div>
    )
}