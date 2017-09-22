import React from 'react'
import { back, toggleDrawer } from '../actions'

function DrawerToggleButton() {
    return <button onClick={toggleDrawer}>Drawer</button>
}

function BackButton() {
    return <button onClick={back}>Back</button>
}

export default function Nav(props) {
    var { destination, toggleDrawer, back } = props

    return <div style={{ position: "fixed", top: "30px", left: "30px" }}>
            {destination ? <BackButton/> : <DrawerToggleButton/>}
        </div>
}
