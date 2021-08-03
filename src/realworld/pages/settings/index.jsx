import React from "react";
import { Row, Col, Button, Input } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { useHistory } from "react-router-dom";
import { helper } from "../../helpers/common";

const { TextArea } = Input;
const SettingPage = () => {
  const history = useHistory();
  const LogOutUser = () => {
    helper.removeToken();
    history.push("/");
  };
  return (
    <LayoutComponent>
      <Row>
        <Col span={18} offset={3}>
          <h1>Your Settings</h1>
          <Input placeholder="URL of profile picture" />
          <Input value="userName" />
          <TextArea placeholder="Short bio about you" rows={6} />
          <Input value="email" />
          <Input placeholder="New Password" />

          <Button type="primary" >
            Update Settings
          </Button>
          <hr />
          <Button
            type="danger"
            onClick={() => {
              LogOutUser();
            }}
          >
            LogOut
          </Button>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(SettingPage);
