import { Collapse } from "antd";

const { Panel } = Collapse;

/** 공지 Collapse */
const Notice = (title, content, idx) => {
  return (
    <Collapse bordered={false} key={idx}>
      <Panel header={title}>{content}</Panel>
    </Collapse>
  );
};

export default Notice;
