import _ from 'lodash'

var store = {
    state: {},
    listeners: [],
    notify: function() {
        this.listeners.forEach(listener => listener(this.state))
    },
    listen: function(listener) { this.listeners.push(listener) },
    unlisten: function(listener) {
        this.listeners = this.listeners.filter(l => l !== listener)
    },
    set: function(path, value) {
        try {
            _.set(this.state, path, value)
            this.notify()
        }
        catch (e) {
            console.error(`Failed to set path ${path} to value ${value}`, e)
        }
    },
    get: function(path) {
        if (!path) return this.state

        try {
            return _.get(this.state, path)
        }
        catch (e) {
            console.error(`Failed to get path ${path}`, e)
        }
    },
}
export default store
