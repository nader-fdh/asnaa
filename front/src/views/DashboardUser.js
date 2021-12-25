import React, { useEffect } from 'react';
// nodejs library that concatenates classes

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

// core components
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/productAction.js';
import { getDevis } from '../actions/devisAction.js';

import './dashboardUser.css';
import { getDemandeAchat } from '../actions/demandeAchat.js';

function DashboardUser(props) {
  const [bigChartData, setbigChartData] = React.useState('data1');
  const setBgChartData = name => {
    setbigChartData(name);
  };
  const dispatch = useDispatch();
  const users = useSelector(state => state.products.users);
  console.log('ysersss', users);
  const allDevis = useSelector(state => state.products.allDevis);
  console.log('devis', allDevis);
  const { user: currentUser } = useSelector(state => state.auth);
  const demandeAchat = useSelector(state => state.products.demandeAchats);
  console.log('demandeAchat', demandeAchat);
  console.log(currentUser);
  const DevisUserArray = [];

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDevis());
    dispatch(getDemandeAchat());
  }, [dispatch]);
  return (
    <>
      {currentUser ? (
        <>
          <div className="pricing-page-area pd-top-112">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6">
                  <div className="section-title text-center">
                    <h2 className="title">
                      Tableau <span>De bord</span>
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
            <div className="cardWidth">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Données personnelles</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="row">
                    <div className="col-4">
                      <p>Nom :</p>
                    </div>
                    <div className="col-8">
                      <p>{currentUser.username}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p>Prénom :</p>
                    </div>
                    <div className="col-8">
                      <p>{currentUser.lastname}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p>E-mail :</p>
                    </div>
                    <div className="col-8">
                      <p>{currentUser.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p>Tél :</p>
                    </div>
                    <div className="col-8">
                      <p>{currentUser.phonenumber}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <p>Adresse :</p>
                    </div>
                    <div className="col-8">
                      <p>{currentUser.adress}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {allDevis
              ? allDevis.map(el =>
                  el.name.includes(currentUser.username) ? (
                    <div className="cardWidth">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h4">Détail devis</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <div>
                            <div className="row">
                              <div className="col-6">
                                <p>Type de devis:</p>
                              </div>
                              <div className="col-6">
                                <p>{el.type}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <p>Quantité :</p>
                              </div>
                              <div className="col-6">
                                <p>{el.quantité}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <p>Conception :</p>
                              </div>
                              <div className="col-6">
                                <p>{el.conception}</p>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  ) : (
                    true
                  )
                )
              : true}
            {demandeAchat
              ? demandeAchat.map(el =>
                  el.firstName.includes(currentUser.username) ? (
                    <div className="cardWidth">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h4">Demande d'achat</CardTitle>
                        </CardHeader>
                        <CardBody>
                          <div>
                            <div className="row">
                              <div className="col-6">
                                <p>Création de damande d'achat:</p>
                              </div>
                              <div className="col-6">
                                <p>{el.createdAt.replace(/T/, '')}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <p>Prix total:</p>
                              </div>
                              <div className="col-6">
                                <p>{el.total}</p>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  ) : (
                    true
                  )
                )
              : true}
          </div>
        </>
      ) : (
        true
      )}
    </>
  );
}

export default DashboardUser;
