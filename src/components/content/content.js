import React from 'react';
import styled from "styled-components";

const StyledContent = styled.div`
  height: 150vh;
  width: 100%;
`;
const Content = ({...rest}) => {
    return (
        <StyledContent {...rest}/>
    );
};

export default Content;
