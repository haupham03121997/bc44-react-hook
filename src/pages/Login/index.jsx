import { Typography, Row, Col, Form, Input, Button, message } from "antd";
import React, { useState } from "react";
import axios from "axios";
import { PATTERN, TOKEN_CYBERSOFT } from "../../constants";
import { setLocalStorage } from "../../utils/localstorage";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const { taiKhoan, matKhau } = values;
      const formData = { taiKhoan, matKhau };
      const { data } = await axios.post(
        "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        formData,
        {
          headers: {
            TokenCybersoft: TOKEN_CYBERSOFT,
          },
        }
      );
      // do something

      if (data.statusCode === 200 && data.content.accessToken) {
        const currentUser = {
          hoTen: data.content.hoTen,
          email: data.content.email,
          maLoaiNguoiDung: data.content.maLoaiNguoiDung,
          taiKhoan: data.content.taiKhoan,
          soDT: data.content.soDT,
        };
        setLocalStorage("accessToken", data.content.accessToken);
        setLocalStorage("currentUser", currentUser);
        navigate("/list-movie");
      }
    } catch (error) {
      message.error("Đã có lỗi xãy ra! 🤧");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <Typography
        style={{
          textAlign: "center",
          fontWeight: 700,
          margin: "30px 0",
          fontSize: 32,
        }}
      >
        LoginPage
      </Typography>

      <Row justify={"center"}>
        <Col span={16}>
          <Form
            onFinish={handleSubmit}
            onFinishFailed={(errorInfo) => {
              message.error("Lỗi rồi má ơi!!");
            }}
            validateTrigger={["onBlur", "onSubmit", "onChange"]}
          >
            <Form.Item
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập thông tin tài khoản!",
                },
              ]}
            >
              <Input name="taiKhoan" placeholder="Tài khoản" size="large" />
            </Form.Item>
            <Form.Item
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập thông tin mật khẩu!",
                },
                // {
                //   pattern: PATTERN.PASSWORD,
                //   message:
                //     "Mật khẩu ít nhất 8 ký tự và bao gôm 1 ký tự viết hoa ",
                // },
              ]}
            >
              <Input.Password
                type="password"
                name="matKhau"
                placeholder="Mật khẩu"
                size="large"
              />
            </Form.Item>
            <div style={{ textAlign: "end" }}>
              <Button
                loading={isLoading}
                htmlType="submit"
                type="primary"
                size="large"
              >
                Đăng nhập
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
