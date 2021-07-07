import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbarinform from './components/inform/Navbarinform';
import Pagedashboad from './components/dashboad/Pagedashboad';
import Inform from './components/inform/Inform';
// import Home from './components/page/Home';
// import Services from './components/page/Services';
// import Products from './components/page/Products';
// import SignUp from './components/page/SignUp';
// import Footer from './components/Footer';

function App() {
  return (
    <div className='web'>
      <div className='blog1'>
        <Router>
          <Navbar />        
          <Switch>
            <Route path='/' exact component={Pagedashboad} />
            {/* <Route path='/services' component={Dashboad1} /> */}
            {/* <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} /> */}
          </Switch>
          {/* <Footer /> */}
        </Router> 
      </div>
      <div className='blog2'>
        <Router>
          <Navbarinform />
          <Inform />
                  
          {/* <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
          <Footer /> */}
        </Router>        
      </div>
         
    </div>
    
  );
}

export default App;
