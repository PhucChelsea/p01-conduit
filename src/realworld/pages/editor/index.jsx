import React from "react";
import { Row, Col, Input, Button } from "antd";
import LayoutComponent from "../../components/layoutComponent";

const { TextArea } = Input;
const NewPostPage = () => {
  return (
    <LayoutComponent>
      <Row>
        <Col span={18} offset={3}>
          <Input placeholder="Article Title" />
          <Input placeholder="What's this article about?" />
          <TextArea placeholder="Write your article (in markdown)" rows={6} />
          <Input placeholder="Enter tags" />
          <Button type="primary" style={{ float: "right" }}>
            Publish Article
          </Button>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(NewPostPage);
