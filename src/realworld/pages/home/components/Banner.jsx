import React from "react";
import { Row, Col } from "antd";

const BannerHomePage = () => {
  return (
    <>
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
    </>
  );
};
export default React.memo(BannerHomePage);
