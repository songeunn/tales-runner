import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Button, Space } from "antd";

const SearchBar = (optionSorted) => {
  return (
    <Space>
      <AutoComplete
        style={{ width: "100%" }}
        size="large"
        options={optionSorted}
        placeholder="🎖️ 칭호 검색"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <Button size="large" icon={<SearchOutlined />} />
    </Space>
  );
};

export default SearchBar;
