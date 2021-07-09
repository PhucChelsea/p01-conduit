import React from "react";
import { Layout, Row, Col } from "antd";
import { EditFilled, SettingFilled } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { helper } from "../helpers/common";
const { Header } = Layout;

const HeaderComponent = () => {
  // const { pathname } = useLocation();
  const info = helper.decodeTokenFromLocalStorage();
  console.log("info", info);
  const username = info !== null ? info["username"] : null;
  return (
    <Row>
      <Col span={20} offset={2}>
        <Header className="layout_header">
          <Link to="/">
            <h1 className="header__text_brand text">conduit</h1>
          </Link>
          <Row>
            <Col className="header__text_item">
              <Link className="header__text_link" to="/home">
                Home
              </Link>
            </Col>
            {helper.isEmptyObject(info) || info == null ? (
              <>
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
              </>
            ) : (
              <>
                <Col className="header__text_item">
                  <Link className="header__text_link" to="/editor">
                    <EditFilled />
                    New Post
                  </Link>
                </Col>
                <Col className="header__text_item">
                  <Link className="header__text_link" to="/setting">
                    <SettingFilled /> Settings
                  </Link>
                </Col>
                <Col className="header__text_item">
                  <Link className="header__text_link" to="/profile">
                    {username}
                  </Link>
                </Col>
              </>
            )}
          </Row>
        </Header>
      </Col>
    </Row>
  );
};
export default React.memo(HeaderComponent);
