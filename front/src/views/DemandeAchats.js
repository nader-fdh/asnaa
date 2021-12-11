import React from 'react';
import { Col, Row } from 'reactstrap';
import DemandeAchat from '../components/section-components/pricing-page';

const DemandeAchats = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <DemandeAchat />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DemandeAchats;
