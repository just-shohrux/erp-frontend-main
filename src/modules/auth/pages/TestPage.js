import { isArray } from 'lodash';
import React,{useState} from 'react';
import Button from '../../../components/elements/button';
import CardOfSpecialization from '../../../components/elements/cardOfSpecialization';
import CustomTable, { Column, Row, Tbody, Thead, CustomTableStyled } from '../../../components/elements/customTable';
import Icon from '../../../components/elements/icon';
import Sort from '../../../components/elements/sort/sort';

import edit2 from '../../../assets/icons/edit2.svg';
import recycle2 from '../../../assets/icons/recycle2.svg';

const columns = [
    {
        key: "title",
        title: "# Title",
        dataIndex: "title"
    },
    {
        key: "section",
        title: "Section",
        dataIndex: "section"
    },
    {
        key: "status",
        title: "Status",
        dataIndex: "status"
    },
    {
        key: "action",
        title: "Action",
        dataIndex: "action"
    },
];

const data = [
    {
        key: "1",
        title: "Mentor",
        section: "Academic",
        status: true,
        action: true
    },
    {
        key: "2",
        title: "Support",
        section: "Admin",
        status: true,
        action: true
    },
    {
        key: "3",
        title: "Assistent",
        section: "Academic",
        status: false,
        action: true
    },
    {
        key: "4",
        title: "Security",
        section: "Academic",
        status: true,
        action: true
    },
];

const TestPage = () => {
    const [isActive, setActive] = useState(false);
    const [buttonData, setButtonData] = useState({});
    return (
        <div>
            TestPage
            <CardOfSpecialization name="Python" active={isActive} onClick={() => setActive(state => !state)} style={{margin: "50px"}}/>
            <CustomTableStyled>
                <CustomTable style={{margin: "50px"}} >
                    <Thead>
                        <Row>
                            {isArray(columns) && columns.length && columns.map(({key, title, dataIndex}) => 
                            <Column key={key} data-index={dataIndex}>
                                {title} {(dataIndex == 'title' || dataIndex == 'status') && <Sort />} 
                            </Column>)}
                        </Row>
                    </Thead>
                    <Tbody>
                        {isArray(data) && data.length > 0 && data.map((value, index) => (
                        <Row key={value.key}>
                            {isArray(columns) && columns.length && columns.map(({dataIndex, key}) => 
                            <Column key={key} data-index={dataIndex} > 
                                {dataIndex == 'status' 
                                ? <Button 
                                    danger={!(buttonData[index+dataIndex])}
                                    onClick={() => setButtonData(state => ({
                                        ...state, 
                                        [index+dataIndex]: state[index+dataIndex] ? !state[index+dataIndex] : value[dataIndex]
                                    }))} 
                                > {(buttonData[index+dataIndex]) ? "ACTIVE" : "IN ACTIVE"} </Button>
                                : dataIndex == 'action' 
                                    ? <div className="action">
                                        <span><img src={edit2} /></span>
                                        <span><img src={recycle2} /></span>
                                    </div>
                                    : dataIndex == 'title' 
                                        ? <><span>{value.key}</span> {value[dataIndex]}</> 
                                        : value[dataIndex]
                            }
                            </Column>
                            )}
                        </Row>
                    ))}
                    </Tbody>
                </CustomTable>
            </CustomTableStyled>
        </div>
    );
};

export default TestPage;
