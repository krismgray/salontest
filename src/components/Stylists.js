import React, { Component } from 'react';
import { Header, Item, Image, Divider, Button } from 'semantic-ui-react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import '../Stylists.css';
import LazyLoad from 'react-lazy-load';

class Stylists extends Component {
  render() {
    return (
      <div>
        <div>
          <NavMenu />
        </div>
        <div className='styliststitle'>
          <Jumbotron>
          <Grid>
            <Row>
              <Col md={12}>
                <h1>Meet Our Stylists!</h1>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        </div>
        <div className='bios'>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <Item.Group>
                  <Item>
                    <LazyLoad>
                      <Item.Image src={require('../images/jaclyn.jpg')} size='medium' />
                    </LazyLoad>
                    <br />
                    <Item.Content>
                      <Item.Header style={{ "font-weight" : "600",
                                            "font-size" : "22px",
                                            "text-decoration" : "underline",
                                            "padding-left" : "10px",
                                            "padding-top" : "10px",
                                           }}>
                                           Jaclyn Hellbusch
                      </Item.Header>
                      <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                      <Item.Description>
                        <p className='textbox'>Jaclyn has been doing hair for 9 years. She is inspired by the ongoing trend of the balayage and loves to create variations of that work on her clients. Last Summer, Jaclyn fell in love with extension installation and continues to build the passion with each set she transforms her clients with.  Jaclyn recently became a mom to a perfect little girl and loves splitting her time between home and he salon. Jaclyns clients fall in  love with her not only for her passion and talent but also because of her fun easy going personality.
                        </p>
                      </Item.Description>
                      <div className='buttonbox'>
                      <a href="https://www.vagaro.com/salonbeleza/book-now">
                        <Button primary>Book now</Button>
                      </a>
                      </div>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </Col>
            <Col xs={12} md={6}>
              <Item.Group>
                <Item>
                  <LazyLoad>
                    <Item.Image src={require('../images/brooke6.jpg')} size='medium' verticalAlign='middle' />
                  </LazyLoad>
                  <br />
                  <Item.Content>
                    <Item.Header style={{ "font-weight" : "bolder",
                                          "font-size" : "22px",
                                          "text-decoration" : "underline",
                                          "padding-left" : "10px",
                                          "padding-top" : "10px",
                                        }}>Brooke Andersen</Item.Header>
                    <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                    <Item.Description>
                      <p className='textbox'>Brooke has been doing hair for 3 Years. Growing up she always had a passion for hair and loves that she gets to do it every day. Brooke graduated from Aveda Institute in Provo Utah. She specializes in balayages and highlights but also loves doing colors and cuts. Her favorite thing about the industry is seeing the smile on her clients face and making them feel beautiful everyday . Outside of work she and her husband love spending time with their family. They love to spend time outdoors running, hiking, or even just a weekend in the mountains with family and friends.
                      </p>
                    </Item.Description>
                    <div className='buttonbox'>
                    <a href="https://www.vagaro.com/salonbeleza/book-now">
                      <Button primary>Book now</Button>
                    </a>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Col>
          </Row>
          <br />
            <Row>
              <Col xs={12} md={6}>
                <Item.Group>
                  <Item>
                    <LazyLoad>
                      <Item.Image src={require('../images/kim2.jpg')} size='medium' verticalAlign='middle' />
                    </LazyLoad>
                    <br />
                    <Item.Content>
                      <Item.Header style={{ "font-weight" : "600",
                                            "font-size" : "22px",
                                            "text-decoration" : "underline",
                                            "padding-left" : "10px",
                                           }}>
                                           Kim Stratton</Item.Header>
                      <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                      <Item.Description>
                        <p className='textbox'>Kim loves the creative aspect doing hair gives her. She went to Renaissance Academie in Provo, Utah and finished in January of 2018. Since then she has continued her education at specialized classes in blonding and consistently keeps up with new techniques shared by leaders of the industry. Kim is not a one size fits all stylist and you can bet she'll have some fun ideas for you! She loves anything outdoors and her most recent adventure will be a Volunteer trip to Nepal this summer. She is still growing her clientele and would love to meet you!
                        </p>
                      </Item.Description>
                      <div className='buttonbox'>
                      <a href="https://www.vagaro.com/salonbeleza/book-now">
                        <Button primary>Book now</Button>
                      </a>
                      </div>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </Col>
            <Col xs={12} md={6}>
              <Item.Group>
                <Item>
                  <LazyLoad>
                    <Item.Image src={require('../images/maddi11.jpg')} size='medium' verticalAlign='middle' />
                  </LazyLoad>
                  <br />
                  <Item.Content>
                    <Item.Header style={{ "font-weight" : "bolder",
                                          "font-size" : "22px",
                                          "text-decoration" : "underline",
                                          "padding-left" : "10px",
                                        }}>Maddi Fitzgerald</Item.Header>
                    <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                    <Item.Description>
                      <p className='textbox'>Maddi has been a hairstylist at Salon Beleza since 2017. She attended school at MATC in Lehi, Utah. As a hairstylist she transforms hair into clients dream hair.  She pays attention to detail and truly cares about her clients and making sure they feel beautiful. Along with hair she is also a makeup artist and specializes in updos. She has passion for bridal makeovers and loves helping them get ready for their big day. She also enjoys styling for photo shoots and other events. Outside of cosmetology she is definitely a family girl. She has been married for 2 years and enjoys spending time with her cute husband and close family here in Utah! She has many hobbies such as sewing, singing, camping and other outdoor activities.
                      </p>
                    </Item.Description>
                    <div className='buttonbox'>
                    <a href="https://www.vagaro.com/salonbeleza/book-now">
                      <Button primary>Book now</Button>
                    </a>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Col>
          </Row>
          <br />
            <Row>
              <Col xs={12} md={6}>
                <Item.Group>
                  <Item>
                    <LazyLoad>
                      <Item.Image src={require('../images/brandi.jpg')} size='medium' verticalAlign='middle' />
                    </LazyLoad>
                    <br />
                    <Item.Content>
                      <Item.Header style={{ "font-weight" : "600",
                                            "font-size" : "22px",
                                            "text-decoration" : "underline",
                                            "padding-left" : "10px",
                                           }}>
                                           Brandi Rafiner</Item.Header>
                      <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                      <Item.Description>
                        <p className='textbox'>Brandi has been practicing and perfecting cosmetology professionally for over six years. She has shown her passion and creativity with the beauty industry since she was a little girl!
                        The summer before her senior year of high school, Brandi started cosmetology school at MATC.
                        Over the years, Brandi has grown a love for men’s cuts, undercuts and foiling. As well as blondes, extensions and facial waxing.
                        Brandi has been at Salon Beleza for four years. She works part time in the salon doing hair, and full time with her kids. Brandi also enjoys the outdoors, the small farm her and her husband have created, and bing watching Netflix with popcorn and Cadbury eggs.
                        </p>
                      </Item.Description>
                      <div className='buttonbox'>
                      <a href="https://www.vagaro.com/salonbeleza/book-now">
                        <Button primary>Book now</Button>
                      </a>
                      </div>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </Col>
            <Col xs={12} md={6}>
              <Item.Group>
                <Item>
                  <LazyLoad>
                    <Item.Image src={require('../images/halie1.jpg')} size='medium' verticalAlign='middle' />
                  </LazyLoad>
                  <br />
                  <Item.Content>
                    <Item.Header style={{ "font-weight" : "bolder",
                                          "font-size" : "22px",
                                          "text-decoration" : "underline",
                                          "padding-left" : "10px",
                                        }}>Halie Taylor</Item.Header>
                    <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                    <Item.Description>
                      <p className='textbox'>With a mom who was a salon owner Halie grew up in salons. So the passion she has always had a  for the beauty industry is no surprise. She attended cosmetology school at American Beauty Academy in Payson UT and finished in 2011. Halie loves doing any and all hair coloring services, she uses a PH bond builder in all chemical services to help minimize damage and keep the overall health of your hair in tact. She has worked at Salon Beleza since 2015 and it’s become her home away from home. Halie just became a first time mama to a sweet little boy. One of Halie’s favorite things to do is watch her husband race dirt bikes, she and her family like to spend most of their free weekends on the desert or in the mountains camping.
                      </p>
                    </Item.Description>
                    <div className='buttonbox'>
                    <a href="https://www.vagaro.com/salonbeleza/book-now">
                      <Button primary>Book now</Button>
                    </a>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Col>
          </Row>
          <br />
            <Row>
              <Col xs={12} md={6}>
                <Item.Group>
                  <Item>
                    <LazyLoad>
                      <Item.Image src={require('../images/beth10.jpg')} size='medium' verticalAlign='middle' />
                    </LazyLoad>
                    <br />
                    <Item.Content>
                      <Item.Header style={{ "font-weight" : "600",
                                            "font-size" : "22px",
                                            "text-decoration" : "underline",
                                            "padding-left" : "10px",
                                           }}>
                                           Beth Blair</Item.Header>
                      <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                      <Item.Description>
                        <p className='textbox'>Beth has been working in the beauty industry for 19 years. She graduated from Bon Losee Academy in Provo, Ut while attending Orem High School. Her family teased her saying she was born with mascara in one hand and lipstick in the other. Her primary goal is  helping others not only look beautiful, but feel beautiful as well. Beth specializes in highlighting, blonding, men's cuts, and a-lines.  She starts each morning with a cup...or four of coffee. Her personal time is spent centered around her family and friends doing just about anything outdoors. Beth will always value her clientele and loves the relationships she builds.

                        </p>
                      </Item.Description>
                      <div className='buttonbox'>
                      <a href="https://www.vagaro.com/salonbeleza/book-now">
                        <Button primary>Book now</Button>
                      </a>
                      </div>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </Col>
            <Col xs={12} md={6}>
              <Item.Group>
                <Item>
                  <LazyLoad>
                    <Item.Image src={require('../images/audrey6.jpg')} size='medium' verticalAlign='middle' />
                  </LazyLoad>
                  <br />
                  <Item.Content>
                    <Item.Header style={{ "font-weight" : "bolder",
                                          "font-size" : "22px",
                                          "text-decoration" : "underline",
                                          "padding-left" : "10px",
                                        }}>Audrey Oberg</Item.Header>
                    <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                    <Item.Description>
                      <p className='textbox'>Audrey has been following her creative juices and goals since she was a little girl. After high school, she was inspired to attend Cosmetology school at Aveda in Provo, UT.  She studied and completed her education in 2016 while earning the Rising Star award of her graduating class.  She has gone on to perfect her skills as a colorist specializing in  bayalage and blonding. She loves to share her love for beauty with her clients and leave them feeling beautiful inside and out. Audrey loves spending her free time with her husband and family.  She enjoys a good game of volleyball and working out. Audrey joined Salon Beleza In  2017 and has been such a valuable addition to the team.
                      </p>
                    </Item.Description>
                    <div className='buttonbox'>
                    <a href="https://www.vagaro.com/salonbeleza/book-now">
                      <Button primary>Book now</Button>
                    </a>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Col>
          </Row>
          <br />
            <Row>
              <Col xs={12} md={6}>
                <Item.Group>
                  <Item>
                    <LazyLoad>
                      <Item.Image src={require('../images/ashy5.jpg')} size='medium' verticalAlign='middle' />
                    </LazyLoad>
                    <br />
                    <Item.Content>
                      <Item.Header style={{ "font-weight" : "600",
                                            "font-size" : "22px",
                                            "text-decoration" : "underline",
                                            "padding-left" : "10px",
                                           }}>
                                           Ashlyn Olsen</Item.Header>
                      <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                      <Item.Description>
                        <p className='textbox'>Ashlyn has been doing hair for 10+ years, 6+ of those years at Salon Beleza. Ashlyn loves the industry. She attended Paul Mitchell in Provo, Utah.  Doing hair has been her passion ever sense she graduated. She loves the cosmetology industry and the joy it brings to her life. She believes that there is nothing better than making someone feel beautiful in just a short period of time. Ashlyn currently has a 4 year old old son and another son on the way. She and her husband love spending time as a family doing various outdoor activities as well as Crossfit, Running, Water Skiing, playing the piano and, of course, chasing her little boy around.
                        </p>
                      </Item.Description>
                      <div className='buttonbox'>
                      <a href="https://www.vagaro.com/salonbeleza/book-now">
                        <Button primary>Book now</Button>
                      </a>
                      </div>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </Col>
            <Col xs={12} md={6}>
              <Item.Group>
                <Item>
                  <LazyLoad>
                    <Item.Image src={require('../images/kimber.jpg')} size='medium' verticalAlign='middle' />
                  </LazyLoad>
                  <br />
                  <Item.Content>
                    <Item.Header style={{ "font-weight" : "bolder",
                                          "font-size" : "22px",
                                          "text-decoration" : "underline",
                                          "padding-left" : "10px",
                                        }}>Kimber Alvey</Item.Header>
                    <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                    <Item.Description>
                      <p className='textbox'>Kimber has been doing hair for over six years and has been at salon Beleza for 5 years. She has a passion for balayage, blonding, and pixie cuts. She enjoys continuing her education, and learning new techniques. Kimber enjoys spending time with her husband and two dogs, and is currently in school for master aesthetics. She loves the creativity of doing hair, and is excited to expand her services in aesthetics.
                      </p>
                    </Item.Description>
                    <div className='buttonbox'>
                    <a href="https://www.vagaro.com/salonbeleza/book-now">
                      <Button primary>Book now</Button>
                    </a>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Col>
          </Row>
          <br />
            <Row>
              <Col xs={12} md={6}>
                <Item.Group>
                  <Item>
                    <LazyLoad>
                      <Item.Image src={require('../images/winter9.jpg')} size='medium' verticalAlign='middle' />
                    </LazyLoad>
                    <br />
                    <Item.Content>
                      <Item.Header style={{ "font-weight" : "600",
                                            "font-size" : "22px",
                                            "text-decoration" : "underline",
                                            "padding-left" : "10px",
                                           }}>
                                           Winter Abbatiello</Item.Header>
                      <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                      <Item.Description>
                        <p className='textbox'>
                          Winter has been a licensed cosmetologist for 12 years. She was born and raised in northern California and went to school at Frederick and Charles Beauty College. Winter had a passion for the beauty industry from a very small age. She enjoys balayage, foiling and short haircuts, and hair extensions.  Winter has been with Salon Beleza for 3 years now. Outside of doing hair Winter enjoys going to the gym, the outdoors and her 5 year old daughter. Winter comes from a family of artists and has two older siblings.  Winters artistic abilities come out with doing hair and each client is her canvas. Winter is beyond passionate about her work, and her life as a stylist.
                        </p>
                      </Item.Description>
                      <div className='buttonbox'>
                      <a href="https://www.vagaro.com/salonbeleza/book-now">
                        <Button primary>Book now</Button>
                      </a>
                      </div>
                    </Item.Content>
                  </Item>
                </Item.Group>
            </Col>
            <Col xs={12} md={6}>
              <Item.Group>
                <Item>
                  <LazyLoad>
                    <Item.Image src={require('../images/nat20.jpg')} size='medium' verticalAlign='middle' />
                  </LazyLoad>
                  <br />
                  <Item.Content>
                    <Item.Header style={{ "font-weight" : "bolder",
                                          "font-size" : "22px",
                                          "text-decoration" : "underline",
                                          "padding-left" : "10px",
                                        }}>Natalie</Item.Header>
                    <Item.Meta style={{ "padding-left" : "10px" }}>About Me</Item.Meta>
                    <Item.Description>
                      <p className='textbox'>
                        Meet Natalie, she's been the Salon manager at Salon Beleza for a year and a half.
                        She has been in the beauty industry for 10 years, attending cosmetology school, nail school, working as a nail technician, and managing in the beauty industry.
                        Natalie loves making everyone feel special when they walk in the salon and loves getting to know our amazing guests. She loves animals, spending time with her family and traveling.
                      </p>
                    </Item.Description>
                    <div className='buttonbox'>
                    <a href="https://www.vagaro.com/salonbeleza/book-now">
                      <Button primary>Book now</Button>
                    </a>
                    </div>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Col>
          </Row>
          <br />
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

export default Stylists;
