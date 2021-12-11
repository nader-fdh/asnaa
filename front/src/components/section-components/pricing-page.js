import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap';
import { getDemandeAchat } from '../../actions/demandeAchat';

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ModalViewDemandeAchats from './ModalViewDemandeAchats';

const DemandeAchat = () => {
  const demandeAchat = useSelector(state => state.products.demandeAchats);
  const dispatch = useDispatch();
  console.log('aaa', demandeAchat);
  useEffect(() => {
    dispatch(getDemandeAchat());
  }, []);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="pricing-page-area pd-top-112">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <h2 className="title">
                  Demandes <span>D'achat</span>
                </h2>

                <p>
                  dsvsdvsfvndw,cknhdjknhjcjgfhdjthrhfdrhtuèuftyyrtygshdjrftgfjsdxwhgvrdktfgludvgefbkhhdftufly-ytfcghufykfjhrfhdh;nvdfgrtujgfnhbe{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Liste des demandes d'achats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Nom et Prénom</th>
                      <th>Adresse</th>
                      <th>Code Postal</th>
                      <th>Numéro de telephone</th>
                      <th>E-mail</th>
                      <th className="text-center">Pro ou Particulier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demandeAchat != null
                      ? demandeAchat.map(el => (
                          <tr>
                            <td>
                              {el.firstName}-{el.lastName}
                            </td>
                            <td> {el.adress} </td>
                            <td> {el.codePostal} </td>
                            <td> {el.phoneNumber} </td>
                            <td>{el.email}</td>
                            <td className="text-center " onClick={() => setModalShow(true)} style={{ cursor: 'pointer' }}>
                              <ModalViewDemandeAchats
                                show={modalShow}
                                products={el.productId}
                                totel={el.total}
                                onHide={() => setModalShow(false)}
                              />
                            </td>
                          </tr>
                        ))
                      : true}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DemandeAchat;
