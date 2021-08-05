import { DeleteFilled } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import React from "react";
import { postCommentReselect } from "../reselect/postCommentReselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const ListComment = () => {
  const { listComment } = useSelector(
    createStructuredSelector({
      listComment: postCommentReselect,
    })
  );
  console.log("list  comment:", listComment);
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
