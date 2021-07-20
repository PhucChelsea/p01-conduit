import React, { useState, useEffect } from "react";
import { Descriptions, Tabs, Row, Col } from "antd";
import Pagination from "./pagination";
import * as reselect from "../articles-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;
const TabFeedComponent = () => {
  const info = localStorage.getItem("jwt");
  const { loading, dataArticles, articlesCount } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingReselect,
      dataArticles: reselect.dataArticleReselect,
      articlesCount: reselect.articlesCountReselect,
    })
  );
  // console.log("data:", dataArticles);
  return (
    <>
      <Row>
        <Col span={22} offset={1}>
          <Tabs defaultActiveKey="1">
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
                          {/* <Descriptions.Item label="Telephone">
                            1810000000
                          </Descriptions.Item>
                          <Descriptions.Item label="Live">
                            Hangzhou, Zhejiang
                          </Descriptions.Item>
                          <Descriptions.Item label="Remark">
                            empty
                          </Descriptions.Item>
                          <Descriptions.Item label="Address">
                            No. 18, Wantang Road, Xihu District, Hangzhou,
                            Zhejiang, China
                          </Descriptions.Item> */}
                        </Descriptions>
                      </Col>
                    ))
                  : null}
                <Pagination />
              </Row>
            </TabPane>
            {info !== null && (
              <TabPane tab={<span>Your Feed</span>} key="2">
                Tab 2
              </TabPane>
            )}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};
export default React.memo(TabFeedComponent);
