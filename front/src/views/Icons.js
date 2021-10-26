import React from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import Pricing_Table from '../components/section-components/pricing-table';
import Product from '../components/section-components/product-v2';

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Product />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
