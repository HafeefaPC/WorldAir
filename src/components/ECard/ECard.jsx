import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import './card.css'
import n2 from '../../assets/n2.jpg'
import N1 from '../../assets/N1.jpg'
const ExclusiveStays = () => {
  return (
    <Container className="exclusive-stays">
      <h2 className="text-center1"> Our Exclusive Stays and Exciting Offers</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Carousel interval={3000} pause={false}>
            <Carousel.Item>
              <Card>
                <Card.Img
                  variant="top"
                  src={N1} // Replace with your image URL
                  alt="Offer 1"
                />
               
                <Card.Body>
                  <Card.Title> <p className="card-title">Nidhi Residency</p> </Card.Title>
                  <Card.Text>Enjoy your stay at heart of Guruvayoor as you visit the Temple.</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Img
                  variant="top"
                  src={n2} // Replace with your image URL
                  alt="Offer 2"
                />
                
                <Card.Body className='card-body'>
                  <Card.Title ><p className='card-title'>Nidhi Cottage</p></Card.Title>
                  <Card.Text>A refreshing and beautiful stay near Chettuva Backwaters</Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
            {/* Add more Carousel.Item for additional exclusive stays and offers */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ExclusiveStays;
