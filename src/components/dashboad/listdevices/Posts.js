import React from 'react';
import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import '../Dashboad4.css';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';

function Posts({posts}) {
  return (
    <div className='container'>
    
      <div className='menu-db4'>
        <Router>        
                  
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

          <select className='select'>
            <option value='5'>Top 5 Most Used</option>
            <option value="10">Top 10 Most Used</option>
            <option value="15">Top 15 Most Used</option>
            <option value="20">Top 20 Most Used</option>
          </select>
        </Router>
      </div>
    
      <div className='row'>
        <Router>
          <Switch>

            <div className='devices-data'>
              <Container>
                
                <Row className='data-navs'>         
                  <Col className='data-checkbox' sm='3'>
                    <FormGroup>
                      <Label>
                        <Input className='data-input' type="checkbox" />{' '}
                        Nickname            
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col className='data-id' sm='1'>
                    ID
                  </Col>
                  <Col className='data-date'sm='3'>
                    Cycle To Date Usage (MB)
                  </Col>
                  <Col className='data-phone'sm='3'>
                    Phone Number
                  </Col>
                  <Col className='data-activated' sm='2'>
                    Activated
                  </Col>                    
                </Row>

                
                {posts.map(post => (
                  <Row className='data-nav'>         
                    <Col sm='3'>
                      <FormGroup>
                        <Label>
                          <Input className='data-input' type="checkbox" />{' '}            
                          {post.Nickname}
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm='1'>
                      {post.id}
                    </Col>
                    <Col sm='3'>
                      {post.Data}
                    </Col>
                    <Col sm='3'>
                      {post.Phone}
                    </Col>
                    <Col sm='2'>
                      {post.Date}
                    </Col>         
                  </Row>
                ))}
              </Container>
            </div>
          </Switch>
        </Router>
      </div>
        
    </div>






    
  )
}

export default Posts

