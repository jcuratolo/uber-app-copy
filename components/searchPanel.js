import React from 'react'
import Geosuggest from 'react-geosuggest';
import classNames from 'classnames'

import store from '../store'

import { selectDestination } from '../actions'

// <Geosuggest
//     placeholder="Where To?"
//     radius="10"
//     inputClassName="search-input"
//     onSuggestSelect={selectDestination}/>

function toggleSearchPanel() {
    store.set("isSearchPanelOpen", !store.get("isSearchPanelOpen"))
}


class SearchPanel extends React.Component {
    constructor() {
        super()
        this.state = {}
        store.listen(this.setState.bind(this))
    }

    render() {
        var searchPanelClass = classNames("search-panel", {
            open: this.state.isSearchPanelOpen
        })

        return <div className={searchPanelClass}>
            <div className="search-form">
            <div className="search-group search-group-origin">
                <div className="search-group-icon"></div>
                <input type="text" 
                     className="search-input"
                     placeholder="Current Location" />
            </div>
            <div className="search-group">
                <div className="search-group-icon"></div>
                <input type="text"
                    onClick={toggleSearchPanel}
                    className="search-input"
                    placeholder="Where to?" />
            </div>
            </div>
        </div>
    }
}

export default SearchPanel
