import React, { useEffect } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import { useHistory } from "react-router-dom";
import { api } from "../../../api/api-user";
import { helper } from "../../../helpers/common";
import { postArticleUser } from "../actions/postArticle";
import { useDispatch } from "react-redux";

const FormPublish = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = (values) => {
    console.log("values:", values);
    const title = values.title;
    dispatch(postArticleUser(values));
    history.push(`/editor/${title}`);
  };
  return (
    <>
      <Row>
        <Col span={18} offset={3}>
          <Form onFinish={onFinish}>
            <Form.Item name="title">
              <Input placeholder="Article Title" />
            </Form.Item>
            <Form.Item name="description">
              <Input placeholder="What's this article about?" />
            </Form.Item>
            <Form.Item name="body">
              <Input.TextArea
                placeholder="Write your article (in markdown)"
                rows={6}
              />
            </Form.Item>
            <Form.Item name="tagList">
              <Input placeholder="Enter tags" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Publish
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(FormPublish);
