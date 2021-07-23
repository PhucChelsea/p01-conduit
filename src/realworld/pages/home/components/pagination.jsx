import React, { useState, useEffect } from "react";
import { Pagination, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as reselect from "../articles-reselect";
import { createStructuredSelector } from "reselect";
import { getDataArticles } from "../actions/ActionGetArticles";
import PropTypes from "prop-types";

const PaginationComponent = (props) => {
  // const { onPageChange, filters } = props;
  const dispatch = useDispatch();
  const { cPage, articlesCount, filters } = useSelector(
    createStructuredSelector({
      filters: reselect.getFilterReselect,
      cPage: reselect.currentPageReselect,
      articlesCount: reselect.articlesCountReselect,
    })
  );
  const [page, setPage] = useState(cPage);
  const [filter, setFilter] = useState(filters);
  // console.log(articlesCount);
  // console.log(filter);
  // console.log(page);
  const { limit } = filter;
  // console.log("limit:", limit);
  const handlePageChange = (filter, newPage) => {
    dispatch(getDataArticles(filter, newPage));
    let offset = (newPage - 1) * limit;
    setPage(newPage);
    setFilter({
      ...filters,
      limit: limit,
      offset: offset,
    });
  };
  return (
    <Row style={{ marginBottom: "1px" }}>
      <Col span={20} offset={2}>
        <Pagination
          current={page}
          pageSize={limit}
          total={articlesCount}
          showSizeChanger={false}
          onChange={(p) => handlePageChange(filter, p)}
        />
      </Col>
    </Row>
  );
};
PaginationComponent.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
};
export default React.memo(PaginationComponent);
