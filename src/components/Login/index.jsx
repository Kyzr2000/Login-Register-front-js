import React from "react";

import { Typography, Input, Button, Form } from "antd";
const { Title } = Typography;
export default function Login(props) {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  function inputUserame(e) {
    setUser({ ...user, username: e.target.value });
  }
  function inputPassword(e) {
    setUser({ ...user, password: e.target.value });
  }
  function login() {
    let istrue = false;
    props.list.map((u) => {
      const { email, password } = u;
      if (email === user.username && password === user.password) {
        istrue = true;
      }
    });
    if (istrue) {
      alert("登录成功！");
    } else {
      alert("登录失败！");
    }
  }

  return (
    <div>
      <Title className="kyzr_title" level={2}>
        登录界面
      </Title>

      <Form
        name="basic"
        className="kyzr_loginForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input onChange={inputUserame} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={inputPassword} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={login}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
