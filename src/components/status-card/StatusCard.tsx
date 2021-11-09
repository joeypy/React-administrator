import React from 'react'
import './status-card.css'

interface StatusCardProps {
    icon: string,
    count: string,
    title: string
}

const StatusCard = ( { title, count, icon }: StatusCardProps ) => {
    return (
        <div className="status-card">
            <div className="status-card__icon">
                 <i className={ icon }></i>
            </div>
            <div className="status-card__info">
                <h4>{ count }</h4>
                <span>{ title }</span>
            </div>
        </div>
    )
}

export default StatusCard
