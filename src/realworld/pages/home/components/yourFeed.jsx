import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

const YourFeed = () => {

  
  const info = localStorage.getItem("jwt");
  return (
    <>
      <Row>
        <Col span={22} offset={1}>
          <h1>Hello</h1>
        </Col>
      </Row>
    </>
  );
};
export default React.memo(YourFeed);
