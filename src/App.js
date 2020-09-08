import React, {Component} from 'react';
import { connect } from 'react-redux'
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import './App.css';

import {setSearchField, requestRobots} from './actions.js';

const mapStateToProps=(state)=>{
    return{
        searchField: state.serachRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error:state.requestRobots.error

    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onSearchChange: (event)=> dispatch (setSearchField(event.target.value)),
        onRequestRobots:()=> dispatch(requestRobots())
    }
}


class App extends Component {
   
     componentDidMount(){
        this.props.onRequestRobots();
    }

    render (){
        const {searchField, onSearchChange, robots, isPending}= this.props;
        const filterRobots= robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending?
             <h1>Loading</h1>:
            (
            <div className='tc'>
            <h1 className='title'> Robofriends </h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filterRobots}/>
            </Scroll>
            </div>
            )

}
} 
export default connect(mapStateToProps, mapDispatchToProps)(App)