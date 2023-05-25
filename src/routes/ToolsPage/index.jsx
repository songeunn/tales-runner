import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import CounterProgress from "../../components/CounterProgress";
import { Button, Input, Space, Tooltip } from "antd";
import styled from "styled-components";
import {
  DeleteOutlined,
  DownloadOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { COLORS } from "../../styles/config";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { saveCount } from "../../redux/countSlice";

export const COUNT_LIST = "COUNT_LIST";

const ToolsPage = () => {
  const [inEditing, setInEditing] = useState(false);
  const [inputs, setInputs] = useState({
    content: "",
    count: "",
  });
  const contentRef = useRef(null);
  const countRef = useRef(null);
  const dispatch = useDispatch();
  const countArr = useSelector((state) => state.count);

  const onChangeInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const onSubmit = () => {
    if (!contentRef.current.input.value || !countRef.current.input.value)
      return;
    dispatch(
      saveCount([
        {
          content: contentRef.current.input.value,
          count: countRef.current.input.value,
          id: uuid(),
          done: 0,
          percent: 0,
        },
        ...countArr,
      ])
    );
    setInputs({
      content: "",
      count: "",
    });
    contentRef.current.input.focus();
  };

  const onDelete = (id) => {
    dispatch(saveCount(countArr.filter((content) => content.id !== id)));
  };

  const saveData = useCallback(() => {
    localStorage.setItem(COUNT_LIST, JSON.stringify(countArr));
  }, [countArr]);

  const getData = () => {
    let storageData = JSON.parse(localStorage.getItem(COUNT_LIST));
    if (!storageData) {
      alert("저장되어 있는 데이터가 없어요🥲");
      return;
    }
    dispatch(saveCount(storageData));
  };

  useEffect(() => {
    const autoSave = setInterval(() => {
      saveData();
    }, 60000);
    contentRef.current.input.focus();
    return () => clearInterval(autoSave);
  }, [saveData]);

  return (
    <Layout>
      <Description>
        <h2>진행률 카운트</h2>
        <Button
          ghost
          size="small"
          className="edit-button"
          onClick={() => setInEditing((inEditing) => !inEditing)}
        >
          {inEditing ? "완료" : "편집"}
        </Button>
        <Tooltip placement="top" title="저장" onClick={saveData}>
          <SaveOutlined />
        </Tooltip>
        <Tooltip placement="top" title="불러오기" onClick={getData}>
          <DownloadOutlined />
        </Tooltip>
      </Description>

      <form onSubmit={onSubmit}>
        <Space
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 20,
          }}
        >
          <Input
            placeholder="혼자 달리기 100회"
            className="counter-input"
            allowClear
            ref={contentRef}
            name="content"
            value={inputs.content}
            onChange={(e) => onChangeInput(e)}
          />
          <Input
            type="number"
            placeholder="100"
            className="counter-input"
            ref={countRef}
            name="count"
            value={inputs.count}
            onChange={(e) => onChangeInput(e)}
          />
          <Button
            type="submit"
            shape="circle"
            icon={<PlusOutlined />}
            className="counter-button"
            onClick={() => onSubmit()}
          />
        </Space>
      </form>

      <CardWrap>
        {countArr.map((array) => (
          <ContentWrap inEditing={inEditing} key={array.id}>
            <CounterProgress
              content={array.content}
              number={Number(array.count)}
              id={array.id}
            />
            {inEditing && (
              <DeleteOutlined
                className="tools-page-del-icon"
                onClick={() => onDelete(array.id)}
              />
            )}
          </ContentWrap>
        ))}
      </CardWrap>
    </Layout>
  );
};

const Description = styled.header`
  color: ${COLORS.TEXT};
  display: flex;
  align-items: center;
  gap: 15px;
  button.edit-button {
    color: ${COLORS.TEXT};
    border-color: ${COLORS.TEXT};
  }
`;

const CardWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentWrap = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: ${(props) => (props.inEditing ? `9fr 1fr` : `1fr`)};
  span.tools-page-del-icon {
    display: block;
    font-size: 15px;
    color: var(--text-color);
    cursor: pointer;
    align-self: center;
  }
`;

export default ToolsPage;
