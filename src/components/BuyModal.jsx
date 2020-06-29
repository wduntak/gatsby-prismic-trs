import React, { useState } from 'react';
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Form,
  InputGroup,
} from "react-bootstrap"
import styled from 'styled-components';
import CheckoutButton from './CheckoutButton';

const CustomModal = styled(Modal)`
  img {
    width: 100%;
  }
`

const CustomButton = styled(Button)`
  font-family: "Gelasio";
  font-size: 16px;
  text-align: center;
  padding: 12px 30px;
  border-radius: 10px;
  &.cancel-btn {
    background-color: #fff;
    border: 1px solid #909090;
    color: #909090;
  }
  &.buy-btn {
    background-color: #2196f3;
    border: 2px solid #2196f3;
    color: #fff;
    &:hover {
      background-color: #64b5f6;
      border: 2px solid #2196f3;
    }
    &:focus {
      box-shadow: none;
      background-color: #2196f3;
      border: 2px solid #2196f3;
    }
  }
`

export default function BuyModal(props)  {
  const [show, setShow] = useState(false)

  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const price = props.product[0].node.price;
  const formatPrice = (price/100).toFixed(2);

  return (
    <>
      <CustomButton onClick={handleShow} className="buy-btn">
        {props.buttonText}
      </CustomButton>

      <CustomModal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Buy Now</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <img src={props.productImage}></img>
              </Col>
              <Col xs={6} md={6}>
                <Row>
                  <h5>{props.product[0].node.product.name}</h5>
                </Row>
                <Row style={{ fontFamily: 'Gelasio' }}>{props.product[0].node.product.metadata.description}</Row>
              </Col>
              <Col xs={6} md={2}>
                <strong>${formatPrice} {props.product[0].node.currency.toUpperCase()}</strong>
                <p style={{ fontSize: "12px" }}>+ Shipping Fees</p>
              </Col>
            </Row>
            <Row>
              <Col xs={8} md={8}></Col>
              <Col xs={4} md={4}>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">QTY: </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="number"
                    min="1"
                    step="1"
                    defaultValue={quantity}
                    onChange={e => setQuantity(e.target.value)}
                    />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <CustomButton onClick={handleClose} className="cancel-btn">
            Cancel
          </CustomButton>
          <CheckoutButton quantity={quantity} />
        </Modal.Footer>
      </CustomModal>
    </>
  )
}
