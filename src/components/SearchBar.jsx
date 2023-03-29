import { AutoComplete, Col } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/titleSlice";

const SearchBar = (sortedData) => {
  const dispatch = useDispatch();

  const { data } = sortedData;
  const [value, setValue] = useState("");
  const [results, setResults] = useState(data);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      return !value ? false : dispatch(search(results));
    }
  };

  // const getPanelValue = (searchText) =>
  //   !searchText
  //     ? dispatch(search(data))
  //     : data.filter((option) => {
  //         const regex = new RegExp(searchText, "gi");
  //         return option.title.match(regex);
  //       });

  const getPanelValue = (searchText) => {
    setValue(searchText);
    if (!searchText) {
      dispatch(search(data));
      return [];
    } else {
      return data.filter((option) => {
        const regex = new RegExp(searchText, "gi");
        return option.title.match(regex);
      });
    }
  };

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
