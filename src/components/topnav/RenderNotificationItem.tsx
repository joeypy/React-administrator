import React from 'react'

export interface NotificationProps {
    icon: string,
    content: string;
}

const RenderNotificationItem = (item: NotificationProps, index: number) => {
    return (
        <div className="notification-item" key={index}>
            <i className={ item.icon }></i>
            <span>{ item.content }</span>
        </div>
    )
}

export default RenderNotificationItem