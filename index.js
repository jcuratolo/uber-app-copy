import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import config from './config'
import store from './store'

import Nav from './components/nav'
import Map from './components/map'

// VIEWS
import App from './views/app'
import Home from './views/home'
import Book from './views/book'
import Ride from './views/ride'

//hot module replacement requires root component to extend React.Component:
//https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md


// <Nav destination={destination} />
class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isSearchPanelOpen: false
        }
        store.state = this.state
        store.listen(this.setState.bind(this))
        window.store = store

    }

    componentDidMount() {
        window.layout = this
    }

    render() {
        var destination = this.state.destination
        var selectedService = this.state.selectedService
        var services = this.props.config.services

        var rootStyles = {
            height: '100%',
            width: '100%'
        }

        return (
            <div style={rootStyles}>

                <Router history={hashHistory}>
                    <Route 
                        name="home" 
                        path="/" 
                        component={Home}/>
                    <Route 
                        name="book" 
                        path="/book" 
                        component={_=> {
                            return <Book services={services} 
                                selectedService={selectedService}/>
                        }} />
                    <Route 
                        name="ride"
                        path="/ride"
                        component={_=> {
                            return <Ride 
                                destination={destination}
                                selectService={selectedService}/>
                        }}/>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(
    <Layout config={config} />,
    document.getElementById('main')
)
