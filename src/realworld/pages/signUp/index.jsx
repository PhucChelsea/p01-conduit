import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import "../../Style/form.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { helper } from "../../helpers/common";

const SigUpPage = () => {
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState("");
  const onFinish = (values) => {
    axios
      .post(`https://conduit.productionready.io/api/users`, { user: values })
      .then((response) => {
        let token = response.data.user.token;
        // console.log("token:", token);
        if (token !== null) {
          helper.saveToken(token);
          history.push("/profile");
          setErrorLogin("");
        } else {
          setErrorLogin("account invalid");
        }
      });

    console.log("Received values of form: ", values);
  };
  return (
    <LayoutComponent>
      <Row>
        <Col span={10} offset={7}>
          <h2>Sign Up</h2>
          <Link to="/login">
            <p className="text">Have an account ?</p>
          </Link>
          <h3>{errorLogin}</h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                className="input_form"
                size="large"
                // prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                type="email"
                className="input_form"
                size="large"
                // prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                className="input_form"
                size="large"
                // prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="button"
                htmlType="submit"
                className="login-form-button login_button"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </LayoutComponent>
  );
};
export default React.memo(SigUpPage);
