import React from 'react';
// import { Link } from 'react-router-dom';
import './Inform.css';

function Inform() {   
    return (
        <div className='container-inform'>
          <div className='inform-1'>
            <div className='inform-1-1'>
              <i className="far fa-circle"> &ensp; Recent Activity </i> 
                    
            </div>
            <div className='otrong'> </div>
          </div>
          
          <div className='sim-disabled'>
            <div className='inform-logo sim-disabled-logo'>
              <i className="fas fa-sim-card">  </i>
              <p>SIM Disabled</p>
            </div>

            <div className='infomation'>

              <div>
                <i className="far fa-clock"> 2 mins ago</i>
                <i className="far fa-user"> Billy Bob</i>
              </div>
              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>SIM Apollo</a>
                &nbsp; was &nbsp;
                <a href="#" className='infomation-disabled'>disabled</a>
              </p> 

            </div>
            
          </div>

          <div className='user-invited'>
            <div className='inform-logo sim-disabled-logo'>
              <i className="far fa-user-circle"></i>
              <p>User Invited</p>
            </div>

            <div className='infomation'>

              <div>
                <i className="far fa-clock"> 8 mins ago</i>
                <i className="far fa-user"> John Smith</i>
              </div>

              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>Bill</a>
                &nbsp; invited &nbsp;
                <a href="#" className='infomation-activated'>Jane Doe</a>
                &nbsp; with admin permissions 
              </p> 

            </div>
            
          </div>

          <div className='sim-activated'>
            <div className='inform-logo sim-disabled-logo'>
              <i className="fas fa-sim-card">  </i>
              <p>SIM Activated</p>
            </div>

            <div className='infomation'>

              <div>
                <i className="far fa-clock"> 43 mins ago</i>
                <i className="far fa-user"> Paul Hue</i>
              </div>
              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>SIM 435726732</a>
                &nbsp; was &nbsp;
                <a href="#" className='infomation-activated'>activated</a>
                &nbsp; and renamed to &nbsp;
                <a href="#" className='infomation-0-1'>SIM Logan</a>
              </p> 

            </div>
            
          </div>

          <div className='device-removed'>
            <div className='inform-logo'>
              <i className="fas fa-microchip"></i>
              <p>Device Removed</p>
            </div>

            <div className='infomation'>

              <div>
                <i className="far fa-clock"> 1 hour ago</i>
                <i className="far fa-user"> Paul Hue</i>
              </div>
              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>IDE Board</a>
                &nbsp; was &nbsp;
                <a href="#" className='infomation-disabled'>removed</a>
                &nbsp; removed from shared account &nbsp;
              </p> 

            </div>
            
          </div>

          <div className='connection-failed'>
            <div className='inform-logo'>
              <i className="fas fa-wifi"></i>
              <p>Connection Failed</p>
            </div>

            <div className='infomation'>
              <div>
                <i className="far fa-clock"> 1.2 hours ago</i>
              </div>
              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>loT Button</a>
                &nbsp; connection &nbsp;
                <a href="#" className='infomation-failed'>failed</a>
              </p> 
            </div>
          </div>

          <div className='device-failed'>
            <div className='inform-logo'>
              <i className="fas fa-microchip"></i>
              <p>Device Failed</p>
            </div>

            <div className='infomation'>
              <div>
                <i className="far fa-clock"> 2.6 hours ago</i>
              </div>
              <p className='infomation-0'>
                Device &nbsp;
                <a href="#" className='infomation-0-1'>Bradshaw</a>
                &nbsp; unexpectedly &nbsp;
                <a href="#" className='infomation-failed'>failed</a>
                &nbsp; to load &nbsp;
                <a href="#" className='infomation-0-1'>beep boop</a>
                &nbsp; application &nbsp;
              </p> 
            </div>
          </div>

          <div className='sim-activated'>
            <div className='inform-logo sim-disabled-logo'>
              <i className="fas fa-sim-card">  </i>
              <p>SIM Activated</p>
            </div>

            <div className='infomation'>

              <div>
                <i className="far fa-clock"> 3.3 hours ago</i>
                <i className="far fa-user"> Adrian Balkwill</i>
              </div>
              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>SIM 24500679</a>
                &nbsp; was &nbsp;
                <a href="#" className='infomation-activated'>activated</a>
                &nbsp; and renamed to &nbsp;
                <a href="#" className='infomation-0-1'>SIM Water Sensor</a>
              </p> 

            </div>
            
          </div>

          <div className='new-device'>
            <div className='inform-logo'>
              <i className="fas fa-microchip"></i>
              <p>New Device</p>
            </div>

            <div className='infomation'>
              <div>
                <i className="far fa-clock"> 8 hours ago</i>
                <i className="far fa-user"> John Smith</i>
              </div>
              <p className='infomation-0'>
                Device &nbsp;
                <a href="#" className='infomation-0-1'>Water Sensor</a>
                &nbsp; was added &nbsp;
              </p> 
            </div>
          </div>

          <div className='user-login'>
            <div className='inform-logo sim-disabled-logo'>
              <i className="far fa-user-circle"></i>
              <p>User Login</p>
            </div>

            <div className='infomation'>

              <div>
                <i className="far fa-clock"> 3 hours ago</i>
              </div>

              <p className='infomation-0'>
                <a href="#" className='infomation-0-1'>Bill</a>
                &nbsp; logged in &nbsp;
              </p> 

            </div>
            
          </div>
          <button className='button-inform'> See All Activity</button>

        </div>
    );
}

export default Inform;
