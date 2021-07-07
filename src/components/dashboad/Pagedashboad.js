import React from 'react';
import Dashboad1 from './Dashboad1';
import Dashboad2 from './Dashboad2';
import Dashboad3 from './Dashboad3';
// import Dashboad4 from './Dashboad4';
import Dashboad41 from './Dashboad41';
import './Pagedashboad.css';

function Pagedashboad() {
    return (
        <div  className='pagedashboad'>
            <Dashboad1 />
            <Dashboad2 />
            <Dashboad3 />
            <Dashboad41 />
            {/* <Dashboad4 /> */}
        </div>
    );
}

export default Pagedashboad;
