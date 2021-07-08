import React from "react";
import LayoutComponent from "../../components/layoutComponent";
import { Row, Col } from "antd";
const HomePage = () => {
  return (
    <LayoutComponent>
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "#5cb85c",
            height: "170px",
            textAlign: "center",
          }}
        >
          <h1>conduit</h1>
          <span>A place to share your knowledge.</span>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(HomePage);
