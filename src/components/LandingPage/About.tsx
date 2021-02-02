import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

const initItems = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'High Performance',
    content:
      'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Flat Design',
    content:
      'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content:
      'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
];

export const About = () => {
  const [items, setItems] = useState(initItems);
  useEffect(() => {
    setItems(initItems);
  }, [items]);
  return (
    <div id="main-about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <a className="block-anchor" id="about" href="!#">
            Pseudo anchor
          </a>
          <h2>About Us</h2>
          <p>dolor sit amet, consectetur adipisicing elit</p>
        </div>
        <div className="contentHolder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            necessitatibus officiis repudiandae est deserunt delectus dolorem
            iure porro distinctio fuga, nostrum doloremque. Facilis porro in
            laborum dolor amet ratione hic? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Magnam aut a porro, adipisci quidem
            sint enim pariatur ducimus, saepe voluptatibus inventore commodi!
            Quis, explicabo molestias libero tenetur temporibus perspiciatis
            deserunt.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};
