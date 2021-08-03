import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import PaginationComponent from "./pagination";
import ListArticles from "./listArticles";
import { getArticlesUser } from "../actions/actionGetArticleUser";
import { getArticleWithTag } from "../actions/ActionGetArticle.Tag";
import { ArticleTagReselect } from "../article-tag-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

const ArticleTag = (props) => {
  const { nameTag } = props;
  const dispatch = useDispatch();
  const [filter, setNewFilter] = useState({
    limit: 10,
    offset: 0,
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getArticlesUser(filter, page, nameTag));
  }, [dispatch, filter, page, nameTag]);

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
        <Col span={24}>
          <ListArticles />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <PaginationComponent onPageChange={handlePageChange} />
        </Col>
      </Row>
    </>
  );
};
export default React.memo(ArticleTag);
