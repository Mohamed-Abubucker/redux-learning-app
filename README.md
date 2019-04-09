NOTES ABOUT REDUX TERMs
1. store - it will hold the states of the application.
2. rootReducer -  it will have all reducers.
3. reducers - each reducers will return its own state. base on the actions, it will return the new state.
4. combineReducers - this method will merge all the reducers together and provide root state.
5. actions - actions are the methods which will be triggered to update/modify states.
6. dispatch - actions will be dispatched to reducers with the help of dispatch method.
7. provider - provider is a component given  by react-redux package, it should be the parent of the all componets in an application to have redux.
7. connect - it the method to connect a component to connect with store.
it will have 2 params,
    a. mapStateToProps:
       this method will be triggered after the state changes.
       store.getState() is its equivalent
    b. mapDispatchToProps 
       this is to merge actions into component props.
       store.dispatch is its equivalent
8. actionTypes - > these are the contants to define action type and used inside actions and reducer functions.


