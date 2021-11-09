import React from 'react'
import { Link } from 'react-router-dom'


const RenderUserMenu = (item: any, index: number) => {
    return (
        <Link to="/" key={index}>
            <div className="notification-item">
                <i className={ item.icon }></i>
                <span>
                    { item.content }
                </span>
            </div>
        </Link>
    )
}

export default RenderUserMenu
