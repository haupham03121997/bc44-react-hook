import { Card, Col, Row, Skeleton, Avatar } from "antd";
import React from "react";

const { Meta } = Card;

const SkeltonListMovie = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col span={6}>
        <Card>
          <Skeleton loading={true} avatar active>
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Skeleton loading={true} avatar active>
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Skeleton loading={true} avatar active>
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Col>
      <Col span={6}>
        <Card>
          <Skeleton loading={true} avatar active>
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
              }
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Col>
    </Row>
  );
};

export default SkeltonListMovie;
