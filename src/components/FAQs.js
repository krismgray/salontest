import React, { Component } from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import '../FAQs.css';

class FAQs extends Component {
  render() {
    return (
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='faqstitle'>
          <Jumbotron>
          <Grid>
            <Row>
              <Col md={12}>
                <h1>FAQs</h1>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        </div>
        <Container>
          <Header size='huge' disabled>Header Here</Header>
          <p className='abouttext'>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</p>
        </Container>
        <Divider />
          <Container>
            <Header size='huge' disabled>Header Here</Header>
            <p className='abouttext'>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</p>
          </Container>
          <Divider />
          <Container>
            <Header size='huge' disabled>Header Here</Header>
            <p className='abouttext'>Replace this content with your own content. Content should be relevant, unique and written with the goal of providing the reader the type of information they are looking for while motivating them to take action. It’s also important to make sure your content has good usage of SEO rich keywords but written in a creative, reader friendly way. Remember, your website is your 24/7 sales person. It never calls in sick, can sell an unlimited number of people at the same time with the exact same, perfect pitch. Therefore, putting time into writing strong content is key to your digital success.</p>
          </Container>
          <Divider />
        <br />
        <br />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default FAQs;
