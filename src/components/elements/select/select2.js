import React, {useState} from 'react'
import RSelect from 'react-select';
import { connect } from 'react-redux';
import { SelectStyled, colourStyles } from './select2Styled';
import errorImg from "../../../assets/icons/error2.svg";

function Select2({ data, value, onChange, checked, error, disable, colourOptions, multi, ...props }) {
    const [selectOption, setSelectOption] = useState({
        isClearable: true,
        isDisabled: false,
        isLoading: false,
        isRtl: false,
        isSearchable: true,
    })
    const { isClearable, isSearchable, isDisabled, isLoading, isRtl } = selectOption;
    return (
        <SelectStyled {...props} {...{ 
            data, 
            checked: checked ? checked : '',
            error: error ? "error":'' }}>
            
            <RSelect
                    className={!multi ? `basic-single select`: `multiSelect`}
                    classNamePrefix={!multi && "select"}
                    defaultValue={multi && [colourOptions[0], colourOptions[1]] ||colourOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={colourOptions}                    
                    closeMenuOnSelect={multi && false}
                    isMulti={multi}
                    styles={multi && colourStyles}
                    {...{
                        checked: checked ? checked : '',
                        error: error ? "error":'',
                        onChange
                    }}
                    {...props}
                />
                {error ? <p> <img src={errorImg} /> Error text.</p> :''}
        </SelectStyled>
    )
}
const mapStateToProps = ({ThemeReduser}) => ({
    mode: ThemeReduser ? ThemeReduser.mode : 'dark'
})
export default connect(mapStateToProps, null)(Select2);