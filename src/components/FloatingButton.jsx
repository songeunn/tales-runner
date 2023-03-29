import { CommentOutlined } from "@ant-design/icons";
import { FloatButton, Modal } from "antd";
import React, { useState } from "react";

const FloatingButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <FloatButton
        onClick={() => setModalOpen(true)}
        icon={<CommentOutlined />}
        style={{ right: 20, bottom: 20 }}
      />
      <Modal
        title="문의"
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      ></Modal>
    </>
  );
};

export default FloatingButton;
