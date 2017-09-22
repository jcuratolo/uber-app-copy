import React from 'react'

export default function maximizer(component) {
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

    return function maximizedComponent(props) {
        return <component style={style} {...props}/>
    }
}
