import React, { useState, useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from 'reactstrap';
import { getDevis } from '../actions/devisAction';
import { getProduct } from '../actions/productAction';
import Pricing_Table_V2 from '../components/section-components/pricing-table-v2';

const Tables = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Pricing_Table_V2 />
        </Row>
      </div>
    </>
  );
};

export default Tables;
