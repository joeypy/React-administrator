// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

const ClickOutsideRef = (content_ref: any, toggle_ref: any) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

export default ClickOutsideRef