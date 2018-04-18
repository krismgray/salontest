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
                  <List.Item>Women's Style/No Wash</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Men's Haricut</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Child's Haircut</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Braid</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Makeup</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Microblading</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Curls</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Updo</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Perm and Haircut</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                  <div className='listitem'>
                  <List.Item>Split End Treatment</List.Item>
                  <List.Item>$20</List.Item>
                  </div>
                </List>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Header as='h1'>Haircuts and Other</Header>
                  <List size='big'>
                    <div className='listitem'>
                    <List.Item>Women's Style/No Wash</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Men's Haricut</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Child's Haircut</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Braid</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Makeup</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Microblading</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Curls</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Updo</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Perm and Haircut</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Split End Treatment</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                  </List>
              </Col>
              <Col xs={12} sm={6} md={4}>
                <Header as='h1'>Haircuts and Other</Header>
                  <List size='big'>
                    <div className='listitem'>
                    <List.Item>Women's Style/No Wash</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Men's Haricut</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Child's Haircut</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Braid</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Makeup</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Microblading</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Curls</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Updo</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Perm and Haircut</List.Item>
                    <List.Item>$20</List.Item>
                    </div>
                    <div className='listitem'>
                    <List.Item>Split End Treatment</List.Item>
                    <List.Item>$20</List.Item>
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
