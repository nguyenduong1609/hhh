import React from 'react';
import { Link } from 'react-router-dom';

function Dashboad2CardItem(props) {
    return (
        <div className='dbitem'>
          <Link className='dashboad2__cards__item__link' to={props.path}>
            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
          </Link>
          <div className='dashboad2__cards__item__icon'>
            <i className={props.icon}></i>
            <div>
              <h5 className='cards__item__data'>{props.data}</h5>
              <p>{props.text}</p>
            </div>                
          </div>
            
        </div>
    );
}

export default Dashboad2CardItem;
