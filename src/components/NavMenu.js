import React, { Component } from 'react';
import { Header, Menu, Image, Button, Icon, Sidebar, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Home.css';

class NavMenu extends Component {
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
      <br />
      <div className="navbar">
        <Menu secondary size='massive'>
          <Link to="/">
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
              Home
            </Menu.Item>
          </Link>
          <Link to="/Stylists">
            <Menu.Item name='stylists' active={activeItem === 'stylists'} onClick={this.handleClick}>
              Stylists
            </Menu.Item>
          </Link>
          </Menu>
            <div className='salonLogo'>
              <Link to="/">
                <Menu.Item name='salon'>
                  <Image src={require('../images/logo2.jpg')} size='medium' />
                </Menu.Item>
              </Link>
            </div>
          <br />
          <Menu secondary size='massive'>
          <Link to='Services'>
            <Menu.Item name='services' active={activeItem === 'services'} onClick={this.handleClick}>
              Services
            </Menu.Item>
          </Link>
          <Link to='Contact'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
              Contact
            </Menu.Item>
          </Link>
        </Menu>
      </div>
      </div>
    )} else {
      return(
        <div>
          <div className='mobilemenu'>
            <div className='mobilemenu1'>
            <Button size='big' color='black' icon onClick={this.toggleVisibility}><Icon name='content' size='large' /></Button>
            </div>
            <br />
            <div className='mobilemenu2'>
              <Header as='h1' style={{ "text-decoration" : "underline" }}>Salon Beleza</Header>
            </div>
          </div>
          <br />
            <Sidebar as={Menu} animation='overlay' visible={visible} direction='top' vertical inverted>
              <Button secondary onClick={this.toggleVisibility}><Icon name='remove' size='large' /></Button>
            <Link to="/">
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}>
                Home
              </Menu.Item>
            </Link>
            <Link to="/Stylists">
              <Menu.Item name='stylists' active={activeItem === 'stylists'} onClick={this.handleClick}>
                Stylists
              </Menu.Item>
            </Link>
              <Link to='Services'>
                <Menu.Item name='services' active={activeItem === 'services'} onClick={this.handleClick}>
                  Services
                </Menu.Item>
              </Link>
              <Link to='Contact'>
                <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleClick}>
                  Contact
                </Menu.Item>
              </Link>
          </Sidebar>
        </div>
      )
    }
  }
}

export default NavMenu;
