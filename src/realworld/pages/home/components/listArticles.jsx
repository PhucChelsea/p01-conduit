import React from "react";
import { Row, Col, Descriptions } from "antd";
import { createStructuredSelector } from "reselect";
import { listArticleReselect } from "../reselect/articleUser-reselect";
import { useSelector } from "react-redux";
const ListArticles = () => {
  const { dataArticles } = useSelector(
    createStructuredSelector({
      dataArticles: listArticleReselect,
    })
  );
  return (
    <>
      <Row>
        {dataArticles
          ? dataArticles.map((item, index) => (
              <Col
                style={{ borderBottom: "1px solid black" }}
                key={index}
                span={20}
                offset={2}
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
export default React.memo(ListArticles);
