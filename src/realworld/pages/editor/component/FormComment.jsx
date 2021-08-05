import React, { useEffect } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import ListComment from "./ListComment";
import { getArticleByTitle } from "../actions/getArticleByTitle";
import { postCommentUser } from "../actions/postComment";
import { useDispatch, useSelector } from "react-redux";
import { getBodyArticleByTitleReselect } from "../reselect/getArticleTitleReselect";
import { titleArticlePostReselect } from "../reselect/postArticleReselect";
import { createStructuredSelector } from "reselect";

const FormComment = () => {
  const dispatch = useDispatch();
  const { body } = useSelector(
    createStructuredSelector({
      body: getBodyArticleByTitleReselect,
    })
  );
  const { title } = useSelector(
    createStructuredSelector({
      title: titleArticlePostReselect,
    })
  );
  useEffect(() => {
    dispatch(getArticleByTitle(title));
  }, [dispatch, title]);

  console.log("bodY:", body);
  console.log("TiTLE:", title);

  const onFinish = (values) => {
    console.log("valuesse----:", values);
    dispatch(postCommentUser(values, title));
  };
  return (
    <Row>
      <Col span={18} offset={3}>
        <h3>body:{body}</h3>
        <hr />
        <Row>
          <Col>
            <Form onFinish={onFinish}>
              <Form.Item name="body">
                <Input.TextArea
                  placeholder="Write your article (in markdown)"
                  rows={6}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Post comments
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ListComment />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default React.memo(FormComment);
