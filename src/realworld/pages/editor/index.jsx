import React, { lazy, Suspense } from "react";
import { Row, Col, Skeleton } from "antd";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import LayoutComponent from "../../components/layoutComponent";
import { useSelector } from "react-redux";
import { titleArticlePostReselect } from "./reselect/postArticleReselect";
import { createStructuredSelector } from "reselect";

const FormPublish = lazy(() => import("./component/FormPublish"));
const FormComment = lazy(() => import("./component/FormComment"));

const NewPostPage = () => {
  const match = useRouteMatch();
  const { title } = useSelector(
    createStructuredSelector({
      title: titleArticlePostReselect,
    })
  );
  console.log("titlesss:", title);
  return (
    <LayoutComponent>
      <Row>
        <Col span={18} offset={3}>
          <Suspense fallback={<Skeleton active />}>
            <Switch>
              <Route exact path={match.url}>
                <FormPublish />
              </Route>
              <Route path={`${match.url}/${title}`}>
                <FormComment />
              </Route>
            </Switch>
          </Suspense>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(NewPostPage);
