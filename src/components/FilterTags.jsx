import { Space } from "antd";
import CheckableTag from "antd/es/tag/CheckableTag";
import { useState } from "react";

const tagsData = ["Movies", "Books", "Music", "Sports"];

const FilterTags = () => {
  const [selectedTags, setSelectedTags] = useState(tagsData);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <Space size={[0, 8]} wrap>
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
