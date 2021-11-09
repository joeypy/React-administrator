// React libraries
// import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Dropdown from '../dropdown/Dropdown'
import RenderUserToggle from '../dropdown/RenderUserToggle'
import RenderNotificationItem, { NotificationProps } from './RenderNotificationItem'
import RenderUserMenu from './RenderUserMenu'
import ThemeMenu from '../theme-menu/ThemeMenu'

// data
import notifications from '../../assets/JsonData/notification.json'
import user_menu from '../../assets/JsonData/user_menus.json'

// styles
import user_image from '../../assets/images/tuat.png'
import './topnav.css'


const current_user = {
    display_name: 'Joseph Boscan',
    image: user_image
}

const TopNav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder="Search here..." />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown 
                        customToggle={ () => RenderUserToggle(current_user)}
                        contentData={user_menu}
                        renderItems={ (item: any, index: number) => RenderUserMenu(item, index)}
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <Dropdown 
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={ (item: NotificationProps, index: number) => RenderNotificationItem(item, index)}
                        renderFooter={ () => <Link to='/' > View All </Link> }
                    />
                    {/* dropdown here */}
                </div>
                <div className="topnav__right-item">
                    <ThemeMenu 
                        
                    />
                    {/* theme here */}
                </div>
            </div>
        </div>
    )
}

export default TopNav
