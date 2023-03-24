import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Skeleton,
  AutoComplete,
  Input,
  Space,
  Button,
  Carousel,
  Badge,
  Tooltip,
  Switch,
  List,
  Collapse,
  Tag,
  Spin,
} from "antd";
import { StarFilled } from "@ant-design/icons";
import { COLORS, switchColor } from "../../styles/config";
import { database as db } from "../../firebase";
import { ref, query, onValue, equalTo } from "firebase/database";
import categories from "../../data/category";

const { Panel } = Collapse;

const MainPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(db, "/title");
      await onValue(dataRef, (snapshot) => {
        const firebaseData = snapshot.val();
        setData(firebaseData);
        setTimeout(() => setIsLoading(false), 500);
      });
    };
    fetchData();
  }, []);

  const optionSorted =
    data && data.sort((a, b) => a.title.localeCompare(b.title));

  const updated =
    data && data.filter((item) => item.tags && item.tags.includes("신규"));

  return (
    <Row>
      <Col span={24}>
        {isLoading ? (
          <Space className="loading">
            <Spin size="large" />
          </Space>
        ) : (
          <Space direction="vertical" size="large">
            <Space direction="vertical" size="large" align="center">
              {/* <Space>
            <AutoComplete
              style={{ width: "100%" }}
              size="large"
              options={optionSorted}
              placeholder="🎖️ 칭호 검색"
              filterOption={(inputValue, option) =>
                option.value
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            />
            <Button size="large" icon={<SearchOutlined />} />
          </Space> */}

              {/* 업데이트 된 칭호 */}
              <Badge.Ribbon text="New" color="blue" style={{ fontWeight: 700 }}>
                <Carousel
                  autoplay
                  dots={false}
                  dotPosition="right"
                  className="newCarousel"
                >
                  {updated.map((newTitle, idx) => (
                    <Space key={idx}>
                      <h3 style={{ color: switchColor(newTitle.color) }}>
                        {newTitle.tags.includes("유니크") ? (
                          <Space>
                            <StarFilled />
                            <Tooltip
                              placement="bottom"
                              title={newTitle.qualification}
                            >
                              {newTitle.title}
                            </Tooltip>
                          </Space>
                        ) : (
                          <Space>
                            <Tooltip
                              placement="bottom"
                              title={newTitle.qualification}
                            >
                              {newTitle.title}
                            </Tooltip>
                          </Space>
                        )}
                      </h3>
                    </Space>
                  ))}
                </Carousel>
              </Badge.Ribbon>
            </Space>

            {/* 이용 가이드 */}
            <Collapse>
              <Panel header="이용 가이드 🌱" key="1">
                <Space direction="vertical" size={0}>
                  {categories.map((ctg, idx) => (
                    <Space direction="horizontal" key={idx}>
                      {ctg.name === "획득 불가" ? (
                        <>
                          <Tag color="#fa5252" key={idx}>
                            {ctg.name}
                          </Tag>
                          <p>{ctg.desc}</p>
                        </>
                      ) : (
                        <>
                          <Tag color="default" key={idx}>
                            {ctg.name}
                          </Tag>
                          <p>{ctg.desc}</p>
                        </>
                      )}
                    </Space>
                  ))}
                </Space>
              </Panel>
            </Collapse>

            {/* 칭호 리스트 */}
            <List
              size="large"
              bordered
              dataSource={optionSorted}
              renderItem={(item, idx) => (
                <List.Item
                  style={{
                    color:
                      item.color === "effect"
                        ? "#fff"
                        : switchColor(item.color),
                  }}
                  key={idx}
                >
                  <Tooltip
                    placement="right"
                    title={
                      <Space direction="vertical">
                        <Space size={0}>
                          {item.tags &&
                            item.tags.map((tag, idx) => (
                              <Tag
                                key={idx}
                                color={
                                  tag === "획득 불가" ? "#fa5252" : "default"
                                }
                              >
                                {tag}
                              </Tag>
                            ))}
                        </Space>
                        {item.qualification}
                      </Space>
                    }
                    trigger="hover"
                  >
                    <Space direction="horizontal" size="middle">
                      {item.tags && item.tags.includes("유니크") ? (
                        <Space>
                          {item.title}
                          <StarFilled />
                        </Space>
                      ) : (
                        item.title
                      )}
                    </Space>
                  </Tooltip>
                </List.Item>
              )}
            />
          </Space>
        )}
      </Col>
    </Row>
  );
};

export default MainPage;
