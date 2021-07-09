import React from "react";
import { Button } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { useHistory } from "react-router-dom";
import { helper } from "../../helpers/common";
const SettingPage = () => {
  const history = useHistory();
  const LogOutUser = () => {
    helper.removeToken();
    history.push("/");
  };
  return (
    <LayoutComponent>
      <h1>this is SettingPage </h1>
      <Button
        type="danger"
        onClick={() => {
          LogOutUser();
        }}
      >
        LogOut
      </Button>
    </LayoutComponent>
  );
};
export default React.memo(SettingPage);
