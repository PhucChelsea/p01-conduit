import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import LayoutComponent from "../../components/layoutComponent";
import { Link } from "react-router-dom";
import "../../Style/form.css";
import axios from "axios";

const SigInPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const onFinish = (values) => {
    axios
      .post(`https://conduit.productionready.io/api/users/login`, {
        user: values,
      })
      .then((response) => {
        console.log(response.data);
        // setEmail("");
        // setPassword("");
      });
    console.log("Received values of form: ", values);
  };
  const validationPassWord = () => {};
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
            validateMessages={validationPassWord}
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
