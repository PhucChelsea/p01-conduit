import { DeleteFilled } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import React, { useState } from "react";
import { postCommentReselect } from "../reselect/postCommentReselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const ListComment = () => {
  const { comments } = useSelector(
    createStructuredSelector({
      comments: postCommentReselect,
    })
  );
  console.log("list-comment:", comments);


  return (
    <Row>
      {comments &&
        comments.map((item, id) => (
          <Col key={id} span={24}>
            <Card title={item.body} bordered={false} style={{ width: 300 }}>
              <p>userName</p>
              <DeleteFilled />
            </Card>
          </Col>
        ))}
    </Row>
  );
};
export default React.memo(ListComment);
