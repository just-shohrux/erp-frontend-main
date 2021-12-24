import React from 'react'
import styled, { css } from 'styled-components'
import Icon from '../icon';

const CardStyled = styled.div`
    width: 232px;
    height: 120px;
    background: #353945;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: 0.2s;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    p {
        padding: 16px 0 0 18px;
    }
    .addButton {
        width: 80px;
        height: 80px;
        background: #45B36B;
        transition: 0.2s;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        padding: 10px 0 0;
        position: absolute;
        top: 65%;
        left: ${(232/2)-(80/2)}px;
        cursor: pointer;
        .ui__icon__wrapper {
            transform: rotate(135deg);
            .icon-x-close {
                background-color: #fff;
            }
        }
    }
    ${({active}) => active && css`
        background: #45B36B;
        .addButton {
            background: #353945;
            .ui__icon__wrapper {
                transform: rotate(0deg);
            }
        }
    `}
    ${({xs}) => xs && css`
        font-size: 12px;
    `}
    ${({sm}) => sm && css`
        font-size: 14px;
    `}
    ${({regular}) => regular && css`
        font-size: 16px;
    `}
    ${({md}) => md && css`
        font-size: 18px;
    `}
    ${({lg}) => lg && css`
        font-size: 24px;
    `}
    ${({xl}) => xl && css`
        font-size: 36px;
    `}
    ${({xxl}) => xxl && css`
        font-size: 48px;
    `}
`;

export default function CardOfSpecialization({ name, active = false, onClick = () => {}, ...props}) {
    return (
        <CardStyled {...{ active, ...props }}>
            <p>{name}</p>
            <Icon icon="icon-x-close" mainClassName="addButton" mainOnClick={onClick} />
        </CardStyled>
    )
}
