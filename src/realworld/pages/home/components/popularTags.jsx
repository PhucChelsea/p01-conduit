import React from "react";
import { Divider, Tag, Skeleton, Row, Col } from "antd";
import { useSelector } from "react-redux";
import * as reselect from "../tags-reselect";
import { createStructuredSelector } from "reselect";

const PopularTag = () => {
  const { loading, dataTags } = useSelector(
    createStructuredSelector({
      loading: reselect.loadingReselect,
      dataTags: reselect.tagsReselect,
    })
  );
  // console.log("dataTags:", dataTags);
  // const loading = useSelector((state) => state.popularTagReducer.loading);
  // const dataTags = useSelector((state) => state.popularTagReducer.dataTags);
  // console.log("data:", dataTags);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDataPopularTags());
  // }, [dispatch]);
  if (loading) {
    return <Skeleton active />;
  }

  return (
    <Row>
      <Col span={22} offset={1}>
        <Divider orientation="left">PopularTag</Divider>
        {dataTags
          ? dataTags.map((item) => (
              <span>
                <Tag>{item}</Tag>
              </span>
            ))
          : null}
      </Col>
    </Row>
  );
};
export default React.memo(PopularTag);
