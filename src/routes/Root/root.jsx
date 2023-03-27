import React, { useEffect, useState } from "react";
import { Col, Row, Space, Spin } from "antd";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import UpdatedTitle from "../../components/UpdatedTitle";
import GuideNote from "../../components/GuideNote";
import TitleList from "../../components/TitleList";
import SearchBar from "../../components/SearchBar";
import { useDispatch } from "react-redux";
import { search } from "../../redux/titleSlice";

const Root = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const titleRef = ref(database, "title");

    const fetchData = async () => {
      await onValue(titleRef, (snapshot) => {
        const firebaseData = snapshot.val();
        setData(firebaseData);
        setTimeout(() => setIsLoading(false), 500);
      });
    };
    fetchData();
  }, []);

  const updated =
    data && data.filter((item) => item.tags && item.tags.includes("신규"));

  const optionSorted =
    data && data.sort((a, b) => a.title.localeCompare(b.title));

  !isLoading && dispatch(search(optionSorted));

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
            <SearchBar data={optionSorted} />
            <TitleList data={optionSorted} />
          </Space>
        )}
      </Col>
    </Row>
  );
};

export default Root;
