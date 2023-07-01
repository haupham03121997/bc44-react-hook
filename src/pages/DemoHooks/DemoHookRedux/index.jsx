import React, { useRef } from "react";
import {
  Typography,
  Avatar,
  Input,
  Button,
  Space,
  Card,
  Row,
  Col,
  Divider,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../../../redux/slices/appChat";

const DemoHookRedux = () => {
  const dispatch = useDispatch();
  const { listMessage } = useSelector((state) => state.appChat);

  const usernameRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    console.log("usernameRef", usernameRef.current.input.value);
    console.log("messageRef", messageRef.current.input.value);
    const payload = {
      username: usernameRef.current.input.value,
      message: messageRef.current.input.value,
    };
    dispatch(addMessage(payload));
  };

  return (
    <div className="container">
      <Typography style={{ textAlign: "center", marginBottom: 40 }}>
        App Chat
      </Typography>
      <Space direction="vertical" size={30} style={{ width: "100%" }}>
        <Avatar src="https://i.pravatar.cc/300" size={50} />
        <Input placeholder="Username" size="large" ref={usernameRef} />
        <Input placeholder="Message" size="large" ref={messageRef} />
        <div style={{ textAlign: "end" }}>
          <Button size="large" type="primary" onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </Space>
      <Divider />
      <Typography style={{ marginBottom: 30 }}>List Message</Typography>
      <Row gutter={[32, 32]}>
        {listMessage.map((item, index) => {
          return (
            <Col span={24} xs={24} xxl={24} key={index}>
              <Card
                type="inner"
                title={
                  <div>
                    <Avatar src="https://i.pravatar.cc/300" />
                    <span>{item.username}</span>
                  </div>
                }
              >
                {item.message}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DemoHookRedux;
