import {createRoutine} from "redux-saga-routines";

const SET_ACTIVE_MENU_ITEM_ID = createRoutine("SET_ACTIVE_MENU_ITEM_ID");
const SET_OPEN_SUBMENU = createRoutine("SET_OPEN_SUBMENU");
const SET_OPEN_SIDEBAR = createRoutine("SET_OPEN_SIDEBAR");
const SET_BREADCRUMB_ITEM = createRoutine("SET_BREADCRUMB_ITEM");
const SET_MODE = createRoutine("SET_MODE");


export default {
    SET_ACTIVE_MENU_ITEM_ID,
    SET_OPEN_SUBMENU,
    SET_OPEN_SIDEBAR,
    SET_BREADCRUMB_ITEM,
    SET_MODE
}
