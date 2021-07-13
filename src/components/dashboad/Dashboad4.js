// import Devices from './listdevices/Devices';
import './Dashboad4.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import React, { Component } from 'react';

import Axios from './listdevices/Axios';
// import { number } from 'prop-types';

class Dashboad4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      showData: [],
      soLuong: 5,
      soLuongNut: 0,
    };
    this.select = React.createRef();
  }

  componentDidMount(){
    Axios.get('/user')
    .then((res) => {
      this.setState({
        allData: res.data,
        showData: res.data.slice(0, this.state.soLuong),
        soLuongNut: Math.ceil(res.data.length / this.state.soLuong),
      }); 
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  dayso = (tongtrang) => {
    var arr = [];
    for (let i=1; i <= tongtrang; i++) {
      arr.push(i);
    }
    console.log(arr);
    return arr.map((element) => {
      return (
        <li key={element} id={element} 
          onClick={() => {
          this.chuyentrang(element)
          }}
          // className={alert(arr[1]) == element ? "active" : null}
        >           
            {element}
        </li>
       
      );
    });
  };

  chuyentrang =(number) => {
    console.log(number);
    var end = this.state.soLuong * number;
    this.setState({ showData: this.state.allData.slice(end - this.select.current.value , end)});
  };

  thayDoiSoLuong = () => {
    console.log(this.select.current.value);
    this.setState({
      soLuong: this.select.current.value,
      showData: this.state.allData.slice(0, this.select.current.value),
      soLuongNut: Math.ceil(this.state.allData.length / this.select.current.value)
    })
  };

  render() {
    const { showData} =this.state;
    return (

      <div className='container'>
    
        <div className='menu-db4'>        
                    
          <ul className='nav-menu-db4 '>
            <li className='nav-item-db4'>
              <Link to='/' className='nav-links-db4'>
                  Devices
                  <i className="fa fa-plus-circle"></i>
              </Link>
            </li>
            <li className='nav-item-db4'>
              <Link to='/sims' className='nav-links-db4'>
                SIMs
              </Link>
            </li>
            <li className='nav-item-db4'>
              <Link to='/connectivity' className='nav-links-db4'>
                Connectivity
              </Link>
            </li>                        
          </ul>

          <div className="container-search">            
            <input type="search" className="search" placeholder="Search..." />
            <span className="icon"><i className="fa fa-search"></i></span>
          </div>

          <select ref = {this.select} onChange={this.thayDoiSoLuong}>
            <option value='5'>Top 5 Most Used</option>
            <option value="10">Top 10 Most Used</option>
            <option value="15">Top 15 Most Used</option>
            <option value="20">Top 20 Most Used</option>
          </select>
        </div>
      
        <div className='row'>
          <Router>
            <Switch>

              <div className='devices-data'>
                <Container>
                  <ul className='dayso'> {this.dayso(this.state.soLuongNut)} </ul>
                  <Row className='data-navs'>         
                    <Col className='data-checkbox' sm='3'>
                      <FormGroup>
                        <Label>
                          <Input className='data-input' type="checkbox" />{' '}
                          Nickname            
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col className='data-id' sm='2'>
                      ID
                    </Col>
                    <Col className='data-date'sm='3'>
                      Cycle To Date Usage (MB)
                    </Col>
                    <Col className='data-phone'sm='2'>
                      Phone Number
                    </Col>
                    <Col className='data-activated' sm='2'>
                      Activated
                    </Col>                    
                  </Row>

                  
                  {showData.map(deviceslist => (
                    <Row className='data-nav'>         
                      <Col sm='3'>
                        <FormGroup>
                          <Label>
                            <Input className='data-input' type="checkbox" />{' '}            
                            {deviceslist.Nickname}
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col sm='2'>
                        {deviceslist.id}
                      </Col>
                      <Col sm='3'>
                        {deviceslist.Date}
                      </Col>
                      <Col sm='2'>
                        {deviceslist.Phone}
                      </Col>
                      <Col sm='2'>
                        {deviceslist.Date}
                      </Col>         
                    </Row>
                  ))}
                </Container>
              </div>

              {/* <Route path='/' exact component={Devices} /> */}
              {/* <Route path='/sims' component={Deviceslist} /> */}
              {/* <Route path='/products' component={Products} />
              <Route path='/sign-up' component={SignUp} /> */}
            </Switch>
          </Router>
        </div>
          
      </div>

    );
  }
}

export default Dashboad4;

