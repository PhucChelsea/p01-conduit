import React, { useState, useEffect } from "react";
import { Row, Col, Descriptions } from "antd";
import PaginationComponent from "./pagination";
import { getArticleWithTag } from "../actions/ActionGetArticle.Tag";
import { ArticleTagReselect } from "../article-tag-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

const ArticleTag = (props) => {
  const { nameTag } = props;
  const dispatch = useDispatch();
  const { articleWithTag } = useSelector(
    createStructuredSelector({
      articleWithTag: ArticleTagReselect,
    })
  );
  const [filter, setNewFilter] = useState({
    limit: 10,
    offset: 0,
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getArticleWithTag(nameTag, filter, page));
  }, [dispatch, nameTag, filter, page]);

  const handlePageChange = (newPage) => {
    const newOffset = (newPage - 1) * filter.limit;
    setPage(newPage);
    setNewFilter({
      ...filter,
      offset: newOffset,
    });
  };
  return (
    <>
      <Row>
        {articleWithTag
          ? articleWithTag.map((item, index) => (
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
export default React.memo(ArticleTag);
