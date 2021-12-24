import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../elements/icon";

const SearchStyle = styled.div`
  .search-form {
    margin-top: 6px;
    padding: 0 24px;
    background: #ffffff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    border-bottom:border: 1px solid #E6E8EC;
  }
  .search-form__control {
    display: flex;
    align-items: center;

  }
  .search-form__icon {
    padding: 0 13.5px;
  }
  .search-form__input{
    border-right: 1px solid #F4F5F6;
  }
  .search-form__input input {
    min-width:200px;
    font-size: 12px;
    line-height: 20px;
    border: none;
  }
  input:focus {
    outline: none;
  }
  .search-form__style {
    display: flex;
  }
  .search-form__style_icon{
      padding: 7px;
  }
  .search-form__style_icon-active{
    background: rgba(69, 179, 107, 0.1);
    border-radius: 7px;
    padding: 7px;
  } 
`;

const Search = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleHandler = (index) => {
    setToggleState(index);
  };
  return (
    <SearchStyle>
      <div className="search-form">
        <div className="search-form__control">
          <div className="search-form__icon">
            <Icon icon="icon-search" size="xmd" />
          </div>
          <div className="search-form__input">
            <input type="search" placeholder="Search" />
          </div>
        </div>
        <div className="search-form__style">
          <div
            className={
              toggleState === 1
                ? "search-form__style_icon-active"
                : "search-form__style_icon"
            }
            onClick={() => toggleHandler(1)}
          >
            {toggleState === 1 ? (
              <Icon icon="grid-style-icon" size="xmd" color="success" />
            ) : (
              <Icon icon="grid-style-icon" size="xmd" />
            )}
          </div>
          <div
            className={
              toggleState === 2
                ? "search-form__style_icon-active"
                : "search-form__style_icon"
            }
            onClick={() => toggleHandler(2)}
          >
            {toggleState === 2 ? (
              <Icon
                icon="horizontal-grid-style-icon"
                size="xmd"
                color="success"
              />
            ) : (
              <Icon icon="horizontal-grid-style-icon" size="xmd" />
            )}
          </div>
        </div>
      </div>
    </SearchStyle>
  );
};

export default Search;
