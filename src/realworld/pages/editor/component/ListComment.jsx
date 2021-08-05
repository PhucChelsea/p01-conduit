import { DeleteFilled } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import React from "react";

const ListComment = () => {
  return (
    <Row>
      <Col span={24}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>userName</p>
          <DeleteFilled />
        </Card>
      </Col>
    </Row>
  );
};
export default React.memo(ListComment);
