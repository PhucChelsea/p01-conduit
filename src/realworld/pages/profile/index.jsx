import React from "react";
import { Button } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { useHistory } from "react-router-dom";
import { helper } from "../../helpers/common";

const ProfilePage = () => {
  const history = useHistory();

  const infoUser = helper.decodeTokenFromLocalStorage();
  // console.log("infoUser:", infoUser);

  const handleClick = () => {
    history.push("/setting");
  };
  return (
    <LayoutComponent>
      <h1>{infoUser["username"]}</h1>
      <Button type="primary" onClick={() => handleClick()}>
        setting profile
      </Button>
    </LayoutComponent>
  );
};
export default React.memo(ProfilePage);
