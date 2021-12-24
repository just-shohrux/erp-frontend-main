import {get, includes} from "lodash";
import moment from "moment";

const hasAccess = (items = [], can = '') => {
    let access = false;
    can = can.split(' ');
    items = items.map(({name}) => name);
    can.map(item => {
        if (includes(items, item)) {
            access = true;
        }
    })
    return access;
}

const saveFile = (file,name=moment(),extension='xlsx') => {
    const blob = new Blob([file.data]);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${name}.${extension}`;
    link.click();
    URL.revokeObjectURL(link.href);
}

export {hasAccess,saveFile}