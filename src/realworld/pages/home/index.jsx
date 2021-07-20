import React, { useEffect } from "react";
import LayoutComponent from "../../components/layoutComponent";
import PopularTags from "./components/popularTags";
import TabFeedComponent from "./components/Feed";
import { Row, Col } from "antd";
import { getDataPopularTags } from "./actions/ActionGetTag";
import { useDispatch } from "react-redux";
import { getDataUser } from "./actions/ActionGetUser";
import { helper } from "../../helpers/common";
import { getDataArticles } from "./actions/ActionGetArticles";

const HomePage = () => {
  const dispatch = useDispatch();
  const info = localStorage.getItem("jwt");
  // console.log("info", info);
  if (info !== null) {
    dispatch(getDataUser());
  }
  dispatch(getDataPopularTags());
  dispatch(getDataArticles());

  // useEffect(() => {
  //   const info = localStorage.getItem("jwt");
  //   console.log("info", info);
  //   if (info !== null) {
  //     dispatch(getDataUser());
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getDataPopularTags());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getDataArticles());
  // }, [dispatch]);

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
      <Row>
        <Col span={20} offset={2}>
          <Row>
            <Col
              span={18}
              style={{ backgroundColor: "aqua", minHeight: "400px" }}
            >
              <TabFeedComponent />
            </Col>
            <Col span={6}>
              <PopularTags />
            </Col>
          </Row>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(HomePage);
