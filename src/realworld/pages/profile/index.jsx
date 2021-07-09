import React from "react";
import { Button } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/setting");
  };
  return (
    <LayoutComponent>
      <h1>this is ProfilePage </h1>
      <Button type="primary" onClick={() => handleClick()}>
        setting profile
      </Button>
    </LayoutComponent>
  );
};
export default React.memo(ProfilePage);
