import styled, { css } from 'styled-components';
export const DropzoneStyled = styled.div`
    width: 100%;
    .main {
        background: rgba(69, 179, 107, 0.1);
        border: 1px dashed #45B36B;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 40px 0;
        transition: 0.1s;
        &__upload {
            display: flex;
            align-items: center;
            flex-direction: column;
            font-weight: normal;
            font-size: 10px;
            line-height: 15px;
            text-align: center;
            color: #353945;
            span {
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
            }
        }
        ${({isActive}) => isActive && css`
            background: rgba(69, 179, 107, 0.2);
        `}
    }
    .table{
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-weight: 500;
        font-size: 8px;
        line-height: 12px;
        color: #353945;
        tr {
            border-radius: 2px;
            border-bottom: 2px solid rgba(255,255,255,0.1);
            td {
                background: #F4F5F6;
                padding: 5px;
                &:first-child { border-top-left-radius: 2px; border-bottom-left-radius: 2px; }
                &:last-child { border-top-right-radius: 2px; border-bottom-right-radius: 2px; }
                .number {
                    margin-right: 5px;
                }
                input {
                    background: #FCFCFD;
                    box-sizing: border-box;
                    border-radius: 2px;
                    outline: none;
                    border: 0.5px solid transparent;
                    padding: 4px;
                    font-weight: 500;
                    font-size: 6px;
                    line-height: 9px;
                    color: #353945;
                    &::placeholder {
                        color: #B1B5C4;
                    }
                    &:focus {
                        border: 0.5px solid #B1B5C4;
                    }
                }
            }
            .align__center {
                display: flex;
                align-items: center;
            }
        }
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 22px;
        button {
            &:first-child {
                margin-right: 5px;
            }
        }
    }
    ${({theme:{mode}}) => mode == 'dark' && css`
        .main {
            background: rgba(69, 179, 107, 0.05);
            &__upload {
                color: #FCFCFD;
            }
        }
        .table {
            color: #FCFCFD;
            tr {
                td {
                    background: #23262F;
                    span {
                        color: #B1B5C4;
                    }
                    input {
                        background: #141416;
                        color: #FCFCFD;
                        &::placeholder {
                            color: #B1B5C4;
                        }
                        &:focus {
                            border: 0.5px solid #777E91;
                        }
                    }
                }
            }
        }
    `}
    ${({theme:{mode},isActive}) => mode == 'dark' && isActive && css`
        .main {
            background: rgba(69, 179, 107, 0.08);
        }
    `}
`;