import store from './store'
import { hashHistory } from 'react-router'

function selectService(name, price) {
    store.set("service", { name, price })
}

function selectDestination(destination) {
    store.set("destination", destination)
}

function back() {
    if (store.state.service) {
        store.set("service", null)
        hashHistory.push("/book")
        return
    }

    if (store.state.destination) {
        store.set("destination", null)
        hashHistory.push("/")
        return
    }
}

function toggleDrawer() {
    store.set("shouldShowDrawer", !store.state.shouldShowDrawer)
}

export {
    selectService,
    selectDestination,
    back,
    toggleDrawer,
}
