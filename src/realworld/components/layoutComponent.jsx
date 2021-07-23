import React from "react";
import HeaderComponent from "./headerComponent";
import FooterComponent from "./footerComponent";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../Style/layout.css";
import { Layout } from "antd";

const { Content } = Layout;

const StyleContent = styled.div`
  min-height: 110vh;
  margin-bottom: 6rem;
`;
const LayoutComponent = (props) => {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content className="layout_content">
        <StyleContent>{props.children}</StyleContent>
      </Content>
      <FooterComponent />
    </Layout>
  );
};
LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
export default React.memo(LayoutComponent);
