import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS if not already imported
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
const MyCarousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel showIndicators showControls>
        <MDBCarouselInner>
          <MDBCarouselItem itemId={0}>
            <MDBView>
              <img
                src={p1}
                className="d-block w-100"
                alt="First slide"
              />
               <div className="carousel-text">
                <h3>Slide 1</h3>
                <p>Description for Slide 1</p>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={1}>
            <MDBView>
              <img
                src={p2}
                className="d-block w-100"
                alt="Second slide"
              />
               <div className="carousel-text">
                <h3>Slide 2</h3>
                <p>Description for Slide 1</p>
              </div>
            </MDBView>
          </MDBCarouselItem>
          {/* Add more Carousel Items as needed */}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default MyCarousel;
