import React from 'react';
import image1 from 'src/assets/images/modern-design.jpg';
import image2 from 'src/assets/images/clean-design.jpg';
import image3 from 'src/assets/images/great-support.jpg';
import image4 from 'src/assets/images/easy-customise.jpg';
import image5 from 'src/assets/images/unlimited-features.jpg';
import image6 from 'src/assets/images/advanced-option.jpg';

import { Row, Col, Card } from 'antd';
const { Meta } = Card;

export const Feature = () => {
  return (
    <div id="main-feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <a className="block-anchor" id="feature" href="!#">
            Pseudo anchor
          </a>
          <h2>Key Features and Benefits</h2>
          <p>
            Obcaecati consequatur libero repudiandae, aperiam itaque laborum!
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Modern Design" src={image1} />}>
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image2} />}>
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image3} />}>
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image4} />}>
              <Meta title="Easy to customise" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image5} />}>
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card hoverable cover={<img alt="Test" src={image6} />}>
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
