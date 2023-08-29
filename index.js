const { createLogger } = require('redux-logger')
const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log('Initial state ', store.getState())

// const unsubscribe = store.subscribe(() => {
//     console.log('Updated state ', store.getState())
// })
const unsubscribe = store.subscribe(() => {})
// with middleware createLogger

store.dispatch(cakeActions.ordered())
// ====== with Middleware ======
// action cake/ordered @ 18:45:25.980
//    prev state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'cake/ordered', payload: undefined }
//    next state { cake: { numOfCakes: 9 }, icecream: { numOfIcecreams: 20 } }
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))
// ====== with Middleware ======
// action cake/restocked @ 18:45:26.016
//    prev state { cake: { numOfCakes: 7 }, icecream: { numOfIcecreams: 20 } }
//    action     { type: 'cake/restocked', payload: 3 }
//    next state { cake: { numOfCakes: 10 }, icecream: { numOfIcecreams: 20 } }

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(2))

unsubscribe()