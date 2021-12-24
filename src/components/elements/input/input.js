import React, {useState} from 'react'
import Icon from '../icon';

import {InputStyled} from './inputStyle';


import check from "../../../assets/icons/Check.svg";
import errorImg from "../../../assets/icons/error2.svg";


export default function Input({onChange, password, valid, error, disabled, select, checked, ...props}) {
    const [inputType, setInputType] = useState(password ? true : false);
    const [focused, setFocused] = useState(false);
    
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);
    const clickEye = () => setInputType((state) => !state);

    return (
        <InputStyled {...{
                img: password || select,
                focused,
                valid,
                error,
                disabled,
                checked
            }} {...props} >
            <div className="inputContainer">
                <input type={inputType ? "password" : "text"} {...props}
                    {...{
                        onChange,
                        onFocus,
                        onBlur,
                        disabled
                    }} />
                {password ? <Icon icon="icon-eye" onClick={clickEye} /> : 
                select ? <Icon icon="icon-bottom-arrow" /> : 
                checked && <img src={check} />}
            </div>
            {error && !disabled && <p> <img src={errorImg} /> Error text.</p>}
            
        </InputStyled>
    )
}
