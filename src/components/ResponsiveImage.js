import React from 'react'
import {Tabs,Tab,Container,Row,Col,Image} from 'react-bootstrap'
import imge from'../pics/10440.jpg'

function ResponsiveImage() {
    return (
        <div>
            <Container>
                <Row >
                    <Col  lg={8} md={12} sm={12} xm={2}>
                        <Image fluid src={imge} alt='img' style={{}} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResponsiveImage
