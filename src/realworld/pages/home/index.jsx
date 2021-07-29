import React, { useEffect, useState } from "react";
import LayoutComponent from "../../components/layoutComponent";
import PopularTags from "./components/popularTags";
import TabFeedComponent from "./components/Feed";
import PaginationComponent from "./components/pagination";
import { Row, Col } from "antd";
import { getDataPopularTags } from "./actions/ActionGetTag";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "./actions/ActionGetUser";
import * as reselect from "./articles-reselect";
import { createStructuredSelector } from "reselect";
import { helper } from "../../helpers/common";
import { useHistory } from "react-router-dom";
import { getDataArticles } from "./actions/ActionGetArticles";
import { getArticleWithTag } from "./actions/ActionGetArticle.Tag";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const info = localStorage.getItem("jwt");
  // console.log("info", info);
  if (info !== null) {
    dispatch(getDataUser());
  }

  const [filter, setNewFilter] = useState({
    limit: 10,
    offset: 0,
  });
  const [page, setPage] = useState(1);
  const { limit } = filter;
  useEffect(() => {
    dispatch(getDataArticles(filter, page));
    // console.log("filters:", filter);
  }, [dispatch, filter, page]);

  const handlePageChange = (newPage) => {
    const newOffset = (newPage - 1) * limit;
    console.log(newPage);
    setPage(newPage);
    setNewFilter({
      ...filter,
      offset: newOffset,
    });
    // console.log("newFilters:", filter);
  };
  useEffect(() => {
    dispatch(getDataPopularTags());
  }, [dispatch]);
  const [tag, setTag] = useState();
  const handleClick = (nameTag) => {
    dispatch(getArticleWithTag(nameTag, filter));
    setTag(nameTag);
    // console.log(filter);
    // console.log("hello 1");
  };

  return (
    <LayoutComponent>
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "#5cb85c",
            height: "170px",
            textAlign: "center",
          }}
        >
          <h1>conduit</h1>
          <span>A place to share your knowledge.</span>
        </Col>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <Col span={18} offset={3}>
          <Row>
            <Col
              span={18}
              style={{ backgroundColor: "aqua", minHeight: "400px" }}
            >
              <TabFeedComponent tag={tag} />
              <PaginationComponent
                page={page}
                filter={filter}
                onPageChange={handlePageChange}
              />
            </Col>
            <Col span={6}>
              <PopularTags onClick={handleClick} />
            </Col>
          </Row>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(HomePage);
