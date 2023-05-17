import React, { useEffect, useState } from "react";
import { Col, Row, Space, Spin } from "antd";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import UpdatedTitle from "../../components/UpdatedTitle";
import TitleList from "../../components/TitleList";
import SearchBar from "../../components/SearchBar";
import { useDispatch } from "react-redux";
import { search } from "../../redux/titleSlice";
import FilterTags from "../../components/FilterTags";
import GoogleAd from "../../components/GoogleAd";
import Layout from "../../components/Layout";

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
    <Layout>
      <Row>
        <Col span={24}>
          {isLoading ? (
            <Space className="loading">
              <Spin size="large" />
            </Space>
          ) : (
            <Space direction="vertical" size="large">
              <UpdatedTitle data={updated} />
              <SearchBar data={sortedData} />
              <FilterTags data={sortedData} />
              <TitleList />
              {/* <GoogleAd /> */}
            </Space>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

export default Root;
