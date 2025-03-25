import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

// Form layout configuration
const FORM_LAYOUT = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// Handlers
const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegistrationForm = () => (
  <div className="min-h-screen bg-gray-500 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
      <Form
        name="registration"
        {...FORM_LAYOUT}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="bg-white shadow-lg rounded-lg p-10 sm:p-8 flex flex-col items-center gap-4"
      >
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register an account
        </h3>

        <div className="w-full max-w-sm">
          <Form.Item
            label={<span className="text-gray-700">Username</span>}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700">Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="flex justify-center"
          >
            <Checkbox className="text-gray-600">Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="w-full flex justify-center items-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
            >
              Register
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </Form>
    </div>
  </div>
);

export default RegistrationForm;
