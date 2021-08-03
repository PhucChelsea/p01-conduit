import React, { useState, useEffect } from "react";
import { Descriptions, Row, Col } from "antd";
import { getDataArticles } from "../actions/ActionGetArticles";
import { getArticlesUser } from "../actions/actionGetArticleUser";
import PaginationComponent from "./pagination";
import ListArticles from "./listArticles";
import * as reselect from "../articles-reselect";
import { createStructuredSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";

const GlobalFeed = () => {
  const dispatch = useDispatch();
  const [filter, setNewFilter] = useState({
    limit: 10,
    offset: 0,
  });
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getArticlesUser(filter, page));
  }, [dispatch, filter, page]);

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
export default React.memo(GlobalFeed);
