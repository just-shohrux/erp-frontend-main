import styled, { css } from "styled-components";

export const StatusStyled = styled.div`
    background: #FFFFFF;
    padding: 1px 30px 30px;
    .main {
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: #777E91;
        &__head {
            width: 100%;
            display: flex;
            margin: 22px 0;
            &__status {
                width: 33%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                span {
                    margin: 0 16px 0 10px;
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 24px;
                    color: #777E91;
                }
                .ui__icon__wrapper {
                    margin-right: 14px;
                    .icon-shape {
                        -webkit-mask-size: inherit;
                        mask-size: inherit;
                        transform: translate(-50%, -50%) scale(1.4);
                    }
                }
                &__toggle {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 162px;
                    height: 28px;
                    &:hover {
                        opacity: 0.8;
                    }
                    .ui__icon__wrapper {
                        margin-right: 0px;
                    }
                    &.active {
                        .ui__icon__wrapper {
                            transform: rotate(180deg);
                        }
                    }
                }
            }
            &__dragDrop {
                display: flex;
                align-items: center;
                width: 67%;
                div[data-rbd-droppable-id] {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
            }
            &__phone, &__priority, &__action {
                display: flex;
                justify-content: center;
                align-items: center;
                text-transform: capitalize;
            }
            &__phone {
                /* width: 30%; */
                justify-content: space-between;
                width: 172px;
                transition: 0.3s;
                padding: 4px;
                border: 1px solid transparent;
                overflow: hidden;
                .icon {
                    -webkit-mask-size: inherit;
                    mask-size: inherit;
                }
                .upAndDown {
                    /* margin: 0 6px 0 7px; */
                    margin: 0 -10px;
                    background: rgba(69,179,107,0.2);
                    padding: 2px 5px;
                    border-radius: 40%;
                    transition: 0.3s;
                    transform: translateY(50px);
                    div {
                        div {
                            width: 7px;
                            height: 7px;
                            .icon-bottom {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        &:first-child {
                            div {
                                .icon-bottom {
                                    transform: translate(-50%, -50%) rotate(180deg);
                                    background: rgba(69,178,107,1);
                                    &:hover {
                                        background: rgba(69,178,107,0.8);
                                    }
                                }
                            }
                        }
                        .grey {
                            .icon-bottom {
                                background: rgba(177,181,195,1);
                                &:hover {
                                    background: rgba(177,181,195,0.8);
                                }
                            }
                        }
                    }
                    .icon {
                        -webkit-mask-size: 100%;
                        mask-size: 100%;
                    }
                }
                .xClose {
                    width: 16px;
                    height: 16px;
                    background: rgba(119,126,144,1);
                    margin-right: 20px;
                    transition: 0.3s;
                    transform: translateX(50px);
                    &:hover {
                        background: rgba(119,126,144,0.8);
                    }
                }
                .dots {
                    transition: 0.3s;
                    transform: translateX(-50px);
                }
                &:hover {
                    background: #FCFCFD;
                    border: 1px solid #E6E8EC;
                    box-sizing: border-box;
                    border-radius: 6px;
                    .xClose, .upAndDown, .dots {
                        transform: translate(0px, 0px);
                    }
                }
            }
            &__priority {
                /* width: 19%; */
            }
            &__action {
                /* width: 20%; */
            }
        }
        &__body {
            width: 100%;
            &__row {
                display: flex;
                align-items: center;
                width: 100%;
                height: 30px;
                margin: 10px 0;
                background: #FFFFFF;
                border: 1px solid #F4F5F6;
                box-sizing: border-box;
                border-radius: 4px;
                padding: 3px;
                &__border {
                    /* width: 1%; */
                    height: 24px;
                    /* margin-right: 15px; */
                }
                &__name, &__phone, &__priority, &__action {
                    display: flex;
                    justify-content: center;
                }
                &__name {
                    width: 33%;
                    justify-content: flex-start;
                    color: #353945;
                    padding-left: 15px;
                }
                &__content {
                    width: 67%;
                    display: flex;
                    align-items: center
                }
                &__phone {
                    width: 33%;
                }
                &__priority {
                    width: 33%;

                    .purple {
                        .icon {
                            background-color: #9757D7;
                        }
                    }
                    .pink {
                        .icon {
                            background-color: #EF466F;
                        }
                    }
                }
                &__action {
                    width: 33%;
                    span {
                        padding: 4px;
                        border-radius: 6px;
                        display: inline-block;
                        transform: scale(0.7);
                        cursor: pointer;
                        &:nth-child(1) {
                            background: rgba(69,179,107,0.05);
                        }
                        &:nth-child(2) {
                            background: rgba(228,169,30,0.1);
                            img {
                                height: 100%;
                                width: 100%;
                                transform: scale(1.3);
                            }
                        }
                    }
                }
            }
        }
    }
    ${({theme:mode}) => mode == 'dark' && css`

    `}
`;

export const BorderStyled = styled.div`
    background: ${({color}) => color};
    border-radius: 1px;
    width: 4px;
    height: 100%;
    display: inline-block;
`