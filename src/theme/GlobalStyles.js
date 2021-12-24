import React from 'react';
import {createGlobalStyle} from "styled-components";
import 'react-tabs/style/react-tabs.css';
import '../assets/css/style.scss';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  body {
    font-weight: 400;
    font-size: 16px;
    color: #353945;
    background: #F7F7FA;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
  }

  .text {
    &-center {
      text-align: center !important;
    }

    &-right {
      text-align: right !important;
    }

    &-left {
      text-align: left !important;
    }
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .d-none {
    display: none;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  @media print {
    .no-print, .no-print * {
      display: none !important;
    }
  }

`;
