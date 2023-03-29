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
import FilterTags from "../../components/FilterTags";
import GoogleAd from "../../components/GoogleAd";

const Root = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const titleRef = ref(database, "title");
    const fetchData = () => {
      onValue(titleRef, (snapshot) => {
        const firebaseData = snapshot.val();
        setData(firebaseData);
        setTimeout(() => setIsLoading(false), 300);
      });
    };
    fetchData();
  }, []);

  let updated;
  let sortedData;

  if (data) {
    updated = data.filter((item) => item.tags && item.tags.includes("신규"));
    sortedData = data.slice().sort((a, b) => a.title.localeCompare(b.title));
    !isLoading && dispatch(search(sortedData));
  }

  return (
    <Row>
      <Col span={24}>
        {isLoading ? (
          <Space className="loading">
            <Spin size="large" />
          </Space>
        ) : (
          <Space direction="vertical" size="large">
            {/* <GoogleAd /> */}
            <UpdatedTitle data={updated} />
            <GuideNote />
            <SearchBar data={sortedData} />
            <FilterTags data={sortedData} />
            <TitleList />
            <GoogleAd />
          </Space>
        )}
      </Col>
      {/* <FloatingButton /> */}
    </Row>
  );
};

export default Root;
