import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Dashboad2.css';
import './chart/Dashboad2Chart1.css';
import Dashboad2CardItem from './Dashboad2CardItem';
import Dashboad2Chart1 from './chart/Dashboad2Chart1';

function Dashboad2() {
    return (                
        <div className='container-fluid row'>
            <div className='dashboad2-1 col-md-4 '>
                <div className='p-3'>
                    <Link to='/Summany' className='li-1'>Summary <i className="fa fa-plus-circle p-2"></i></Link>
                    
                </div>
                <div className="row text-center">
                    <div className="col-xl-6">
                        <Dashboad2CardItem 
                            icon="fa fa-car"
                            text='Devices'
                            data='4,373'
                            path='/services'
                        />
                        <Dashboad2CardItem 
                            icon="fa fa-gift"
                            text='Applications'
                            data='143'
                            path='/services'
                        />
                        <Dashboad2CardItem 
                            icon="fa fa-gift"
                            text='Active projects'
                            data='66'
                            path='/services'
                        />
                    </div>
                    <div className="col-xl-6">
                        <Dashboad2CardItem 
                            icon="fa fa-car"
                            text='Data Used'
                            data='22GB'
                            path='/services'
                        />
                        <Dashboad2CardItem 
                            icon="fa fa-gift"
                            text='Items Scanned'
                            data='953'
                            path='/services'
                        />
                        <Dashboad2CardItem 
                                icon="fa fa-gift"
                                text='Issues Found'
                                data='12'
                                path='/services'
                        />
                       
                    </div>
                </div>
            </div>

            <div className='dashboad2-2 col-md-8'>
                <div className="w-m">
                    <button className='w-m-1'>Weekly</button>
                    <button className='w-m-2'>
                        <i class="fas fa-history"></i>
                        &nbsp; Monthly
                    </button>
                </div>
                    
                <div class="row container-chart">
                    <div className='conten-chart'>
                        <p className>Device Connections</p>
                       
                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                   
                    <div class="stats">
                        <div class="stat">
                            <span>18%</span>
                            <span>New</span>
                        </div>
                        <div class="stat">
                            <span>4%</span>
                            <span>Old</span>
                        </div>
                        <div class="stat">
                            <span>-0%</span>
                            <span>Faled</span>
                        </div>                            
                    </div>
                    <Dashboad2Chart1 />
                    
                </div>
              
            </div>
            
        </div>    
             
    );
}

export default Dashboad2;