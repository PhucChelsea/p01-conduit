import React, { useState, useEffect } from "react";
import { Divider, Tag, Skeleton, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import * as reselect from "../tags-reselect";
import { createStructuredSelector } from "reselect";
import { getDataPopularTags } from "../actions/ActionGetTag";

const { CheckableTag } = Tag;
const PopularTag = (props) => {
  const { onClick } = props;
  // const dispatch = useDispatch();
  // dispatch(getDataPopularTags());
  const { loading, dataTags } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingReselect,
      dataTags: reselect.tagsReselect,
    })
  );
  // console.log(dataTags);
  if (loading) {
    return (
      <Row>
        <Col span={24}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  const changeTag = (item) => {
    onClick(item);
  };
  return (
    <Row>
      <Col span={22} offset={1}>
        <Divider orientation="left">PopularTag</Divider>
        {dataTags
          ? dataTags.map((item, index) => (
              <span key={index}>
                <Tag>
                  <CheckableTag onChange={() => changeTag(item)}>
                    {item}
                  </CheckableTag>
                </Tag>
              </span>
            ))
          : null}
      </Col>
    </Row>
  );
};
export default React.memo(PopularTag);
