import { DeleteFilled } from "@ant-design/icons";
import { Card, Row, Col } from "antd";
import React, { useState } from "react";
import {
  postCommentReselect,
  listCommentsReselect,
} from "../reselect/postCommentReselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const ListComment = () => {
  const { comment, listComments } = useSelector(
    createStructuredSelector({
      comment: postCommentReselect,
      listComments: listCommentsReselect,
    })
  );
  console.log("list-comment:", comment);

  return (
    <Row>
      <Col>
        {listComments &&
          listComments.map((item, index) => (
            <Row key={index}>
              <Col span={24}>
                {comment &&
                  comment.map((item, id) => (
                    <Row key={id}>
                      <Col>
                        <Card
                          title={item.body}
                          bordered={false}
                          style={{ width: 300 }}
                        >
                          <p>userName</p>
                          <DeleteFilled />
                        </Card>
                      </Col>
                    </Row>
                  ))}
              </Col>
            </Row>
          ))}
      </Col>
    </Row>
  );
};
export default React.memo(ListComment);
