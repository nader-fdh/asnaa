import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup, SplitButton, Dropdown, FormControl } from 'react-bootstrap';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import './ModalViewDemandeAchats.css';
const ModalViewDemandeAchats = props => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const basketProducts = props.products;
  console.log('azazazaz', props);
  return (
    <>
      <span onClick={handleShow}>
        <ShoppingBasketIcon /> Detailles
      </span>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Détailles produits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Liste des produits demander</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive style={{ overflow: 'hidden' }}>
                    <thead className="text-primary" style={{ overflow: 'hidden !important' }}>
                      <tr>
                        <th>image</th>
                        <th>Nom </th>
                        <th>Prix</th>
                      </tr>
                    </thead>
                    <tbody style={{ overflow: 'hidden !important' }}>
                      {basketProducts != null
                        ? basketProducts.map(el => (
                            <tr>
                              <td>
                                <img src={el.image} width="50" />
                              </td>
                              <td>{el.name}</td>
                              <td> {el.prix} </td>
                            </tr>
                          ))
                        : true}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>{props.totel != undefined ? <h3>Total a payer :{props.totel} DT</h3> : <h3>Demande d'achat vide</h3>}</Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewDemandeAchats;
