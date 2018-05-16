import React, { Component } from 'react';
import { Header, List } from 'semantic-ui-react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import '../Services.css';

class Services extends Component {
  render() {
    return (
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='servicestitle'>
          <Jumbotron>
          <Grid>
            <Row>
              <Col md={12}>
                <h1>Services</h1>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        </div>
        <div className='listOfServices'>
          <Grid>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Header as='h1'>Haircuts and Other</Header>
                <List size='big'>
                  <div className='listitem'>
                  <List.Item>Women's Haircut</List.Item>
                  <List.Item>$35-$38</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Men's Haricut</List.Item>
                  <List.Item>$25-$28</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Child's Haircut</List.Item>
                  <List.Item>$20-$25+</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Boy's Student Haircut</List.Item>
                  <List.Item>$20-$25+</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Girls Student Haircut</List.Item>
                  <List.Item>$25-$35</List.Item>
                  </div>
                  <div className='listitem'>
                    <List.Item>Brazilian Blowout</List.Item>
                    <List.Item>$200-$250</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Microblading</List.Item>
                  <List.Item>Call for Information</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Hair Extensions</List.Item>
                  <List.Item>Call for consultation</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Other Services</List.Item>
                  <List.Item>Call for Information</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item> + prices vary depending on sylists and services</List.Item>
                  </div>
                </List>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Header as='h1'>Coloring Services</Header>
                  <List size='big'>
                    <div className='listitem'>
                    <List.Item>Balayage</List.Item>
                    <List.Item>$90-$115</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Partial Highlight</List.Item>
                    <List.Item>$70-$80</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Half Highlight</List.Item>
                    <List.Item>$80-$90</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Full Highlight</List.Item>
                    <List.Item>$95-$115</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>All Over Color</List.Item>
                    <List.Item>$75-$80</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Color and Partial Highlight</List.Item>
                    <List.Item>$85-$90</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Color and Half Highlight</List.Item>
                    <List.Item>$95-$100</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Color and Full Highlight</List.Item>
                    <List.Item>$105-$120</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Other Services</List.Item>
                    <List.Item>Call for Information</List.Item>
                    </div>
                  </List>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Header as='h1'>Waxing Services</Header>
                  <List size='big'>
                    <div className='listitem'>
                    <List.Item>Brow Wax</List.Item>
                    <List.Item>$15-$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Brow Wax and Tint</List.Item>
                    <List.Item>$25-$30</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Brow Tint Only</List.Item>
                    <List.Item>$10-$15</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Lip Wax</List.Item>
                    <List.Item>$10-$12</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Chin Wax</List.Item>
                    <List.Item>$10-$15</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Nose Wax</List.Item>
                    <List.Item>$10-$15</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Other Services</List.Item>
                    <List.Item>Call for Information</List.Item>
                    </div>
                  </List>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
                <div className='booknow'>
                  <p>Schedule an Appointment Today!</p>
                  <a href="https://www.vagaro.com/salonbeleza/book-now">
                    <Button bsStyle="info" bsSize='large'>BOOK NOW</Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <br />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Services;
