import { Col, Row, Tabs } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LayoutComponent from "../../components/layoutComponent";
import { getDataUser } from "./actions/ActionGetUser";
import YourFeed from "./components/yourFeed";
import ArticleTag from "./components/ArticleTag";
import GlobalFeed from "./components/GlobalFeed";
import PopularTags from "./components/popularTags";

const { TabPane } = Tabs;
const HomePage = () => {
  const dispatch = useDispatch();
  const info = localStorage.getItem("jwt");
  if (info !== null) {
    dispatch(getDataUser());
  }
  const [nameTag, setNameTag] = useState();
  const handleChangeTag = (nameTag) => {
    setNameTag(nameTag);
  };
  return (
    <LayoutComponent>
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
      <Row style={{ marginTop: "2rem" }}>
        <Col span={18} offset={3}>
          <Row>
            <Col
              span={18}
              style={{ backgroundColor: "aqua", minHeight: "400px" }}
            >
              <Tabs defaultActiveKey={!nameTag ? "1" : "3"}>
                {info !== null && (
                  <TabPane tab={<span>Your Feed</span>} key="2">
                    <YourFeed />
                  </TabPane>
                )}
                <TabPane tab={<span>Global Feed</span>} key="1">
                  <GlobalFeed />
                </TabPane>
                {nameTag && (
                  <TabPane tab={<span>#{nameTag}</span>} key="3">
                    <ArticleTag nameTag={nameTag} />
                  </TabPane>
                )}
              </Tabs>
            </Col>
            <Col span={6}>
              <PopularTags onClick={handleChangeTag} />
            </Col>
          </Row>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(HomePage);
