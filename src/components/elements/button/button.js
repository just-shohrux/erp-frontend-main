import React from 'react';
import {ButtonStyeld} from './buttonStyles';
import Icon from '../icon';
import plusImg from './../../../assets/icons/plus.svg';

export default function Button({ children, type, edit, plus, ...props}) {
    return (
        <ButtonStyeld type={type ? type : "button"} {...props} {...{edit, plus}}>
            {edit ? <Icon icon="icon-edit" color="white" /> : plus && <img src={plusImg} className="img-space-right" />} {children}
        </ButtonStyeld>
    )
}
