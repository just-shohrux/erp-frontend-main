import Actions from "./actions";
import {get} from "lodash";

export default function ApiReducer(state = {}, action) {
    switch (action.type) {
        case Actions.SET_ACTIVE_MENU_ITEM_ID.REQUEST:
            return ((action, state) => {
                return {
                    ...state,
                    menu_item_active_id: null
                };
            })(action, state);
        case Actions.SET_ACTIVE_MENU_ITEM_ID.SUCCESS:
            return ((action, state) => {
                const { id } = action.payload;
                return {
                    ...state,
                    menu_item_active_id: id,
                };
            })(action, state);
        case Actions.SET_ACTIVE_MENU_ITEM_ID.FAILURE:
            return (() => {
                return {
                    ...state,
                    menu_item_active_id: null
                };
            })();

        case Actions.SET_ACTIVE_MENU_ITEM_ID.TRIGGER:
            return (() => {
                return {
                    ...state,
                    menu_item_active_id: null,
                };
            })();

        case Actions.SET_OPEN_SUBMENU.REQUEST:
            return ((action, state) => {
                return {
                    ...state,
                    is_open_submenu: null
                };
            })(action, state);
        case Actions.SET_OPEN_SUBMENU.SUCCESS:
            return ((action, state) => {
                const { open } = action.payload;
                return {
                    ...state,
                    is_open_submenu: open,
                };
            })(action, state);
        case Actions.SET_OPEN_SUBMENU.FAILURE:
            return (() => {
                return {
                    ...state,
                    is_open_submenu: null
                };
            })();

        case Actions.SET_OPEN_SUBMENU.TRIGGER:
            return (() => {
                return {
                    ...state,
                    is_open_submenu: null,
                };
            })();

        case Actions.SET_OPEN_SIDEBAR.REQUEST:
            return ((action, state) => {
                return {
                    ...state,
                    is_open_sidebar: null
                };
            })(action, state);
        case Actions.SET_OPEN_SIDEBAR.SUCCESS:
            return ((action, state) => {
                const { open } = action.payload;
                return {
                    ...state,
                    is_open_sidebar: open,
                };
            })(action, state);
        case Actions.SET_OPEN_SIDEBAR.FAILURE:
            return (() => {
                return {
                    ...state,
                    is_open_sidebar: null
                };
            })();

        case Actions.SET_OPEN_SIDEBAR.TRIGGER:
            return (() => {
                return {
                    ...state,
                    is_open_sidebar: null,
                };
            })();
        default:
            return state;
    }
}
