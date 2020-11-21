import React, { useEffect, useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [targetOffset, setTargetOffset] = useState<number | undefined>(
    undefined,
  );
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="/">Tech</a>
        </div>
        <div className="mobile-hidden">
          <Anchor targetOffset={targetOffset}>
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobile-visible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset={targetOffset}>
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
