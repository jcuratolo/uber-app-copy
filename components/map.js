import React from 'react'

import maximizer from './maximizer'

function map(props) {
    var { clientWidth, clientHeight } = document.documentElement
    var style = {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "-1",
        height: clientHeight,
        width: clientWidth,
        backgroundColor: "#eee"
    }

    return <div style={style}></div>

}

export default map
