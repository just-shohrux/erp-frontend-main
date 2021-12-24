import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import Actions from "./actions";


function* setMenuItemActiveId(action) {
    const {
        id = null
    } = action.payload;
    try {
        yield put({type: Actions.SET_ACTIVE_MENU_ITEM_ID.SUCCESS, payload: {id}});
    } catch (e) {
        yield put({
            type: Actions.SET_ACTIVE_MENU_ITEM_ID.FAILURE,
        });
    }
}

function* setOpenSubmenu(action) {
    const {
        open = null
    } = action.payload;
    try {
        yield put({type: Actions.SET_OPEN_SUBMENU.SUCCESS, payload: {open}});
    } catch (e) {
        yield put({
            type: Actions.SET_OPEN_SUBMENU.FAILURE,
        });
    }
}

function* setOpenSidebar(action) {
    const {
        open = null
    } = action.payload;
    try {
        yield put({type: Actions.SET_OPEN_SIDEBAR.SUCCESS, payload: {open}});
    } catch (e) {
        yield put({
            type: Actions.SET_OPEN_SIDEBAR.FAILURE,
        });
    }
}


export default function* sagas() {
    yield all([
        takeLatest(Actions.SET_ACTIVE_MENU_ITEM_ID.REQUEST, setMenuItemActiveId),
        takeLatest(Actions.SET_OPEN_SUBMENU.REQUEST, setOpenSubmenu),
        takeLatest(Actions.SET_OPEN_SIDEBAR.REQUEST, setOpenSidebar),
    ]);
}
