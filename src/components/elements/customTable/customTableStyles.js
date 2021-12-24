import styled, { css } from 'styled-components';

export const DefaultCustomTableStyled = styled.div`
    width: max-content;
    .thead, .tr {
        display: flex;
        width: 100%;
    }
    .tbody {
        display: inline-block;
        width: 100%;
    }
    ${({maxWidth}) => maxWidth && css`
        ${() => {
            let tmp = ``
            maxWidth.dataWidth && Object.keys(maxWidth.dataWidth).forEach(val => {
                let widthPer = 0;
                // if (maxWidth.headAndBody >= 500) widthPer = (maxWidth.headAndBody/(Object.keys(maxWidth.dataWidth).length));
                // else widthPer = (100*maxWidth.dataWidth[val])/maxWidth.headAndBody;
                widthPer = (100*maxWidth.dataWidth[val])/maxWidth.headAndBody;
                tmp += `.td[data-index=${val}] {
                width: ${widthPer}%;
            }`})
            return tmp;
        }}
        /* ${() => maxWidth.headAndBody && css`
                .thead, .tbody {
                    width: ${maxWidth.headAndBody}px;
                }
            `
        } */
    `}
    ${({center}) => center && css`
        .td {
            text-align: center;
        }
    `}
    ${({border}) => border && css`
        .thead {
            .td {
                border-top: 1px solid black;
            }
        }
        .td {
            &:first-child {
                border-left: 1px solid black;
            }
            border-right: 1px solid black;
            border-bottom: 1px solid black;
        }
    `}    
`;
export const CustomTableStyled = styled.div`
    .table {
        width: 1000px;
        .td {
            width: 100%;
            span {
                margin-right: 10px;
            }
        }
        .thead {
            .tr {
                background: #23262F;
                border-radius: 4px;
                .td {
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 15px;
                    color: #F4F5F6;
                    padding: 12px 0px 13px 0px;
                    &:first-child {
                        padding-left: 16px;
                    }
                    &:last-child {
                        padding-right: 12px;
                        /* width: 30%; */
                        display: flex;
                        justify-content: flex-end;
                    }
                    span {
                        margin-left: 5px;
                    }
                }
            }
        }
        .tbody {
            margin: 10px 0 0;
            .tr {
                background: #FCFCFD;
                border-radius: 4px;
                margin: 0 0 7px;
                /* padding: 10px 10px 9px 19px; */
                /* box-sizing: border-box; */
                .td {
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 15px;
                    color: #353945;
                    padding: 10px 0px 9px 0px;
                    box-sizing: border-box;
                    &:first-child {
                        padding-left: 19px;
                    }
                    &:last-child {
                        /* width: 30%; */
                        padding-right: 10px;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .action {
                        display: flex;
                        span {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 22px;
                            height: 22px;
                            margin: 0;
                            background: rgba(244,245,246,1);
                            border-radius: 5px;
                            cursor: pointer;
                            transition: 0.2s;
                            &:hover {
                                background: rgba(234,235,236,0.9);
                            }
                            &:first-child {
                                margin-right: 4px;
                            }
                        }
                    }
                }
            }
        }
    }
`