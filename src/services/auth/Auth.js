import React,{useEffect} from 'react';
import {get} from "lodash";
import Provider from "../../context/auth/AuthProvider";
import {connect} from 'react-redux';
import Actions from "../../modules/auth/actions";
import {hasAccess} from "../../utils";

const Auth = ({
                  children,
                  isAuthenticated,
                  isFetched,
                  user,
                  departments,
                  pages,
                  permissions,
                  checkAuth
              }) => {

    useEffect(() => {
        checkAuth();
    },[])
    return <Provider value={{
        isAuthenticated,
        isFetched,
        user,
        departments,
        pages,
        permissions,
        userCan: (items = [], can = "") => {
            return hasAccess(items, can);
        }
    }}>
        {children}
    </Provider>

}


const mapDispatchToProps = dispatch => {
    return {
        checkAuth: () => dispatch({
            type: Actions.CHECK_AUTH.REQUEST
        })
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: get(state, 'auth.isAuthenticated', false),
        isFetched: get(state, 'auth.isFetched', true),
        user: get(state, 'auth.user', {}),
        departments: get(state, 'auth.user.departments', []),
        pages: get(state, 'auth.user.pages', []),
        permissions: get(state, 'auth.user.permissions', []),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
