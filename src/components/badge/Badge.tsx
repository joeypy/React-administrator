import React from 'react'
import './badge.css'

// const badgeStyle = {
//     'primary': 'badge-primary',
//     'warning': 'badge-primary',
//     'success': 'badge-primary',
//     'danger': 'badge-primary'
// } 


const Badge = (props: any) => {
    return (
        <span className={`badge badge-${props.type}`}>
            { props.content }
        </span>
    )
}

export default Badge
