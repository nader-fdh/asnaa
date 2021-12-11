import React, { useEffect } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

// core components
import { chartExample1, chartExample2, chartExample3, chartExample4 } from '../variables/charts.js';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/productAction.js';

function DashboardUser(props) {
  const [bigChartData, setbigChartData] = React.useState('data1');
  const setBgChartData = name => {
    setbigChartData(name);
  };
  const dispatch = useDispatch();
  const users = useSelector(state => state.products.users);
  console.log('ysersss', users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
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
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Liste of users</CardTitle>
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
                    {users
                      ? users.map(el => (
                          <tr>
                            <td>
                              {el.username}-{el.lastname}
                            </td>
                            <td>{el.adress}</td>
                            <td>{el.codepostal}</td>
                            <td>{el.phonenumber}</td>
                            <td>{el.email}</td>
                            <td className="text-center">{el.username}</td>
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
    </>
  );
}

export default DashboardUser;
