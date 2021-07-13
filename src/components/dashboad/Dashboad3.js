import React from 'react';
import './Dashboad3.css';

import Dashboad3Chart1 from './chart/Dashboad3Chart1'
import Dashboad3Chart2 from './chart/Dashboad3Chart2';
import Dashboad3Chart3 from './chart/Dashboad3Chart3';
import Mymap from './chart/map';


function Dashboad3() {
  return (                
    <div className='container-fluid row'>
      <div className='dashboad3-1 col-md-6'>
        <div className='containerchart'>
          <div className='conten-chart'>
            <p className>Network Usage</p>                       
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <Dashboad3Chart1 />
            </div>
            <div className='col-md-3'>
              
              <div className='chart'>
                <Dashboad3Chart2 />
              </div>
              <div className='chart'> 
                <Dashboad3Chart3 />
              </div>
                           
            </div>
            <div className='col-md-3'>
              
              
              <div className='chart'>
                <Dashboad3Chart3 />
              </div>
              <div className='chart'> 
                <Dashboad3Chart2 />
              </div>

              
            </div>
          </div>
        </div>
        
      </div>

      <div className='dashboad3-2 col-md-6'>
        <div className='row containerchart'>
          <div className='conten-chart'>
            <p className>Device Connections</p>                       
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </div>
          {/* <Mymap /> */}
        </div>
        
      </div>
        
    </div>    
            
  );
}

export default Dashboad3;