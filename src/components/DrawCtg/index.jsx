import { Tag } from "antd";
import { COLORS } from "../../styles/config";

/** 분류별 태그 색상 표시 */
const DrawCtg = (ctg, idx) => {
  switch (ctg) {
    case "획득 불가":
      return (
        <Tag color={COLORS.ERROR} key={idx}>
          {ctg}
        </Tag>
      );
    case "유니크":
      return (
        <Tag color={COLORS.UNIQUE} key={idx}>
          {ctg}
        </Tag>
      );
    default:
      return (
        <Tag color="#c6cfdd26" key={idx}>
          {ctg}
        </Tag>
      );
  }
};

export default DrawCtg;
