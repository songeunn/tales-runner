import { Badge, Carousel, Space } from "antd";
import { StarFilled } from "@ant-design/icons";
import { switchColor } from "../../styles/config";

/** 업데이트 된 칭호 리스트 */
const UpdatedTitle = (updated) => {
  const { data } = updated;

  return (
    <Badge.Ribbon text="New" color="blue" style={{ fontWeight: 700 }}>
      <Carousel
        autoplay
        dots={false}
        dotPosition="right"
        className="newCarousel"
      >
        {data.map((newTitle, idx) => (
          <Space key={idx}>
            <h3
              key={idx}
              style={{
                color: switchColor(newTitle.color),
              }}
            >
              {newTitle.tags.includes("유니크") ? (
                <Space>
                  <StarFilled />
                  {newTitle.title}
                </Space>
              ) : (
                <Space>{newTitle.title}</Space>
              )}
            </h3>
          </Space>
        ))}
      </Carousel>
    </Badge.Ribbon>
  );
};

export default UpdatedTitle;
