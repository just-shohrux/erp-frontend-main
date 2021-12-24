import React, {useState} from 'react';
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {get, isArray, isEqual, last,isNil} from "lodash";
import classNames from "classnames";
import StickyBox from "react-sticky-box";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {motion} from "framer-motion";
import {connect} from "react-redux";
import miniLogo from "../../assets/images/mini-logo.svg";
import Icon from "../elements/icon";
import Title from "../elements/title";
import switcherImg from "../../assets/icons/sidebar-switcher.svg";
import Actions from "../../modules/settings/actions";


const StyledSidebar = styled.div`
  display: flex;

  .sidebar {
    width: 100px;
    background: #23262F;
    box-shadow: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    overflow-y: hidden;
  }

  .sidebar {

    &__header {
      height: 80px;
      display: flex;
      justify-content: center;
      padding-top: 25px;
    }

    &__content {${`min-height: calc(100vh - 250px);`};
    }

    &__footer {
      border-top: 1px solid #353945;
      padding-top: 0px;
      padding-bottom: 30px;
      height: 150px;

      &_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 5px;

        &.rotated {
          .icon {
            transform: rotate(-180deg) translate(-25%, -50%);
            left: 0 !important;
            top: 0 !important;
          }
        }

        .icon {
          width: 15px !important;
          height: 15px !important;
          display: inline-block;

          &:hover {
            background-color: #fff;
          }
        }
      }
    }

    &__switcher {
      position: absolute;
      left: ${({isSidebarOpen}) => isSidebarOpen ? '80px' : '-20px'};
      width: 40px;
      height: 80px;
      border-radius: 50%;
      background-image: url(${switcherImg});
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      z-index: 9;
      top: -10px;

      .for-animation {
        transition: 0.2s ease;

        &.rotated {
          transform: rotate(180deg);
          padding-right: 15px;
        }
      }
    }
  }

  .menu {
    &__item {
      margin-top: 20px;
      position: relative;
      list-style: none;

      &:last-child {
        margin-bottom: 0;
      }

      &:after {
        position: absolute;
        content: '';
        left: -5px;
        top: 0;
        height: 100%;
        width: 9px;
        background: transparent;
        border-radius: 12px;
        transition: 0.2s ease;
      }

      &:hover {
        &:after {
          background: #F4F5F6;
        }

        .menu__item_text {
          color: #fff;
        }

        .icon {
          background-color: #fff;
        }
      }

      &_link {
        display: flex;
        flex-direction: column;
        padding: 5px 15px;
        justify-content: center;
        align-items: center;
        text-decoration: none;
      }

      &_text {
        font-size: 12px;
        color: #B1B5C3;
        margin-top: 5px;
        font-weight: 500;
        transition: 0.2s ease;
      }

      &.active {
        .menu__item_text {
          color: #fff;
          font-weight: 600;
        }

        .icon {
          background-color: #fff;
        }

        &:after {
          background: #30C062;
        }
      }
    }

  }

  .submenu {
    width: 250px;
    background-color: #fff;
    height: 100vh;
    padding: 60px 0px 15px 0px;
    overflow-x: hidden;
    position: ${({isSubmenuOpen}) => isSubmenuOpen ? 'relative' : 'absolute'};
    left: ${({isSubmenuOpen}) => isSubmenuOpen ? '0px' : '100px'};
    display: ${({isSubmenuOpen,hoverMenuId}) => isSubmenuOpen ? 'block' : !isNil(hoverMenuId) ? 'block' : 'none'};

    &__content {
      h2 {
        padding-left: 25px;
        padding-right: 15px;
        font-size: 24px;
      }

      ul {
        list-style-type: none;

        li {
          a {
            padding: 10px 15px 10px 20px;
            font-size: 16px;
            display: flex;
            align-items: center;
            color: #353945;
            text-decoration: none;
          }
          &.active{
            background-color: #E6E8EC;
          }
        }
      }
    }
  }
`;

const Sidebar = ({
                     modules = [
                         {
                             id: 1,
                             name: 'Academy',
                             url: '/academy',
                             icon: 'icon-home',
                             departments: [
                                 {
                                     id: 1,
                                     name: 'Content',
                                     pages: [
                                         {
                                             id: 1,
                                             name: 'Online content',
                                             url: '/academy/content/online-content'
                                         },
                                         {
                                             id: 2,
                                             name: 'Test page',
                                             url: '/academy/content/test'
                                         }
                                     ]
                                 },
                                 {
                                     id: 2,
                                     name: 'Exam',
                                     pages: [
                                         {
                                             id: 1,
                                             name: 'Exam apge',
                                             url: '/academy/exam/exam'
                                         },
                                     ]
                                 },
                                 {
                                     id: 2,
                                     name: 'Content',
                                     pages: [
                                         {
                                             id: 1,
                                             name: 'Online content',
                                             url: '/academy/content/online-content'
                                         },
                                         {
                                             id: 2,
                                             name: 'Test page',
                                             url: '/academy/content/test'
                                         }
                                     ]
                                 }
                             ]
                         },
                         {
                             id: 2,
                             name: 'Account',
                             url: '/account',
                             icon: 'icon-account'
                         },
                         {
                             id: 3,
                             name: 'Sales',
                             url: '/sales',
                             icon: 'icon-sales'
                         },
                         {
                             id: 4,
                             name: 'Marketing',
                             url: '/marketing',
                             icon: 'icon-marketing'
                         },
                         {
                             id: 5,
                             name: 'Humans',
                             url: '/humans',
                             icon: 'icon-humans'
                         },
                         {
                             id: 6,
                             name: 'Settings',
                             url: '/settings',
                             icon: 'icon-settings'
                         }
                     ],
                     setActiveMenuItemIdRequest,
                     sidebarActiveMenuId,
                     setOpenSubmenuRequest,
                     isSubmenuOpen,
                     setOpenSidebarRequest,
                     isSidebarOpen,
                     ...rest
                 }) => {

    const [hoverMenuId,setHoverMenuId] = useState(null);

    const setActiveMenuItemId = (id) => {
        setActiveMenuItemIdRequest(id);
    }

    const setOpenSubmenu = () => {
        setOpenSubmenuRequest(!isSubmenuOpen);
    }

    const setOpenSidebar = () => {
        setOpenSidebarRequest(!isSidebarOpen);
    }


    return (
        <StickyBox offsetTop={0} offsetBottom={0}>
            <StyledSidebar isSubmenuOpen={isSubmenuOpen} isSidebarOpen={isSidebarOpen} hoverMenuId={hoverMenuId}  {...rest}>
                {isSidebarOpen && <div className={'sidebar'}>
                    <div className="sidebar__header">
                        <Link to={'/'}>
                            <LazyLoadImage src={miniLogo} className={'img-fluid'} alt="logo"/>
                        </Link>
                    </div>
                    <div className="sidebar__content">
                        <ul className="menu">
                            {
                                isArray(modules) && modules && modules.filter((item) => !isEqual(get(item, 'id'), modules.length)).map((module, index) =>
                                    <li key={get(module, 'id', index + 1)}
                                        onClick={() => setActiveMenuItemId(get(module, 'id'))}
                                        className={classNames('menu__item', {active: isEqual(get(module, 'id'), sidebarActiveMenuId)})}
                                    onMouseEnter={() => setHoverMenuId(get(module, 'id'))}
                                        onMouseLeave={() => setHoverMenuId(null)}
                                    >
                                        <NavLink to={get(module, 'urll', '/')} className={'menu__item_link'}>
                                            <Icon icon={get(module, 'icon', 'icon-home')}/>
                                            <span className={'menu__item_text'}>{get(module, 'name', '-')}</span>
                                        </NavLink>
                                    </li>)
                            }

                        </ul>
                    </div>
                    <div className="sidebar__footer">
                        <ul>
                            <li onClick={() => setActiveMenuItemId(modules.length)}
                                className={classNames('menu__item', {active: isEqual(modules.length, sidebarActiveMenuId)})}>
                                <Link to={get(last(modules), 'urll', '#')} className={'menu__item_link'}>
                                    <Icon icon={get(last(modules), 'icon')}/>
                                    <span className={'menu__item_text'}>{get(last(modules), 'name', '-')}</span>
                                </Link>
                            </li>
                        </ul>
                        <motion.div className={classNames("sidebar__footer_icon", {rotated: isSubmenuOpen})}>
                            <Icon icon={'icon-arrow-right'} onClick={setOpenSubmenu}/>
                        </motion.div>
                    </div>
                </div>}
                <motion.div className="submenu">
                    <div className="submenu__content">
                        <div className={'submenu__content'}>
                            <Title medium sm>Title</Title>
                            <ul>
                                <li>
                                    <NavLink to={'#'} className={'submenu__content_link'}><span
                                        className={'dot'}></span><span className={'text'}>Link</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                <div className="sidebar__switcher">
                    <motion.div className={classNames('for-animation', {rotated: !isSidebarOpen})}><Icon
                        onClick={setOpenSidebar} icon={'icon-double-arrow-left'} color={'success'}/></motion.div>
                </div>
            </StyledSidebar>
        </StickyBox>
    );
};

const mapStateToProps = (state) => {
    return {
        sidebarActiveMenuId: get(state, 'settings.menu_item_active_id', 1),
        isSubmenuOpen: get(state, 'settings.is_open_submenu', false),
        isSidebarOpen: get(state, 'settings.is_open_sidebar', true)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setActiveMenuItemIdRequest: (id) => {
            dispatch({type: Actions.SET_ACTIVE_MENU_ITEM_ID.REQUEST, payload: {id}})
        },
        setOpenSubmenuRequest: (open) => {
            dispatch({type: Actions.SET_OPEN_SUBMENU.REQUEST, payload: {open}})
        },
        setOpenSidebarRequest: (open) => {
            dispatch({type: Actions.SET_OPEN_SIDEBAR.REQUEST, payload: {open}})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
