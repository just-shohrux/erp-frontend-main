import React from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import Sidebar from "../../components/sidebar/sidebar";
import Flex from "../../components/elements/flex";
import Content from "../../components/content";


const MainLayout = ({children, user}) => {
    return (
        <>
            <Flex>
                <Sidebar/>
                <Content>
                    {children}
                </Content>
            </Flex>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        user: get(state, 'auth.user', {})
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
