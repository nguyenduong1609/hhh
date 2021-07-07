import React, { Component } from 'react';
import {Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Axios from './Axios';

class Deviceslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      showData: [],
      soLuong: 5,
      soLuongNut: 0,
      deviceslist: [{
        "nickname": "Rockhall",
        "id": "215.156.127.122",
        "date": 46,
        "phone": "833-726-7851",
        "time": "12:15 AM"
      }, {
        "nickname": "Cuffley",
        "id": "245.216.248.74",
        "date": 33,
        "phone": "717-638-3881",
        "time": "6:43 AM"
      }, {
        "nickname": "Elflain",
        "id": "64.189.44.140",
        "date": 54,
        "phone": "427-104-9752",
        "time": "8:54 AM"
      }, {
        "nickname": "Ridgewell",
        "id": "97.72.249.113",
        "date": 99,
        "phone": "164-622-8894",
        "time": "9:17 PM"
      }, {
        "nickname": "Clingan",
        "id": "87.15.149.142",
        "date": 78,
        "phone": "424-700-4537",
        "time": "11:31 AM"
      }, {
        "nickname": "Harfleet",
        "id": "77.175.0.96",
        "date": 30,
        "phone": "613-236-9914",
        "time": "8:48 PM"
      }, {
        "nickname": "Branton",
        "id": "186.18.190.75",
        "date": 94,
        "phone": "952-977-8613",
        "time": "5:12 AM"
      }, {
        "nickname": "Dear",
        "id": "47.152.149.220",
        "date": 90,
        "phone": "813-540-6523",
        "time": "11:34 PM"
      }, {
        "nickname": "Willett",
        "id": "71.115.255.52",
        "date": 6,
        "phone": "239-211-9333",
        "time": "7:27 AM"
      }, {
        "nickname": "Tonkes",
        "id": "138.116.208.11",
        "date": 55,
        "phone": "755-764-0448",
        "time": "1:01 PM"
      }, {
        "nickname": "Weinberg",
        "id": "238.55.30.36",
        "date": 88,
        "phone": "614-925-6659",
        "time": "4:12 AM"
      }, {
        "nickname": "Phil",
        "id": "192.175.37.249",
        "date": 80,
        "phone": "431-749-3723",
        "time": "8:43 PM"
      }, {
        "nickname": "Caveney",
        "id": "154.21.34.53",
        "date": 82,
        "phone": "865-887-3961",
        "time": "11:46 PM"
      }, {
        "nickname": "Splevings",
        "id": "155.134.228.11",
        "date": 59,
        "phone": "893-507-4922",
        "time": "10:23 AM"
      }, {
        "nickname": "Mandrake",
        "id": "138.13.57.13",
        "date": 93,
        "phone": "382-542-0179",
        "time": "4:34 AM"
      }]
    };
  }

  componentDidMount(){
    Axios.get('/user')
    .then((res) => {
      this.setState({
        allData: res.data,
        showData: res.data.slice(0, this.state.soLuong),
        // showData: res.data.slice(0, this.state.soLuong),
        // soLuongNut: Math.ceil(res.data.length / this.state.soLuong),
      }); 
      console.log(res);
      this.dayso(6);
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
      <div>
        <div className='dayso'> {this.dayso(6)} </div>
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
      </div>
    );
  }
}

export default Deviceslist;