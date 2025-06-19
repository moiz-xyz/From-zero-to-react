import React from 'react';
import { Card, Col, Row } from 'antd';
const Cards = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Orders" variant="borderless">
       1200
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Inventory" variant="borderless">
        18000
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Customer" variant="borderless">
        1800
      </Card>
    </Col>
  </Row>
);
export default Cards;