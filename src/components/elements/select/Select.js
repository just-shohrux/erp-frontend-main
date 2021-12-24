import React, { useState } from 'react'
import { SelectStyled } from './selectStyled';
import SvgIcon from '../Svg';
import arrow from "../../../assets/icons/bottomArrow.svg";
import errorImg from "../../../assets/icons/error2.svg";


export default function Select({ data, value, onChange, checked, error, disable, ...props }) {
    const [viewSelectOption, setviewSelectOption] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const selectHandling = ({ target }) => {
        setviewSelectOption((state) => !state);
        onChange(target.innerText);
    };
    const serachChange = ({ target: { value } }) => {
        data = data.filter((val) => val.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()));
        setSearchValue(value);
    }
    return (
        <SelectStyled {...props} {...{ 
            active: viewSelectOption ? 'active' : '', 
            data, 
            checked: checked ? checked : '',
            error: error ? "error":'' }} >
            <div className="select">
                <div className="select__header" onClick={() => setviewSelectOption((state) => !state)} >
                    {value ? value : "Selected value"}
                    <SvgIcon src={arrow} />
                </div>
                <div className={`select__body`}>
                    <div className="select__body__options">
                        <div className="select__body__options__title">SELECT AN OPTION</div>
                        <div className="select__body__options__search">
                            <input type="text" placeholder="Type to search..." value={searchValue} onChange={serachChange} />
                        </div>

                        {Array.isArray(data) ? data.map((value, index) => (
                            <div className="select__body__options__option" key={index + 1}
                                onClick={selectHandling}>{value}</div>)) : null}
                    </div>
                </div>
            </div>
            
        </SelectStyled>
    )
}
