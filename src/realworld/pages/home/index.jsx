import React, { useEffect } from "react";
import LayoutComponent from "../../components/layoutComponent";
import { Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { getDataUser } from "./actions/index";
import { helper } from "../../helpers/common";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const info = localStorage.getItem("jwt");
    console.log("info", info);
    if (info !== null) {
      dispatch(getDataUser());
    }
  }, [dispatch]);

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
    </LayoutComponent>
  );
};
export default React.memo(HomePage);
