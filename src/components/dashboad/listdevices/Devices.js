
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import './Devices.css';
import React, { Component } from 'react';

import Axios from './Axios';


class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      showData: [],
      soLuong: 5,
      soLuongNut: 0,
    };
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

  dayso = (number) => {
    var arr = [];
    for (let i=1; i <= number; i++) {
      arr.push(i);
    }
    console.log(arr);
    return arr.map((element) => {
      return (
        <div key= {element}>
        <button onClick={() => {
          this.chuyentrang(element);
        }}
        >
          {element}
        </button>
        </div>
      );
    });
  };

  chuyentrang =(number) => {
    console.log(number);
    var end = this.state.soLuong * number;
    this.setState({ showData: this.state.allData.slice(end - 5 , end)});
  };

  render() {
    const { showData} =this.state;
    return (
      <div className='devices-data'>
          <Container>
            <div className='dayso'> {this.dayso(this.state.soLuongNut)} </div>
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
    );
  }
}

export default Devices;
