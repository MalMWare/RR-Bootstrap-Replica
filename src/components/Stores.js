import { Fragment } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../css/stores.css'

const stores = [
    {
      imgUrl: '../assets/sprouts.webp',
      storeName: 'Sprouts Farmers Market'
    },
    {
      imgUrl: '../assets/Smiths.webp',
      storeName: "Smith's",
    },
    {
      imgUrl: '../assets/albertsons.webp',
      storeName: 'Albertsons'
    },
    {
      imgUrl: '../assets/Costco.webp',
      storeName: 'Costco Wholesale'
    },
    {
      imgUrl: '../assets/cardenas.webp',
      storeName: 'Cardenas Markets'
    }
]

function Stores() {
    return <div>
        <h2 className="location-header">Choose your store in <span>Las Vegas</span></h2>
        <Container>
            <Row>
                {
                    stores.map((store, i, arr) => {
                        return <Fragment key={i}>
                            <div className="store-link">
                                <Col xs='.5'>
                                    <Image src={store.imgUrl} roundedCircle className="store-image"/>
                                </Col>
                                <Col className="store-info">
                                    <h5>{store.storeName}</h5>
                                    <p>Delivery + Pickup</p>
                                </Col>
                            </div>
                            {i < arr.length-1 && <Col sm='1'></Col>}
                        </Fragment>
                    })
                }
            </Row>
        </Container>
    </div>
}

export default Stores