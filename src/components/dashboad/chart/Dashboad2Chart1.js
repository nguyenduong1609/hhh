import React, { Fragment } from 'react';

import Chart from 'react-apexcharts';

export default function Dashboad2Chart1() {

  const options = {  
    // fill: {
    //   show: false
    // },
    chart:{
      toolbar: {
        show: false
      },
    }, //thanh cong cu
    
    markers: {
      size: 5,
      colors: '#ddd',
      strokeColors: '#fff',
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      shape: "circle",
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: undefined,
        sizeOffset: 3
      }
    },

    fill: {
      colors: ['#a36824'],
      opacity: 0.9,
      // type: 'solid',
      gradient: {
          // shade: 'dark',
          // type: "horizontal",
          // shadeIntensity: 0.5,
          gradientToColors: ['#fff'], //cha do thi
          // inverseColors: true,
          // opacityFrom: 1,
          // opacityTo: 1,
          stops: [0, 100, 90], //khoang hien mau
          // colorStops: ['#fff']
      },
      // image: {
      //     src: [],
      //     width: undefined,
      //     height: undefined
      // },
      // pattern: {
      //     style: 'verticalLines',
      //     width: 6,
      //     height: 6,
      //     strokeWidth: 2,
      // },
    },

    dataLabels: {
      enabled: false
    },

    stroke: {
      curve: 'smooth'
    },// kieu duong(cong muot,)

    xaxis: {      
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
      axisBorder: {
        show: false,
        color: '#78909C',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
    },

    yaxis: {
      show: false,
    },

  

    grid: {
      show: false
    },

    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };

  const series = [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
  ];

  // const chart30Options = {
  //   chart: {
  //     toolbar: {
  //       show: false
  //     },
  //     sparkline: {
  //       enabled: true
  //     }
  //   },
  //   dataLabels: {
  //     enabled: true
  //   },
  //   colors: ['#3c44b1'],
  //   stroke: {
  //     color: '#4191ff',
  //     curve: 'smooth',
  //     width: 2
  //   },
  //   xaxis: {
  //     categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     // crosshairs: {
  //     //   width: 1
  //     // }
  //   },
  //   yaxis: {
  //     min: 0
  //   },
  //   legend: {
  //     show: false
  //   }
  // };
  // const chart30Data = [
  //   {
  //     name: 'Customers',
  //     data: [47,, 47, 38, 56, 24, 56, 24, 65]
  //   }
  // ];
  
  // <div className="card-footer bg-light text-center">
  //   <div className="pt-4 pr-4 pl-4">
  //     <Chart
  //       options={options}
  //       series={series}
  //       type='area'
  //       height={350}
  //     />
  //   </div>
  // </div>

  // const options = {
  //   stroke: {
  //     curve: 'smooth'
  //   },
  //   markers: {
  //     size: 0
  //   },
  //   xaxis: {
  //     categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   }
  // };
  // const series = [
  //   {
  //     data: [30, 40, 25, 50, 49, 21, 70, 51]
  //   }
  // ];
  return (

    <Fragment>
      <Chart
        options={options}
        series={series}
        type='area'
        height={217}
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





