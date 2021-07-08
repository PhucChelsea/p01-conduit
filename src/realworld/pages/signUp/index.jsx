import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import "../../Style/form.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SigUpPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onFinish = (values) => {
    axios
      .post(`https://conduit.productionready.io/api/users`, { user: values })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        setUserName("");
        setEmail("");
        setPassword("");
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
