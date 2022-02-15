import React from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

import { requestRobots, setSearchField } from '../actions';

//Tell me what state i need to listen to in the redux store and send to this App as props
//mapStateToProps is use by App, 
//so we actually says searchField is equal to the searchField state from the redux store that is
//from searchRobots reducer
const mapStateToProps = state => {
    return {
        //searchField: state.searchField
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

//Tell me what Dispatch(action) i need to listen to tell the redux store and send to it to the reducer
//mapDispatchToProps is used to send an action object to a reducer
//onSearchChange is a function that you want it to do something
//in this case, we want to dispatch an action to reducer so that reducer aware of it
//an action (setSearchField) is an object that is return from action.js setSearchField
// {
//     type: CHANGE_SEARCH_FIELD, //we use a const variable here instead of string directly as it will throw error if something is wrong, using string directly won't throw error if something is missed spell
//     payload: text
// }
//Then we do dispatch(action object here)
//the task received an event from the SearchBox input html tag which contain the text the user typed
const mapDispatchToProps = (dispatch) => {
    //we use return here as required by redux to return an object containing our actions
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        //onRequestRobots: () => requestRobots(dispatch)
        //thunkMiddleware is a middleware that wait and see if any action returns a function rather than object
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        //we can now use searchField, onSearchChange as a props taken from redux store
        //as defined in mapStateToProps, mapDispatchToProps
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return isPending ?
            <h1>Loading...</h1>
        :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

//connect is a higher order function that takes a function and return a modified function
//connect accepts two parameters, i.e mapStateToProps, mapDispatchToProps
//mapStateToProps, mapDispatchToProps is just a standard naming that redux use
//the following connect function says, subscribes App function to any state changes in the redux store
//so now App will know whenever a state is changed in the redux store
//then, we need to tell App, what states and/or Dispatch(action) we want you to listen to  
export default connect(mapStateToProps, mapDispatchToProps)(App);