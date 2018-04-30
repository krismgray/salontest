import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import '../Contact.css';


class Contact extends Component {
  state = { width: window.innerWidth, visible: false }

  handleClick = (e, { name }) => this.setState({ activeItem: name })

  handleResize() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMOunt() {
    window.addEventListener('resize', this.handleResize())
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize());
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });


  render() {
    const { activeItem, width, visible } = this.state;
    const isMobile = width <= 500;
    if (!isMobile ){
    return (
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='section'>

        </div>
        <br />
        <div className='section1'>
          <Grid>
            <Row>
              <Col xs={8} md={6}>
                <div className='contacttitle'>Contact</div>
                <Header as='h2' disabled>Salon Beleza</Header>
                <p>1978 Redwood Road Suite #100, Saratoga Springs, UT 84045</p>
                <a href="https://www.google.com/maps/place/salon.Beleza/@40.3987965,-111.919762,15z/data=!4m2!3m1!1s0x0:0x8e2b162f774d3e3?sa=X&ved=0ahUKEwiYlOmVh77aAhUIiFQKHYBkDLMQ_BIIsQEwCw">
                  Get Directions
                </a>
                <p></p>
                <a href="tel:1-801-766-9838">
                  <p>(801)766-9838</p>
                </a>
                <br />
                <a href="mailto:janelle@belezabrowbar.com">
                  janelle@belezabrowbar.com
                </a>
              </Col>
              <Col xs={12} md={6}>
                <div className='scheduletop'>
                  <p>Working Hours</p>
                </div>
                <br />
                <div className='schedule'>
                  <p>Sunday</p>
                  <p>Closed</p>
                </div>
                <div className='schedule'>
                  <p>Monday</p>
                  <p>Closed</p>
                </div>
                <div className='schedule'>
                  <p>Tuesday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Wednesday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Thursday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Saturday</p>
                  <p>9:00 AM - 5:00 PM</p>
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
    )} else {
      return(
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='mobilesection'>

        </div>
        <br />
        <div className='section1'>
          <Grid>
            <Row>
              <Col xs={8} md={6}>
                <div className='contacttitle'>Contact</div>
                <Header as='h2' disabled>Salon Beleza</Header>
                <p>1978 Redwood Road Suite #100, Saratoga Springs, UT 84045</p>
                <a href="https://www.google.com/maps/place/salon.Beleza/@40.3987965,-111.919762,15z/data=!4m2!3m1!1s0x0:0x8e2b162f774d3e3?sa=X&ved=0ahUKEwiYlOmVh77aAhUIiFQKHYBkDLMQ_BIIsQEwCw">
                  Get Directions
                </a>
                <p></p>
                  <a href="tel:1-801-766-9838">
                    <p>(801)766-9838</p>
                  </a>
                <br />
                <a href="mailto:janelle@belezabrowbar.com">
                  janelle@belezabrowbar.com
                </a>
              </Col>
              <Col xs={12} md={6}>
                <div className='scheduletop'>
                  <p>Working Hours</p>
                </div>
                <br />
                <div className='schedule'>
                  <p>Sunday</p>
                  <p>Closed</p>
                </div>
                <div className='schedule'>
                  <p>Monday</p>
                  <p>Closed</p>
                </div>
                <div className='schedule'>
                  <p>Tuesday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Wednesday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Thursday</p>
                  <p>9:00 AM - 7:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                </div>
                <div className='schedule'>
                  <p>Saturday</p>
                  <p>9:00 AM - 5:00 PM</p>
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
}

export default Contact;
