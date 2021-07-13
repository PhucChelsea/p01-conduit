import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../api/api-user";
import LayoutComponent from "../../components/layoutComponent";
import "../../Style/form.css";

const SigUpPage = () => {
  const [errorPassword, setErrorPassword] = useState("");
  const history = useHistory();
  const validationPass = (pass) => {
    // let upperCaseLetters = /[A-Z]/g;
    // let numbers = /[0-9]/g;
    if (pass.length >= 8) {
      setErrorPassword("");
    } else {
      setErrorPassword("minimum is 8 characters");
    }
    // if (pass.value.match(upperCaseLetters)) {
    //   setErrorPassword("");
    // } else {
    //   setErrorPassword("password must contain a capital uppercase letter");
    // }
    // if (pass.value.match(numbers)) {
    //   setErrorPassword("");
    // } else {
    //   setErrorPassword("password must contain a number");
    // }
  };
  const onFinish = (values) => {
    const passwords = values.password;
    validationPass(passwords);
    const postUser = async () => {
      const response = await api.postDataUser(values);
      // const result = response.status === 200 ? response.data : {};
      console.log("data:", response);
      if (response !== null) {
        history.push("/");
      }
    };
    postUser();
  };

  return (
    <LayoutComponent>
      <Row>
        <Col span={10} offset={7}>
          <h2>Sign Up</h2>
          <Link to="/login">
            <p className="text">Have an account ?</p>
          </Link>
          <h3 style={{ textAlign: "center", color: "red" }}>{errorPassword}</h3>
          {/* <h3 style={{ textAlign: "center", color: "red" }}>{errorPassword}</h3>
          <h3 style={{ textAlign: "center", color: "red" }}>{errorPassword}</h3> */}
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
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input
                type="password"
                className="input_form"
                placeholder="confirm password"
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
