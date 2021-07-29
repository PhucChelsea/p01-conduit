import React from "react";
import { Row, Col, Descriptions } from "antd";
import { ArticleTagReselect } from "../article-tag-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

const ArticleTag = () => {
  const { articleWithTag } = useSelector(
    createStructuredSelector({
      articleWithTag: ArticleTagReselect,
    })
  );
  console.log("articleWithTag:", articleWithTag);
  return (
    <>
      <Row>
        {articleWithTag
          ? articleWithTag.map((item, index) => (
              <Col
                style={{ borderBottom: "1px solid black" }}
                key={index}
                span={24}
              >
                <Descriptions title={item.title}>
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
    </>
  );
};
export default React.memo(ArticleTag);
