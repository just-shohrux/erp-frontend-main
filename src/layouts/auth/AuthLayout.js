import React from 'react';
import styled from "styled-components";
import Title from "../../components/elements/title";
import Progressbar from "../../components/progressbar";
import Text from "../../components/elements/text";
import authBgImg from "../../assets/images/auth-left-image.png";
import logo from "../../assets/images/dark-logo.svg";
import Icon from "../../components/elements/icon";

const StyledAuthLayout = styled.div`
  display: flex;
  height: 100vh;
  .auth {
    &__left {
      width: 45%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      background-image: url(${authBgImg});
      position: relative;
      padding: 15px;
      &__bottom{
        position: absolute;
        bottom: 80px;
        text-align: center;
        width: 80%;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
      }
      &__title{
        margin-bottom: 15px;
      }
      &__text{
        color:#E4D7CF;
        margin-top: 6px;
      }
      &__progressbar{
        width: 200px;
        margin: 0 auto;
        height: 4px;
        margin-top: 60px;
      }
    }

    &__right {
      width: 55%;
      padding: 60px;
      position: relative;
      .logo{
        position: absolute;
        cursor: pointer;
        top: 60px;
        left: 60px;
      }
      &__content{
        position: absolute;
        width: 40%;
        top: 50%;
        left: 50%;
      }
    }
  }

`;
const AuthLayout = ({children, ...props}) => {
    return (
        <StyledAuthLayout {...props}>
            <div className="auth__left">
                <div className="auth__left__bottom">
                    <Title light lg semiBold className={'auth__left__title'}>Jonny Wick</Title>
                    <Text lg light>Product Designer</Text>
                    <Text lg className={'auth__left__text'}>Work experience 8 years</Text>
                    <Progressbar percent={39} strokeWidth={2} trailWidth={2}  className={'auth__left__progressbar'} />
                </div>
            </div>
            <div className="auth__right">
                <img className={'logo'} src={logo} alt="logo"/>
                <Icon icon={'icon-home'}/>
                {children}
            </div>
        </StyledAuthLayout>
    );
};

export default AuthLayout;
