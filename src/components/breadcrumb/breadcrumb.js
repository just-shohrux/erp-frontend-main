import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../elements/icon";

const StyledBreadcrumb = styled.div`
  padding: 10px 0;
  background-color: #fff;

  ul {
    display: flex;
  }
  .breadcrumb-item {
    list-style: none;
    background: #eeee;
    height: 26px;
    width: 96px;
    display: flex;
    align-items: center;
    position: relative;
    a {
      width: 100%;
      color: #333;
      text-decoration: none;
      font-weight: 500;
      font-size: 10px;
      line-height: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px 0 12px;
    }
  }

  .breadcrumb-active-item {
    list-style: none;
    height: 26px;
    width: 96px;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 15px 0;
    a {
      width: 100%;
      color: #333;
      text-decoration: none;
      font-weight: 500;
      font-size: 10px;
      line-height: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px 0 12px;
    }
  }
`;
const breadcrumb = [
  { index: 1, name: "Text" },
  { index: 2, name: "Text" },
  { index: 3, name: "Text" },
  { index: 4, name: "Text" },
  { index: 5, name: "Text" },
  { index: 6, name: "Text" },
];
const Breadcrumb = ({ children, ...rest }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleHandler = (index) => {
    setToggleState(index);
  };

  const breadcrumbItem = breadcrumb.map((item) => {
    return (
      <li
        onClick={() => toggleHandler(item.index)}
        className={
          toggleState === item.index
            ? "breadcrumb-active-item"
            : "breadcrumb-item"
        }
      >
        <a href="#">
          {item.name}
          <Icon icon="icon-exit" />
        </a>
      </li>
    );
  });

  return (
    <StyledBreadcrumb {...rest}>
      {children}
      <ul>{breadcrumbItem}</ul>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
{
  /* <li
          onClick={() => toggleHandler(1)}
          className={
            toggleState === 1 ? "breadcrumb-active-item" : "breadcrumb-item"
          }
        >
          <a href="#">
            Test <Icon icon="icon-exit" />
          </a>
        </li>
        <li
          onClick={() => toggleHandler(2)}
          className={
            toggleState === 2 ? "breadcrumb-active-item" : "breadcrumb-item"
          }
        >
          <a href="#">
            Test <Icon icon="icon-exit" />
          </a>
        </li>
        <li
          onClick={() => toggleHandler(3)}
          className={
            toggleState === 3 ? "breadcrumb-active-item" : "breadcrumb-item"
          }
        >
          <a href="#">
            Test <Icon icon="icon-exit" />
          </a>
        </li>
        <li
          onClick={() => toggleHandler(4)}
          className={
            toggleState === 4 ? "breadcrumb-active-item" : "breadcrumb-item"
          }
        >
          <a href="#">
            Test <Icon icon="icon-exit" />
          </a>
        </li>
        <li
          onClick={() => toggleHandler(5)}
          className={
            toggleState === 5 ? "breadcrumb-active-item" : "breadcrumb-item"
          }
        >
          <a href="#">
            Test <Icon icon="icon-exit" />
          </a>
        </li> */
}
