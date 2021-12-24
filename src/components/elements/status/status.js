import React, { useState } from 'react'
import { isArray } from 'lodash';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Button from "../button";
import Icon from '../icon';
import { StatusStyled, BorderStyled } from './statusStyle'
import mail from '../../../assets/icons/mail.svg';


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

// Moves an item from one list to another list.
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    const [removed2] = destClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);
    sourceClone.splice(droppableDestination.index, 0, removed2);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    color: isDragging ? "#353945" : "#777E91",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? "#fff" : "#000",
});

const BodyContent = ({ title, body, statusColor }) => {
    return (
        <div className="main__body">
            {body.map((val, ind) => (
                <div className="main__body__row" key={val.id + 25}>
                    <div className="main__body__row__border"><BorderStyled color={statusColor} /></div>
                    <div className="main__body__row__name"> {val.name} </div>
                    <div className="main__body__row__content">
                        {title && isArray(title) && title.map(([{content}]) => (
                            content == "priority"
                                ? <div className={`main__body__row__${content}`}>
                                    {val.priority == "yellow"
                                        ? <Icon icon="icon-filled" color="warning" />
                                        : val.priority == "green"
                                            ? <Icon icon="icon-filled" color="green" />
                                            : val.priority == "purple"
                                                ? <Icon icon="icon-filled" color="purple" className="ui__icon__wrapper purple" />
                                                : val.priority == "pink"
                                                && <Icon icon="icon-filled" color="pink" className="ui__icon__wrapper pink" />
                                    }
                                </div>
                                : content == "action"
                                    ? <div className={`main__body__row__${content}`}>
                                        {val.action.phone && <span><Icon icon="icon-phone" color="green" /></span>}
                                        {val.action.mail && <span><img src={mail} /></span>}
                                        {<span><Icon icon="icon-more-dots" color="dark" /></span>}
                                    </div>
                                    : <div className={`main__body__row__${content}`}>{val[content]}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const StatusPeople = ({ head, body, uniqueId, ...props }) => {
    const [isOpen, setOpen] = useState(true);
    const [title, setTitle] = useState([
        [{
            id: `1 ${uniqueId}`,
            content: 'phone'
        }],
        [{
            id: `2 ${uniqueId}`,
            content: 'priority'
        }],
        [{
            id: `3 ${uniqueId}`,
            content: "action"
        }]
    ]);
    const onDragEnd = (result) => {
        const { source, destination } = result;
        // dropped outside the list
        if (!destination) return;

        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(title[sInd], source.index, destination.index);
            const newState = [...title];
            newState[sInd] = items;
            setTitle(newState);
        } else {
            const result = move(title[sInd], title[dInd], source, destination);
            const newState = [...title];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];
            setTitle(newState.filter(group => group.length));
        }
    }
    
    return (
        <div className="main">
            <div className="main__head">
                <div className="main__head__status">
                    <Button className={`main__head__status__toggle ${isOpen && "active"}`}
                        bg={head.statusColor}
                        hover={head.statusColor}
                        color={head.statusColor == "#FFD166" && "#353945"}
                        xs
                        semiBold
                        onClick={() => setOpen(state => !state)}>
                        {head.status}
                        <Icon icon="icon-bottom-arrow" color={head.statusColor == "#FFD166" ? "#353945" : 'white'} />
                    </Button>
                    <span>{body.length} LEAD</span>
                    {isOpen && <Icon icon="icon-shape" />}
                    {isOpen && <Icon icon="icon-add-plus" size="xs" />}
                </div>
                {isOpen && <div className="main__head__dragDrop">
                    <DragDropContext onDragEnd={onDragEnd} >
                        {title.map((el, ind) => (
                            <Droppable key={ind} droppableId={`${ind}`} >
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        style={getListStyle(snapshot.isDraggingOver)}
                                        {...provided.droppableProps} >
                                        {el.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index} >
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )} className={`main__head__${item.content}`}>
                                                            {item.content == 'phone' && <Icon icon="icon-dots" className="dots" />}
                                                            {item.content}
                                                            {item.content == 'phone' && <div className="upAndDown">
                                                                <Icon icon="icon-bottom" size="xs" />
                                                                <Icon icon="icon-bottom" size="xs" className="grey" />
                                                            </div> }
                                                            {item.content == 'phone' && <Icon icon="icon-x-close" size="xs" className="xClose" color="white" />}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </DragDropContext>
                </div>}

                {/* {head.title && isArray(head.title) && head.title.map((value) => (
                    isOpen && <div className={`main__head__${value}`}>{value}</div>
                ))} */}
            </div>
            {isOpen && <BodyContent key={uniqueId} title={title} body={body} statusColor={head.statusColor} />}
        </div>
    )
}

export default function Status({ modules = [], ...props }) {
    return (
        <StatusStyled>
            {isArray(modules) && modules && modules.map((value, index) => (
                <StatusPeople key={value.id} {...{ head: value.head, body: value.body, uniqueId: `${index}-${new Date().getTime()}` }} />
            ))}
        </StatusStyled>
    )
}