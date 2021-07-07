import React, { Component,  Fragment } from "react";
import Chart from "react-apexcharts";

class Dashboad3Chart3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "line",
          toolbar: {
            show: false
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false
          },
          axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
          },

          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,992, 993, 994, 995, 996, 997, 998]
        },

        yaxis: {
          show: false,
        },

        grid: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        
        
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 30, 20, 41, 30, 40, 45, 50, 49, 30, 20, 41]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h5>23.7 GB</h5>
        <p>Per project</p>
        <Fragment>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={80}
            // width="200"
          />
        </Fragment>
      </div>
     
    );
  }
}

export default Dashboad3Chart3;
