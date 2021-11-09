import React, { useRef } from 'react'

import ClickOutsideRef from './ClickOutsideRef'
import './dropdown.css'


/******************************* COMPONENT *********************************/
const Dropdown = ( props: any ) => {

    const dropdown_toggle_el = useRef(null)
    const dropdown_content_el = useRef(null)

    ClickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    return (
        <div className="dropdown"> 
            <button ref={dropdown_toggle_el} className="dropdown__toggle">
                {
                    props.icon ? <i className={ props.icon }></i> : ""
                }
                {
                    props.badge ? <span className="dropdown__toggle-badge"> { props.badge } </span> : ""
                }
                {
                    props.customToggle ? props.customToggle() : ""
                }
            </button>
            <div ref={dropdown_content_el} className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map( (item:any, index:any) => props.renderItems(item, index)) : ""
                }
                {
                    props.renderFooter ? (
                        <div className="dropdown__footer">
                            { props.renderFooter() }
                        </div>
                    ) : ""
                }
            </div>
        </div>
    )
}

export default Dropdown
