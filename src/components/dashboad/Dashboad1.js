import React from 'react';
import { Link } from 'react-router-dom';

import './Dashboad1.css';

function Dashboad1() {
    return (
        <div>
            <nav className='dashboad1'>
                <div className='dashboad1-container'>    

                    <h1 className='dashboad1-h1'>Dashboard</h1>
                    
                    <Link to='/' className= ''>
                        <i className="fa fa-chevron-down down-dashboad1-h1" aria-hidden="true"></i>                   
                    </Link>                   
                    <button color="primary" className='dashboad1-button'>
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        <p>&nbsp; Add Device</p>
                    </button> 
                    <div className='search-dashboad1-h1'>
                        <input type="search" className="search" placeholder="Search..." />
                        <i className="fa fa-search fa-search-1" aria-hidden="true"></i>
                    </div>
                    
           
                </div>
            </nav>
        </div>
    );
}

export default Dashboad1;
