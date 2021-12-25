import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDevis } from '../../actions/devisAction';
import sectiondata from '../../data/sections.json';
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from 'reactstrap';
import { Button } from 'react-bootstrap';

const Pricing_Table_V2 = () => {
  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = 'image';

  const dispatch = useDispatch();
  const allDevis = useSelector(state => state.products.allDevis);
  console.log('devis', allDevis);
  const auth = useSelector(state => state.auth);
  console.log('ayhhh', auth.user);

  useEffect(() => {
    dispatch(getDevis());
  }, []);
  return (
    <div>
      <>
        <div className="pricing-page-area pd-top-112">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center">
                  <h2 className="title">
                    All <span>Devis</span>
                  </h2>

                  <p>
                    {' '}
                    dsvsdvsfvndw,cknhdjknhjcjgfhdjthrhfdrhtuèuftyyrtygshdjrftgfjsdxwhgvrdktfgludvgefbkhhdftufly-ytfcghufykfjhrfhdh;nvdfgrtujgfnhbe{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {allDevis != null
          ? allDevis.map(el => (
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">Devis : {el.name}</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Type</th>
                          <th>Materiau</th>
                          <th>Epaisseur</th>
                          <th>Peinture </th>
                          <th>Conception </th>
                          <th className="text-center">Quantité</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{el.type}</td>
                          <td> {el.materiau} </td>
                          <td> {el.epaisseur} </td>
                          <td> {el.peinture} </td>
                          <td> {el.conception} </td>
                          <td className="text-center"> {el.quantité} </td>
                        </tr>
                      </tbody>
                    </Table>
                    <a href={el.file}>
                      <Button variant="primary">Download File</Button>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            ))
          : true}
      </>
    </div>
  );
};

export default Pricing_Table_V2;
