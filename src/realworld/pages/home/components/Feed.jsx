import React, { useState, useEffect } from "react";
import { Descriptions, Tabs, Row, Col } from "antd";
import { getDataArticles } from "../actions/ActionGetArticles";
import ArticleTag from "./ArticleTag";
import * as reselect from "../articles-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

const { TabPane } = Tabs;
const TabFeedComponent = (props) => {
  const dispatch = useDispatch();
  const info = localStorage.getItem("jwt");
  const { tag } = props;
  // console.log("nameTag:", tag);
  const { loading, dataArticles } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingReselect,
      dataArticles: reselect.dataArticleReselect,
    })
  );

  return (
    <>
      <Row>
        <Col span={22} offset={1}>
          <Tabs defaultActiveKey={!tag ? "3" : "1"}>
            {info !== null && (
              <TabPane tab={<span>Your Feed</span>} key="2">
                Tab 2
              </TabPane>
            )}
            <TabPane tab={<span>Global Feed</span>} key="1">
              <Row>
                {dataArticles
                  ? dataArticles.map((item, index) => (
                      <Col
                        style={{ borderBottom: "1px solid black" }}
                        key={index}
                        span={24}
                      >
                        <Descriptions title={item.title}>
                          <Descriptions.Item label="UserName">
                            {item.author.username}
                          </Descriptions.Item>
                          <Descriptions.Item label="tagList">
                            {item.tagList.map((tg) => (
                              <span style={{ marginLeft: "10px" }}>{tg}</span>
                            ))}
                          </Descriptions.Item>
                        </Descriptions>
                      </Col>
                    ))
                  : null}
              </Row>
            </TabPane>
            {tag !== "" && (
              <TabPane key="3" tab={tag}>
                <ArticleTag />
              </TabPane>
            )}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default React.memo(TabFeedComponent);
