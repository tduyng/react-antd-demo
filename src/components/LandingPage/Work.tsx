import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export const Work = () => {
  const [visible, setVisible] = useState(false);
  const showModal = e => {
    setVisible(true);
  };
  const handleCancel = e => {
    setVisible(false);
  };
  return (
    <div id="main-works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <a className="block-anchor" id="works" href="!#">
            Pseudo anchor
          </a>
          <h2>How it works</h2>
          <p>
            Perspiciatis vero similique, ut ducimus modi ipsam autem tempora
          </p>
        </div>
        <div className="contentHolder">
          <Button size="large" onClick={e => showModal(e)}>
            <i className="fas fa-play"></i>
          </Button>
        </div>
        <Modal
          title="Woocommerce Tutorial"
          visible={visible}
          onCancel={e => handleCancel(e)}
          footer={null}
        >
          <iframe
            title="React JS"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/N3AkSS5hXMA"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};
