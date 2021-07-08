import React from "react";
import { Layout, Row, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer
      className="footer"
      style={{ position: "fixed", bottom: "0px", zIndex: "10" }}
    >
      <Link>
        <Row>
          <Col span={24}>
            <div className="footer_text">
              <GithubOutlined />
              <span style={{ marginLeft: "10px" }}>
                Fork on Github
              </span>
            </div>
          </Col>
        </Row>
      </Link>
    </Footer>
  );
};
export default React.memo(FooterComponent);
