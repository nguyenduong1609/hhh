import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarinform.css';

function Navbarinform() {   
    return (
        <div>
            <nav className='navbarinform'>
                <div className='navbarinform-container'>        
                                       
                    <ul className='navinform-menu'>
                        <li className='navinform-item'>
                            <Link to='/' className='navinform-links'>
                                <i className="far fa-bell"></i>                                
                            </Link>
                        </li>
                        <li className='navinform-item'>
                            <Link to='/services' className='navinform-links'>
                                <i className="fas fa-bolt"></i>
                            </Link>
                        </li>
                        
                    </ul>              
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbarinform;
