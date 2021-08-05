import React from "react";
import { Row, Col } from "antd";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import LayoutComponent from "../../components/layoutComponent";
import FormPublish from "./component/FormPublish";
import FormComment from "./component/FormComment";
import { useSelector } from "react-redux";
import { titleArticlePost } from "./reselect/postArticleReselect";
import { createStructuredSelector } from "reselect";

const NewPostPage = () => {
  const match = useRouteMatch();
  const { title } = useSelector(
    createStructuredSelector({
      title: titleArticlePost,
    })
  );
  // console.log("titlesss:", title);
  return (
    <LayoutComponent>
      <Row>
        <Col span={18} offset={3}>
          <Switch>
            <Route exact path={match.url}>
              <FormPublish />
            </Route>
            {title && (
              <Route path={`${match.url}/${title}`}>
                <FormComment />
              </Route>
            )}
          </Switch>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(NewPostPage);
