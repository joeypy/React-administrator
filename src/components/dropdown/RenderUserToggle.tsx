import React from 'react'

interface RenderUserToggleProps {
    display_name: string,
    image: string;
}

const RenderUserToggle = ( user: RenderUserToggleProps ) => {

    return (
        <div className="topnav__right-user">
            <div className="topnav__right-user__image">
                <img src={ user.image } alt="" />
            </div>
            <div className="topnav__right-user__name">
                { user.display_name }
            </div>
        </div>
    )
}

export default RenderUserToggle
