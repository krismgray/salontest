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
        <br />
        <div className='body2text'>
        <Grid>
          <Row>
            <Col xs={12}>
          <h1>Our Mission</h1>
          <h1>How will a college break? A wine escapes opposite the chat!
            The mug projects the overloaded chain. Can a bag butter this socialist gutter?
            The fuse decides whatever shifting symphony. A neighborhood showers a motor above the infantile cookie.</h1>
          <br />
          <div className='mishbut'>
            <h1>Schedule a time with one of our stylists today!</h1>
            <Link to='/Stylists'>
              <Button primary size='large'>BOOK NOW</Button>
            </Link>
          </div>
          <br />
          </Col>
        </Row>
      </Grid>
      </div>
        <br />
        <div className='bodyrandom'>
        </div>
        <br />
        <div className='body3'>
          <Container text>
            <Header size='huge'>Header Here</Header>
            <p>Whether you require microblading service or want to being building your own microblading skills,
              our expert artists, Janelle and Melissa, are ready to help!
              Their hearts lie in the beauty industry and their budding passion to share their experiences to grow other artists is unparalleled.
              Read more about their backgrounds here!</p>
              <p>Whether you require microblading service or want to being building your own microblading skills,
                our expert artists, Janelle and Melissa, are ready to help!
                Their hearts lie in the beauty industry and their budding passion to share their experiences to grow other artists is unparalleled.
                Read more about their backgrounds here!</p>
          </Container>
        </div>
        <br />
        <div className='body4'>
          <Grid>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Link to='/Stylists'>
                  <Image src={require('../images/prof1.jpg')} rounded responsive />
                </Link>
                <p>Stylists</p>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Link to='Services'>
                  <Image src={require('../images/prof3.jpg')} rounded responsive />
                </Link>
                <p>Services</p>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <a href="https://www.instagram.com/salon.beleza/">
                  <Image src={require('../images/prof2.jpg')} rounded responsive />
                </a>
                <p>Gallery</p>
              </Col>
            </Row>
          </Grid>
        </div>
        <br />
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
          <div className='mobileheader'>
            <Header as='h1'>Welcome to Salon Beleza!</Header>
          </div>
          <div className='mobilebody2'>
          </div>
          <div className='body2text'>
          <Grid>
            <Row>
              <Col xs={12}>
            <h1>Our Mission</h1>
            <h1>How will a college break? A wine escapes opposite the chat!
              The mug projects the overloaded chain. Can a bag butter this socialist gutter?
              The fuse decides whatever shifting symphony. A neighborhood showers a motor above the infantile cookie.</h1>
            <br />
            <div className='mishbut'>
              <h1>Schedule a time with one of our stylists today!</h1>
              <Link to='/Stylists'>
                <Button primary size='large'>BOOK NOW</Button>
              </Link>
            </div>
            <br />
            </Col>
          </Row>
        </Grid>
        </div>
          <br />
          <div className='mobilebodyrandom'>
          </div>
          <br />
          <div className='body3'>
            <Container text>
              <Header size='huge'>Header Here</Header>
              <p>Whether you require microblading service or want to being building your own microblading skills,
                our expert artists, Janelle and Melissa, are ready to help!
                Their hearts lie in the beauty industry and their budding passion to share their experiences to grow other artists is unparalleled.
                Read more about their backgrounds here!</p>
                <p>Whether you require microblading service or want to being building your own microblading skills,
                  our expert artists, Janelle and Melissa, are ready to help!
                  Their hearts lie in the beauty industry and their budding passion to share their experiences to grow other artists is unparalleled.
                  Read more about their backgrounds here!</p>
            </Container>
          </div>
          <br />
          <div className='body4'>
            <Grid>
              <Row>
                <Col xs={12} sm={6} md={4}>
                  <Link to='/Stylists'>
                    <Image src={require('../images/prof1.jpg')} rounded responsive />
                  </Link>
                  <p>Stylists</p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <Link to='Services'>
                    <Image src={require('../images/prof3.jpg')} rounded responsive />
                  </Link>
                  <p>Services</p>
                </Col>
                <Col xs={12} sm={6} md={4}>
                  <a href="https://www.instagram.com/salon.beleza/">
                    <Image src={require('../images/prof2.jpg')} rounded responsive />
                  </a>
                  <p>Gallery</p>
                </Col>
              </Row>
            </Grid>
          </div>
          <br />
          <div>
            <Footer />
          </div>
        </div>
      )
    }
  }
}

export default Home;
