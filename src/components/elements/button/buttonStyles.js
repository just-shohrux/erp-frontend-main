import styled, { css } from 'styled-components'

export const ButtonStyeld = styled.button`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    background: #45B36B;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    padding: 6px 14px;
    &:hover {
        background: #31A659;
    }
    .img-space-right {
        margin-right: 7px;
    }
    ${({edit, plus}) => (edit || plus) && css`
        display: flex;
        align-items: center;
    `}
    ${({plus, success}) => (plus || success) && css`
        background-color: rgba(69,179,107,0.07);
        color: #45B36B;
        text-transform: uppercase;
        &:hover {
            background: rgba(69,179,107,0.1);
        }
    `}
    ${({outlineDanger}) => outlineDanger && css`
        background: rgba(239,70,111,0.1);
        color: #EF466F;
        &:hover {
            background: rgba(239,70,111,0.2);
        }
    `}
    ${({danger}) => danger && css`
        background: rgba(239,70,111,1);
        color: #FCFCFD;
        &:hover {
            background: rgba(239,70,111,0.9);
        }
    `}
    ${({disabled}) => disabled && css`
        background: #F4F5F6;
        color: #B1B5C4;
        cursor: default;
        &:hover {
            background: #F4F5F6;
        }
    `}
    ${({theme:{mode}, outlineDanger}) => mode == 'dark' && outlineDanger && css`
        background: rgba(239,70,111,0.2);
        &:hover {
            background: rgba(239,70,111,0.3);
        }
    `}
    ${({bg}) => bg && css`
        background: ${bg};
    `}
    ${({hover}) => hover && css`
        :hover {
            background: ${hover};
        }
    `}
    ${({color}) => color && css`
        color: ${color};
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
    ${({light}) => light && css`
        color: #fff;
    `}
    ${({thin}) => thin && css`
        font-weight: 100;
    `}
    ${({medium}) => medium && css`
        font-weight: 500;
    `}
    ${({semiBold}) => semiBold && css`
        font-weight: 600;
    `}
    ${({bold}) => bold && css`
        font-weight: 700;
    `}
    ${({extraBold}) => extraBold && css`
        font-weight: 900;
    `}
`;