import { Button, Result } from "antd";
import React from "react";
import { useRouteError } from "react-router-dom";

/** 에러 처리 */
const ErrorBoundary = () => {
  const error = useRouteError();
  switch (error.status) {
    case 403:
      return (
        <Result
          status="403"
          title="403"
          subTitle={`죄송합니다. 요청하신 페이지에 대한 권한이 없습니다.`}
          extra={
            <Button type="primary">
              <a href="/">홈으로</a>
            </Button>
          }
        />
      );
    case 404:
      return (
        <Result
          status="404"
          title="404"
          subTitle={`죄송합니다. 페이지를 찾을 수 없습니다. \n 존재하지 않는 주소를 입력하셨거나, \n 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.`}
          extra={
            <Button type="primary">
              <a href="/">홈으로</a>
            </Button>
          }
        />
      );
    case 500:
      return (
        <Result
          status="500"
          title="500"
          subTitle={`죄송합니다. 일시적인 서버의 문제로 잠시 후 다시 시도해주세요.`}
          extra={
            <Button type="primary">
              <a href="/">홈으로</a>
            </Button>
          }
        />
      );
    default:
      return (
        <Result
          status="error"
          title="Not Found"
          subTitle={`죄송합니다. 페이지를 찾을 수 없습니다. \n 존재하지 않는 주소를 입력하셨거나, \n 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.`}
          extra={[
            <Button type="primary">
              <a href="/">홈으로</a>
            </Button>,
          ]}
        />
      );
  }
};

export default ErrorBoundary;
