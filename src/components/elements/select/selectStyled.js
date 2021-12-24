import styled, { css } from 'styled-components'

export const SelectStyled = styled.div`
    .select {
        width: 260px;
        height: 38px;
        &__header {
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            color: #353945;
            background: #FCFCFD;
            border: 1px solid #E6E8EC;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 10px 14px;
            cursor: pointer;
            transition: 0.2s;
            &:hover {
                border: 1px solid #777E91;
            }
            div {
                background-color: #777E91;
            }
        }
        &__body {
            height: 0px;
            overflow: hidden;
            transition: 0.3s;
            box-shadow: 0px 8px 16px rgba(145, 158, 171, 0.24);
            border-radius: 8px;
            margin: 11px 0 0 0;
            &__options {
                box-sizing: border-box;
                border-radius: 8px;
                background: #fff;
                border: none;
                &__title {
                    font-weight: 500;
                    font-size: 8px;
                    line-height: 12px;
                    color: #777E91;
                    padding: 6px 7px;
                    border-radius: 8px 8px 0px 0px;
                }
                &__search {
                    background: #F4F5F6;
                    padding: 0 7px;
                    input {
                        font-weight: normal;
                        font-size: 8px;
                        line-height: 12px;
                        background: none;
                        border: none;
                        outline: none;
                        width: 100%;
                        &::placeholder {
                            color: #B1B5C4;
                        }
                    }
                }
                &__option {
                    font-weight: normal;
                    font-size: 8px;
                    line-height: 12px;
                    color: #000000;
                    border: 0.5px solid #F4F5F6;
                    padding: 5px;
                    cursor: pointer;
                    &:last-child {
                        border-radius: 0 0 8px 8px;
                    }
                }
            }
        }
    }
    ${({active}) => active && css`
    .select {
        &__header {
            border: 1px solid #777E91;
            div {
                background-color: #353945;
            }
        }
        &__body {
            height: ${({data}) => (20 + 24) + (data.length * 23) + (data.length * 0.5) + (2 * 0.5)}px;
            &__options {
                border: 1px solid #E6E8EC;
            }
        }
    }
    `}
    ${({theme:{mode}}) => mode == 'dark' && css`
    .select {
        &__header {
                border: 1px solid #353945;
                background: #141416;
                color: #777E91;
                div {
                    background-color: #777E91;
                }
            }
            &__body {
                box-shadow: 0px 16px 64px -48px #454F5B;
                &__options {
                    background: #141416;
                    border-radius: 12px;
                    border: none;
                    &__title {
                        color: #777E91;
                        border: 0.5px solid #353945;
                    }
                    &__search {
                        background: #23262F;
                        border: 0.5px solid #353945;
                        input {
                            color: #fff;
                        }
                    }
                    &__option {
                        border: 0.5px solid #353945;
                        color: #F4F5F6;
                    }
                }
            }
        }
    `}
    ${({theme:{mode}, active}) => active && mode == 'dark' && css`
    .select {
        &__header {
            border: 1px solid #777E91;
            color: #B1B5C4;
            div {
                background-color: #B1B5C4;
            }
        }
    }
    `}
`