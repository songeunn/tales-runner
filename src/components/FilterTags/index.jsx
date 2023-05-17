// import { TagFilled } from "@ant-design/icons";
import { TagFilled } from "@ant-design/icons";
import { Space } from "antd";
import CheckableTag from "antd/es/tag/CheckableTag";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/titleSlice";

// const tagsData = [
//   "전체",
//   "신규 🔥",
//   "이벤트 ✨",
//   "플레이 🏃",
//   "낚시 🎣",
//   "팜 🌻",
//   "아이템 🎁",
//   "기타 🎮",
//   "획득 가능 ✅",
//   "획득 불가 ❌",
// ];

const tagsData = [
  "전체",
  "신규",
  "이벤트",
  "플레이",
  "아이템",
  "낚시",
  "팜",
  "기타",
  "유니크+",
  "획득 가능",
  "획득 불가",
];

/** 태그 필터링 */
const FilterTags = (sortedData) => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState("전체");

  const { data } = sortedData;

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter((t) => t !== tag);

    setSelectedTags(nextSelectedTags);

    const filteredData = data.filter((title) => {
      switch (tag) {
        case "전체":
          return data;
        case "신규":
          return title.tags && title.tags.includes("신규");
        case "이벤트":
          return (
            title.tags &&
            title.tags.includes("이벤트") &&
            !title.tags.includes("획득 불가")
          );
        case "플레이":
          return (
            title.tags &&
            !title.tags.includes("획득 불가") &&
            title.tags.includes("플레이")
          );
        case "아이템":
          return (
            title.tags &&
            title.tags.includes("아이템") &&
            !title.tags.includes("획득 불가")
          );
        case "낚시":
          return title.tags && title.tags.includes("낚시");
        case "팜":
          return title.tags && title.tags.includes("팜");
        case "기타":
          return !title.tags;
        case "유니크+":
          return title.tags && title.tags.includes("유니크");
        case "획득 가능":
          return (
            !title.tags || (title.tags && !title.tags.includes("획득 불가"))
          );
        case "획득 불가":
          return title.tags && title.tags.includes("획득 불가");

        default:
          return title.tags && title.tags.includes(tag);
      }
    });
    dispatch(search(filteredData));
  };

  return (
    <Space size={[0, 8]} wrap>
      <TagFilled style={{ color: "#eeeeee79", margin: "0 15px 0 5px" }} />
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Space>
  );
};

export default FilterTags;
