import React, { useState, useEffect } from 'react';
import Pagination from './listdevices/Pagination'
import './listdevices/Pagination.css'
import './Dashboad4.css';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';

import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';



// import Posts from './listdevices/Posts'
function Dashboad41() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  // const [howManyPages, setHowManyPages] = useState()

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://60dac40a801dcb0017290b41.mockapi.io/user');
      console.log('dai ca duong' , res);
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(posts.length/postsPerPage);

  function handleChange(event) {
    setPostsPerPage(event.target.value);
    // howManyPages(Math.ceil(posts.length/postsPerPage));

  }
  return (
    <div className="container">
      
      <div className='menu-db4'>
        <Router className='menu-db4'>        
                  
          <ul className='nav-menu-db4'>
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

          <select className='select' onChange={handleChange}>      
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

                
                {currentPosts.map((post, index) => (
                  <Row className='data-nav' key={index}>         
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

                <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/>

              </Container>
            </div>
          </Switch>
        </Router>
      </div>



      {/* <Posts posts={currentPosts}/> */}

     
    </div>
  );
}

export default Dashboad41;