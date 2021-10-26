
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// react plugin for creating notifications over the dashboard
import NotificationAlert from 'react-notification-alert';

// reactstrap components
import { Alert, Table, Button, Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';
// com^ponent
import ModalPcb from './Modal/ModalPcb';
import ModalTolerie from './Modal/ModalTolerie';
import ModalDgl from './Modal/ModalDgl';
import ModalCNC from './Modal/ModalCNC';
import { Link } from '@material-ui/core';

function Notifications() {
  const notificationAlertRef = React.useRef(null);
const devis = useSelector(state => state.products)
const oneDevis = devis.devis
if (oneDevis) {
  
  console.log("ddddd",oneDevis.file)
}

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">
                        Demande de devis
                        <p className="category">Click et remplir le fomulaire</p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="12">
                          <div
                            style={{
                              // flexDirection: 'column',
                              margin: '20px',
                              // width: '700px',
                            }}
                            className="single-shop style-two"
                          >
                            <div className="thumb">
                              <img src="" alt="" />
                              <div className="cart-btn">
                                <div className="cart-btn-wrap">
                                  <ModalPcb check={true} />
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <Link to="">PCB : Printed Circuit Board , Cartes électroniques</Link>
                              <div className="price">
                                <span>FDSDCSDCSDNSHJSIFSGYJHGURTGXUFGHJXDYUFXJBYESRTFHYDXGHFDRU5H6GFUJSFRYSEUSEGUFWDUIZJF</span>
                                {/* <del>999995555</del> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="12">
                          <div
                            style={{
                              flexDirection: 'column',
                              margin: '20px',
                            }}
                            className="single-shop style-two"
                          >
                            <div className="thumb">
                              <img src="" alt="" />
                              <div className="cart-btn">
                                <div className="cart-btn-wrap">
                                  <ModalTolerie check={true} />
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <Link to="">Tolerie</Link>
                              <div className="price">
                                <span>ssss</span>
                                {/* <del>999995555</del> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="12">
                          <div
                            style={{
                              flexDirection: 'column',
                              margin: '20px',
                            }}
                            className="single-shop style-two"
                          >
                            <div className="thumb">
                              <img src="" alt="" />
                              <div className="cart-btn">
                                <div className="cart-btn-wrap">
                                  <ModalDgl check={true} />
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <Link to="">Decoupage et gravure laser</Link>
                              <div className="price">
                                <span>ssss</span>
                                {/* <del>999995555</del> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="12">
                          <div
                            style={{
                              flexDirection: 'column',
                              margin: '20px',
                            }}
                            className="single-shop style-two"
                          >
                            <div className="thumb">
                              <img src="" alt="" />
                              <div className="cart-btn">
                                <div className="cart-btn-wrap">
                                  <ModalCNC check={true} />
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <Link to="">Usinage CNC Bois Allucoband</Link>
                              <div className="price">
                                <span>ssss</span>
                                {/* <del>999995555</del> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                      
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Devis</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>nom de la commande</th>
                      <th>type</th>
                      <th>matériau</th>
                      <th>Epaisseur </th>
                      <th className="text-center">Quantité</th>
                      <th>file </th>
                    </tr>
                  </thead>
                  {oneDevis ?   <tbody>
                  
                  <tr>
                    <td>{oneDevis.name}</td>
                    <td>{oneDevis.type}</td>
                    <td>{oneDevis.materiau}</td>
                    <td>{oneDevis.epaisseur}</td>
                    <td className="text-center">{oneDevis.quantité}</td>
                    <td>{oneDevis.file}</td>
                  </tr>
                 
                </tbody> : null}
                
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
