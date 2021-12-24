import React, { useCallback, useState } from 'react'

import Dropzone, { useDropzone } from 'react-dropzone';
import { DropzoneStyled } from './dropzoneStyles';
import Button from './../button';
import Icon from '../icon';
import checkImg from './../../../assets/icons/Check.svg';

const UploadContent = ({...props}) => (
    <div {...props}>
        <Icon icon="icon-upload" color="green"/>
        <span>Upload files</span>
        Drag and drop files here or Browse
    </div>);

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
export default function DropZone({ saveData=() => {}, cancel=() => {}, ...props }) {
    const [files, setFiles] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
        setFiles((state) => [...state, ...acceptedFiles]);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const deleteHandling = (index) => {
        setFiles((state) => state.filter((value, ind) => ind !== index ));
    }

    return (
        <DropzoneStyled isActive={isDragActive && "active"} {...getRootProps({
                onClick: event => {
                    // console.log(event);
                }
            })} >
            <Dropzone>
                {({ getRootProps, getInputProps }) => (
                    <section className="main">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                isDragActive 
                                ? <UploadContent className="main__upload" /> 
                                : <UploadContent className="main__upload" />
                            }
                        </div>
                    </section>
                )}
            </Dropzone>
            <table className="table">
                <tbody>
                    {files.map((value, index) => (
                        <tr key={index+1}>
                            <td><div className="align__center"><img src={checkImg} /> <span className="number">{`${index+1} `}</span> {` ${value.name}`}</div></td>
                            <td><input type="text" placeholder="Enter Description" /></td>
                            <td><span>{value.type}</span></td>
                            <td>{value.size >= 1024 
                                ? (value.size / 1024) >= 1024 
                                    ? `${financial(value.size / 1024 / 1024)} MB` 
                                    : `${financial(value.size / 1024)} KB`
                                : `${value.size} Bytes`}</td>
                            <td><Icon icon="icon-recycle" color="danger" onClick={() => deleteHandling(index)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttons">
                <Button outlineDanger="1" onClick={() => {setFiles([]); cancel()}}>Cancel</Button>
                <Button onClick={saveData}>Save</Button>
            </div>
        </DropzoneStyled>
    )
}
