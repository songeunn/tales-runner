import React from "react";
import styled from "styled-components";
import { COLORS } from "../../styles/config";
import { NotificationOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <NavBar>
      <Link to="/">
        <NavLink>
          <SearchOutlined style={{ fontSize: "20px" }} />
          <span>칭호</span>
        </NavLink>
      </Link>

      <Link to="/notice">
        <NavLink>
          <NotificationOutlined style={{ fontSize: "20px" }} />
          <span>공지</span>
        </NavLink>
      </Link>
    </NavBar>
  );
};

const NavBar = styled.nav`
  position: absolute;
  bottom: 0;
  background-color: ${COLORS.BG};
  max-width: 420px;
  width: 100%;
  height: 60px;
  border-left: 1px solid ${COLORS.BORDER};
  border-right: 1px solid ${COLORS.BORDER};
  border-bottom: 1px solid ${COLORS.BORDER};
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: ${COLORS.BORDER};
  font-size: 12px;
  padding: 10px 70px;
  color: ${COLORS.TEXT};
`;
export default NavigationBar;
