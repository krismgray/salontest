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
          <h1>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</h1>
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
          <br />
          <div className='mobilebody2'>
          </div>
          <div className='body2text'>
          <Grid>
            <Row>
              <Col xs={12}>
            <h1>Our Mission</h1>
            <h1>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</h1>
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
