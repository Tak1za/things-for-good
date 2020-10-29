import React from "react";
import { Col, Modal, Row, Container } from "react-bootstrap";
import "./LocationModal.scss";

function LocationModal(props) {
  const { selectedlocation } = props;
  return (
    <>
      {selectedlocation ? (
        <Modal {...props} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Row>
                <Col xs={2}>
                  <span>Address: </span>
                </Col>
                <Col xs={10}>
                  <p>
                    {selectedlocation.writtenAddress}
                  </p>
                  <p>
                    {selectedlocation.address}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <span>Added By: </span>
                </Col>
                <Col xs={10}>
                  <p>{selectedlocation.name}</p>
                  <p>{selectedlocation.email}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <span>Type: </span>
                </Col>
                <Col xs={10}>
                  <p>
                    {selectedlocation.locationType[0].toUpperCase() +
                      selectedlocation.locationType.slice(1)}
                  </p>
                </Col>
              </Row>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
}

export default LocationModal;
