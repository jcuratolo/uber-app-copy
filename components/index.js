import React from 'react'

export function Row(props) {
    var styles = {
        display: "table",
        width: "100%",
        "tableLayout": "fixed",
        borderSpacing: props.spacing || 0
    }

    return <div style={styles}>{props.children}</div>
}

export function Column(props) {
    var styles = {
        display: "table-cell",
        width: props.width
    }

    return <div style={styles}>{props.children}</div>
}
