import React, { Component } from 'react';
import { Header, Segment, Image, Divider, Button, Container } from 'semantic-ui-react';
import { Grid, Row, Col, Jumbotron, Carousel } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import '../About.css';

class About extends React.Component {


  render() {
    return(
      <div>
        <div>
          <NavMenu />
        </div>
        <br />
        <div className='slideshow'>
          <Container fluid>
            <Carousel>
              <Carousel.Item>
                <img src={require('../images/space1.1.jpg')} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={require('../images/space2.1.jpg')} />
              </Carousel.Item>
              <Carousel.Item>
                <img src={require('../images/space3.1.jpg')} />
              </Carousel.Item>
            </Carousel>
          </Container>
        </div>
        <br />
        <div>
          <br />
          <br />
          <div className='abouttitle'>
            <Jumbotron>
            <Grid>
              <Row>
                <Col md={16}>
                  <h1>About Salon Beleza</h1>
                </Col>
              </Row>
            </Grid>
          </Jumbotron>
          </div>
          <Container>
            <Header size='huge' disabled>Header Here</Header>
            <p className='abouttext'>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</p>
            <Header size='large' disabled>Header Here</Header>
            <p className='abouttext'>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.

            Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.

            Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</p>
          </Container>
          <br />
        </div>
        <br />
        <br />
        <div>
          <Footer />
        </div>
      </div>
    )
  }

}

export default About;
