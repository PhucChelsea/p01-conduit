import React from "react";
import { Pagination, Row, Col } from "antd";

const PaginationComponent = () => {
  return (
    <Row>
      <Col span={24}>
        <Pagination defaultCurrent={1} total={500} />
      </Col>
    </Row>
  );
};
export default React.memo(PaginationComponent);
