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
import { getDataArticles } from "./actions/ActionGetArticles";
import { getArticleWithTag } from "./actions/ActionGetArticle.Tag";

const HomePage = () => {
  const dispatch = useDispatch();
  // const { loading, filters, cPage } = useSelector(
  //   createStructuredSelector({
  //     filters: reselect.getFilterReselect,
  //     loading: reselect.loadingReselect,
  //     cPage: reselect.currentPageReselect,
  //   })
  // );
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    limit: 10,
    offset: 0,
  });
  // console.log("Page:", cPage);
  // console.log("filters:", filters);
  const info = localStorage.getItem("jwt");
  // console.log("info", info);
  if (info !== null) {
    dispatch(getDataUser());
  }
  useEffect(() => {
    dispatch(getDataPopularTags());
  }, [dispatch]);
  const [tag, setTag] = useState();
  const handleClick = (nameTag) => {
    dispatch(getArticleWithTag(nameTag));
    setTag(nameTag);
  };
  useEffect(() => {
    dispatch(getDataArticles(filter, page));
  }, [dispatch, filter, page]);

  // useEffect(() => {
  //   if (!helper.isEmptyObject(filters)) {
  //     dispatch(getDataArticles(filter, page));
  //     setPage(cPage);
  //     setFilter(filters);
  //   }
  // }, [dispatch, filters, page, filter, cPage]);

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
              <PaginationComponent />
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
