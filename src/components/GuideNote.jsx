import { Alert, Col, Collapse, Row, Space, Tag } from "antd";
import categories from "../data/category";
import { COLORS } from "../styles/config";
import DrawCtg from "./DrawTag";

const { Panel } = Collapse;

// 이용 가이드 및 공지
const GuideNote = () => {
  return (
    <Collapse>
      <Panel header="이용 가이드 🌱" key="1">
        <Row>
          <Space direction="vertical" size="small">
            <Col>
              <Alert
                message="🎉 테일즈 버스데이 칭호"
                description="증표 추가 획득이
              불가능한 경우 획득 불가로 표기하였습니다. 증표를 소지하고
              있는 경우에는 마이룸 내 우클릭 교환을 통해 획득 가능합니다."
                className="guideAlert"
              />
            </Col>
            <Col>
              {categories.map((ctg, idx) => (
                <Space direction="horizontal" key={idx}>
                  {DrawCtg(ctg.name, idx)}
                  <p>{ctg.desc}</p>
                </Space>
              ))}
            </Col>
          </Space>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default GuideNote;
