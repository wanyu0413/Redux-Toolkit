const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const { getDefaultMiddleware } = require('@reduxjs/toolkit')

const logger = reduxLogger.createLogger

// we don't need combineReducers to combine 2 reducers, because configureStore will handle it under the hood
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // we append the logger middleware to the list of default middleware
})

module.exports = store