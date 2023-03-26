import { Divider, List, Space, Tag, Tooltip } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import { switchColor } from "../styles/config";
import DrawCtg from "./DrawTag";

// 칭호 리스트
const TitleList = (options) => {
  const { data } = options;

  return (
    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={(item, idx) => (
        <List.Item
          style={{
            color: switchColor(item.color),
          }}
          key={idx}
        >
          <Tooltip
            placement="right"
            title={
              <Space direction="vertical">
                <Space size={0}>
                  {item.tags && item.tags.map((tag, idx) => DrawCtg(tag, idx))}
                </Space>
                {item.qualification}
              </Space>
            }
            trigger="hover"
          >
            <Space direction="horizontal" size="middle">
              {item.tags && item.tags.includes("신규") ? (
                <Space>
                  {item.title}
                  <CaretUpFilled style={{ color: "#f03e3e" }} />
                  {/* <StarFilled /> */}
                </Space>
              ) : (
                item.title
              )}
            </Space>
          </Tooltip>
        </List.Item>
      )}
    />
  );
};

export default TitleList;
