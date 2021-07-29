import React, { useState, useEffect } from "react";
import { Descriptions, Row, Col } from "antd";
import { getDataArticles } from "../actions/ActionGetArticles";
import PaginationComponent from "./pagination";
import * as reselect from "../articles-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

const GlobalFeed = () => {
  const dispatch = useDispatch();
  const { dataArticles } = useSelector(
    createStructuredSelector({
      dataArticles: reselect.dataArticleReselect,
    })
  );
  const [filter, setNewFilter] = useState({
    limit: 10,
    offset: 0,
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getDataArticles(filter, page));
  }, [dispatch, filter, page]);

  const handlePageChange = (newPage) => {
    const newOffset = (newPage - 1) * filter.limit;
    // console.log(newPage);
    setPage(newPage);
    setNewFilter({
      ...filter,
      offset: newOffset,
    });
  };
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
      <Row>
        <Col span={24}>
          <PaginationComponent
            page={page}
            filters={filter}
            onPageChange={handlePageChange}
          />
        </Col>
      </Row>
    </>
  );
};
export default React.memo(GlobalFeed);
