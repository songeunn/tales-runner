import React, { useEffect, useState } from "react";
import { Col, Row, Space, Spin } from "antd";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import UpdatedTitle from "../../components/UpdatedTitle";
import GuideNote from "../../components/GuideNote";
import TitleList from "../../components/TitleList";
import FilterTags from "../../components/FilterTags";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const dataRef = ref(database, "/title");
    await onValue(dataRef, (snapshot) => {
      const firebaseData = snapshot.val();
      setData(firebaseData);
      setTimeout(() => setIsLoading(false), 500);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updated =
    data && data.filter((item) => item.tags && item.tags.includes("신규"));

  const optionSorted =
    data && data.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Row>
      <Col span={24}>
        {isLoading ? (
          <Space className="loading">
            <Spin size="large" />
          </Space>
        ) : (
          <Space direction="vertical" size="large">
            <UpdatedTitle data={updated} />
            <GuideNote />
            {/* <FilterTags /> */}
            <TitleList data={optionSorted} />
          </Space>
        )}
      </Col>
    </Row>
  );
};

export default MainPage;
