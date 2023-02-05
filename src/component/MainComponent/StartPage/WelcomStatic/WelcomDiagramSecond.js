import { CategoryScale, Chart, LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend } from 'chart.js';
import React from 'react';
import {Line} from 'react-chartjs-2';



Chart.register( CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0, 30, 50, 81, 100]
        }
    ]
}

export default function WelcomDiagramSecond() {

    return (

        <Line
            data={state}
            options={{
                title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                },
                legend:{
                    display:true,
                    position:'right'
                }
            }}
        />
    );
}