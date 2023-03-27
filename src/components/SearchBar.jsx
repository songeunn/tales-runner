import { AutoComplete, Col } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/titleSlice";

const SearchBar = (optionSorted) => {
  const { data } = optionSorted;
  const [results, setResults] = useState(data);

  const dispatch = useDispatch();

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(search(results));
    }
  };

  const getPanelValue = (searchText) =>
    !searchText
      ? dispatch(search(data))
      : data.filter((option) => {
          const regex = new RegExp(searchText, "gi");
          return option.title.match(regex);
        });

  return (
    <Col span={24}>
      <AutoComplete
        className="search-bar"
        size="large"
        onKeyDown={(e) => onKeyPress(e)}
        onSearch={(text) => setResults(getPanelValue(text))}
        placeholder="🔍 칭호를 검색해보세요"
        allowClear
      />
    </Col>
  );
};

export default SearchBar;
