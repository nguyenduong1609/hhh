import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function Dashboad3Chart1() {

  
  

  const options = {  
    // fill: {
    //   show: false
    // },
    // chart:{
    //   toolbar: {
    //     show: false
    //   },
    // }, //thanh cong cu

    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 45,
        track: {
          background: 'ggg',
          startAngle: -135,
          endAngle: 45,
        },
        dataLabels: {
          name: {
            show: true,
           
            // offsetY: 0,
          
            color: "#888",
            fontSize: "13px"
          },
          value: {
            fontSize: "20px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      opacity: 0.9,
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Bandwidth Used"],

    

    
  };

  const series = [60];

  return (

    <Fragment>
      <Chart
        options={options}
        series={series}
        type='radialBar'
        height={300}
      />
      {/* <div className="card-footer bg-light text-center">
        <div className="pt-4 pr-4 pl-4">     
          <Chart
            options={options}
            series={series}
            type='area'
            height={150}
          />
        </div>
      </div> */}
    </Fragment>
  );
}





