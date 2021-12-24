import React from 'react'
import styled from 'styled-components';
import Icon from '../icon';

const SortStyled = styled.span`
    display: inline-block;
    padding: 3px 5px;
    background: #353945;
    border-radius: 50%;
    .ui__icon__wrapper {
        width: 8px !important;
        height: 8px !important;
        &.up {
            transform: rotate(180deg);
        }
        .icon {
            width: 100% !important;
            height: 100% !important;
            background-color: #F4F5F6;
            &:hover {
                background-color: #777E91;
            }
        }
    }
`

export default function Sort({ upClick=() => {}, downClick=() => {}, onClick=() => {}}) {
    return (
        <SortStyled onClick={onClick}>
            <Icon icon="icon-bottom" size="xs" className="up" onClick={upClick} />
            <Icon icon="icon-bottom" size="xs" onClick={downClick} />
        </SortStyled>
    )
}
