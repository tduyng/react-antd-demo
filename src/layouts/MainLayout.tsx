import React, { ReactNode } from 'react';
import { AppHeader } from 'src/components/Header';
import { AppFooter } from 'src/components/Footer';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';
const { Header, Content, Footer } = Layout;

export interface ILayoutProps {
  children: ReactNode;
  helmet: IHelmet;
}

export interface IHelmet {
  title?: string;
  description?: string;
  lang?: string;
  isRoot?: boolean;
}

export const MainLayout = (props: ILayoutProps) => {
  const { children, helmet } = props;
  const title = helmet.isRoot
    ? 'React Antd Demo'
    : `${helmet.title} | React Antd Demo`;
  return (
    <Layout className="mainLayout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={helmet.description} />
      </Helmet>

      <Header>
        <AppHeader />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
