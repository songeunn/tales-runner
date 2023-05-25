import { Button, Card, Progress, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/config";
import { MinusOutlined, PlusOutlined, UndoOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  downCount,
  downPercent,
  resetCount,
  upCount,
  upPercent,
} from "../../redux/countSlice";

const CounterProgress = ({ content, number, id }) => {
  const dispatch = useDispatch();
  const countArr = useSelector((state) => state.count);
  const data = countArr.filter((item) => item.id === id)[0];

  let completeCount = number;

  const increase = () => {
    dispatch(upCount({ id, completeCount }));
    dispatch(upPercent({ id, completeCount }));
  };
  const decline = () => {
    dispatch(downCount(id));
    dispatch(downPercent({ id, completeCount }));
  };
  const reset = () => {
    dispatch(resetCount(id));
  };

  return (
    <Card size="small" className="calculate-card">
      <Space size="large">
        <span>{content}</span>
        <Progress
          size={[100, 10]}
          percent={data.percent}
          format={(_) => (
            <ProgressText>
              {data.done} / {completeCount}
            </ProgressText>
          )}
          trailColor={COLORS.TEXT}
        />
        <Button.Group>
          <Button
            onClick={reset}
            icon={<UndoOutlined />}
            className="counter-button"
            size="small"
          />
          <Button
            onClick={decline}
            icon={<MinusOutlined />}
            className="counter-button"
            size="small"
          />
          <Button
            onClick={increase}
            icon={<PlusOutlined />}
            className="counter-button"
            size="small"
          />
        </Button.Group>
      </Space>
    </Card>
  );
};

const ProgressText = styled.span`
  color: ${COLORS.TEXT};
`;

export default CounterProgress;
