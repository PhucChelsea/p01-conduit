import React from "react";
import { Layout, Row, Col } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Header } = Layout;

const HeaderComponent = () => {
  const { pathname } = useLocation();
  return (
    <Row>
      <Col span={20} offset={2}>
        <Header className="layout_header" >
          <Link to="/">
            <h1 className="header__text_brand text">conduit</h1>
          </Link>
          <Row>
            <Col className="header__text_item">
              <Link className="header__text_link" to="/home">
                Home
              </Link>
            </Col>
            <Col className="header__text_item">
              <Link className="header__text_link" to="/login">
                SignIn
              </Link>
            </Col>
            <Col className="header__text_item">
              <Link className="header__text_link" to="/register">
                SignUp
              </Link>
            </Col>
          </Row>
        </Header>
      </Col>
    </Row>
  );
};
export default React.memo(HeaderComponent);
