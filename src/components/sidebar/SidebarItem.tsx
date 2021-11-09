import React from 'react'

/******************************* INTERFACES ********************************/
interface SidebarItemProps  {
    title: string,
    active: boolean,
    icon: string
}

/******************************* COMPONENT *********************************/
const SidebarItem = ( { title, icon, active }: SidebarItemProps ) => {
    const state = active ? 'active' : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${ state }`}>
                <i className={ icon }/>
                <span>
                    { title }
                </span>
            </div>
        </div>
    )
}

export default SidebarItem