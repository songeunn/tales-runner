import { Tag } from "antd";
import { COLORS } from "../styles/config";

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
        <Tag color="default" key={idx}>
          {ctg}
        </Tag>
      );
  }
};

export default DrawCtg;
