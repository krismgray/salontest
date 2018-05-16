import React, { Component } from 'react';
import { Header, Segment, Divider, Button, Container } from 'semantic-ui-react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../Home.css';


class Home extends Component {
  state = { width: window.innerWidth, visible: false }

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMOunt() {
    window.addEventListener('resize', this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='body2'>
        </div>
        <div className='welcometext'>
          <br />
          <br />
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>WELCOME TO SALON BELEZA</h1>
          <p>Here at Salon Beleza our artists specialize in all of the latests techniques and trends to make sure we give our clients exacly what they are wanting. Come check us out and meet our amazing salon family and experience all we have to offer.  </p>

          <br />
          </Col>
        </Row>
      </Grid>
      <br />
      </div>
        <div className='bodyrandom'>
        </div>
        <div className='body4'>
          <br />
          <br />
          <Grid>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Link to='/Stylists'>
                  <Image src={require('../images/prof1.jpg')} rounded responsive />
                  <p>Stylists</p>
                </Link>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Link to='Services'>
                  <Image src={require('../images/prof3.jpg')} rounded responsive />
                  <p>Services</p>
                </Link>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <a href="https://www.instagram.com/salon.beleza/">
                  <Image src={require('../images/prof2.jpg')} rounded responsive />
                  <p>Gallery</p>
                </a>
              </Col>
            </Row>
          </Grid>
          <br />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )} else {
      return (
        <div>
          <div>
            <NavMenu />
          </div>
          <br />
          <div className='mobilebody2'>
          </div>
          <br />
          <div className='welcometext'>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h1>WELCOME TO SALON BELEZA</h1>
              <p style={{ "font-family" : "Offside"}}>Here at Salon Beleza our artists specialize in all of the latests techniques and trends to make sure we give our clients exacly what they are wanting. Come check us out and meet our amazing salon family and experience all we have to offer.  </p>

              <br />
              </Col>
            </Row>
          </Grid>
        </div>
          <br />
          <div className='mobilebodyrandom'></div>
          <br />
          <div className='body4'>
            <br />
            <br />
            <Grid>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Link to='/Stylists'>
                    <Image src={require('../images/prof1.jpg')} rounded responsive />
                    <p>Stylists</p>
                  </Link>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Link to='Services'>
                    <Image src={require('../images/prof3.jpg')} rounded responsive />
                    <p>Services</p>
                  </Link>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <a href="https://www.instagram.com/salon.beleza/">
                    <Image src={require('../images/prof2.jpg')} rounded responsive />
                    <p>Gallery</p>
                  </a>
                </Col>
              </Row>
            </Grid>
            <br />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )
    }
  }
}

export default Home;
