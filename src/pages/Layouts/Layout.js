import React from 'react'
import { Navigation } from "components"

const Layout = (props) => {
    return (
        <div>
            <Navigation />
            {props.children}
        </div>
    )
}

export default Layout
