import React, { useState, useEffect } from "react";
import { Pagination, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as reselect from "../articles-reselect";
import {
  countArticleReselect,
  currentPageReselect,
} from "../reselect/articleUser-reselect";
import { createStructuredSelector } from "reselect";
import { getDataArticles } from "../actions/ActionGetArticles";
import PropTypes from "prop-types";

const PaginationComponent = (props) => {
  const { onPageChange } = props;
  // const { limit } = filters;
  // const dispatch = useDispatch();
  const { totalArticles, cPage } = useSelector(
    createStructuredSelector({
      totalArticles: countArticleReselect,
      cPage: currentPageReselect,
    })
  );
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };
  return (
    <Row style={{ marginBottom: "1px" }}>
      <Col span={20} offset={2}>
        <Pagination
          current={cPage}
          pageSize={10}
          total={totalArticles}
          showSizeChanger={false}
          onChange={(p) => handlePageChange(p)}
        />
      </Col>
    </Row>
  );
};
PaginationComponent.propTypes = {
  onPageChange: PropTypes.func,
};
export default React.memo(PaginationComponent);
