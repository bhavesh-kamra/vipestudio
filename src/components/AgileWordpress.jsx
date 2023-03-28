import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sec7_img1 from '../assets/images/agilewordpress/png/sec7_img1.png'

const AgileWordpress = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col>
              <img src={sec7_img1} alt="group" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AgileWordpress