import React, { useEffect } from "react";
import { Button } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { useHistory } from "react-router-dom";
import { helper } from "../../helpers/common";
import { useDispatch, useSelector } from "react-redux";
import { getProfileUser } from "./actions";
const ProfilePage = () => {
  const history = useHistory();
  const infoUser = helper.decodeTokenFromLocalStorage();
  const userName = infoUser.username;

  const users = useSelector((state) => state.profileUserReducer.dataUser);

  console.log("users:", users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileUser(userName));
    // console.log(userName);
  }, [dispatch, userName]);

  const handleClick = () => {
    history.push("/setting");
  };
  return (
    <LayoutComponent>
      <h1>{userName}</h1>
      <Button type="primary" onClick={() => handleClick()}>
        setting profile
      </Button>
    </LayoutComponent>
  );
};
export default React.memo(ProfilePage);
