import React from "react";
import {ErrorMessage} from "@hookform/error-message";

const TextArea = ({
                      register,
                      name,
                      params,
                      errors,
                      property,
                      defaultValue,
                      column = [2, 6],
                      ...rest
                  }) => {
    return (
        <>
            <label htmlFor={name}>
                {name}
            </label>
            <textarea
                {...register(name, params)}
                {...property}
                defaultValue={defaultValue}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({messages = `${name} is required`}) => {
                    return <small className="form-control-feedback">{messages}</small>;
                }}
            />
        </>
    );
};

export default TextArea;
