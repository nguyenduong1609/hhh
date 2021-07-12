import React, { useState, useEffect, useRef } from 'react';
import Pagination from './listdevices/Pagination'
import './listdevices/Pagination.css'
import './Dashboad4.css';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';

import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';



// import Posts from './listdevices/Posts'
function Dashboad41() {
  const [posts, setPosts] = useState([]);
  const [mangtimkiem, setMangtimkiem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  // const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://60dac40a801dcb0017290b41.mockapi.io/user');
      console.log('dai ca duong' , res);
      setPosts(res.data);
      setMangtimkiem(res.data);
      setLoading(false)
      
    }
    fetchPosts()
  }, [])
  // console.log('dai ca duong111' , mangtimkiem);
  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mangtimkiem.slice(indexOfFirstPost, indexOfLastPost);
  const howManyPages = Math.ceil(mangtimkiem.length/postsPerPage);
  // console.log('truoc khi thay doi: ',howManyPages);

  function handleChange(event) {
    setPostsPerPage(event.target.value);
    const howManyPages = Math.ceil(mangtimkiem.length/postsPerPage);
    // console.log('sau khi set: ',howManyPages);
  }

  function handleSearchTermChange(e) {
    const value=e.target.value;
    const mangtimkiem1 =[];
    setSearchTerm(value);
    posts.forEach((item) => {
      if(item.Nickname.toLowerCase().indexOf(value) !== -1){
        mangtimkiem1.push(item);
      }
    })
    setMangtimkiem(mangtimkiem1);
    // console.log('dka duong dka: ', mangtimkiem1);
  } 

  function handleSort1() {
    mangtimkiem.sort(function(sv1, sv2) {
      const a = sv1.Nickname.toLowerCase();
      const b = sv2.Nickname.toLowerCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });
    const mangsx =[...mangtimkiem]
    setMangtimkiem(mangsx);
  }

  function handleSort2() {
    mangtimkiem.sort(function(sv1, sv2) {
      const a = sv1.Nickname.toLowerCase();
      const b = sv2.Nickname.toLowerCase();
      return a === b ? 0 : a < b ? 1 : -1;
    });
    const mangsx =[...mangtimkiem]
    setMangtimkiem(mangsx);    
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

          <form className="container-search">            
            <input 
              type="text" 
              value={searchTerm} 
              className="search" 
              placeholder="Search..." 
              onChange={handleSearchTermChange}
            />
            <span className="icon"><i className="fa fa-search"></i></span>
          </form>

          <select className='select' onChange={handleChange} >      
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
                        Nickname &nbsp; &nbsp;
                              
                      </Label>
                        <i 
                          href='#'
                          class="fas fa-sort-down" 
                          onClick={handleSort1}
                        >

                        </i> &nbsp; &nbsp;  
                        <i 
                          class="fas fa-sort-up"
                          href='#'
                          onClick={handleSort2}
                        ></i>   
                    </FormGroup>
                  </Col>
                  <Col className='data-id d-none' sm='1'>
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
                          <Input key={post.id} className='data-input' type="checkbox" />            
                          {post.Nickname}
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm='1 d-none'>
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