import { List, Space, Tooltip } from "antd";
import { CaretUpFilled } from "@ant-design/icons";
import { switchColor } from "../styles/config";
import DrawCtg from "./DrawTag";
import { useSelector } from "react-redux";

// 칭호 리스트
const TitleList = () => {
  const searchedTitle = useSelector((state) => state.title);

  return (
    <List
      size="large"
      bordered
      dataSource={searchedTitle}
      renderItem={(item, idx) => (
        <List.Item key={idx} className="list-item">
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
            <Space
              direction="horizontal"
              size="middle"
              style={{
                color: switchColor(item.color),
              }}
            >
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
