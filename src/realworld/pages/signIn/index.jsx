import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { Link, useHistory } from "react-router-dom";
import "../../Style/form.css";
import { api } from "../../api/api-user";

const SigInPage = () => {
  const history = useHistory();

  const [errorLogin, setErrorLogin] = useState("");
  const onFinish = (values) => {
    const postUser = async () => {
      const response = await api.postUserLogin(values);
      if (response !== null) {
        history.push("/");
      }
    };
    postUser();
    // api.postUserLogin(values);

    // console.log("Received values of form: ", values);
  };

  return (
    <LayoutComponent>
      <Row>
        <Col span={10} offset={7}>
          <h2>Sign In</h2>
          <Link to="/register">
            <p className="text">Need an account ?</p>
          </Link>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
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
                className="login_button btn"
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
export default React.memo(SigInPage);
