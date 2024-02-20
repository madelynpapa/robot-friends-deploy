import React from "react";
import CardList from "../Components/CardList";
import {robots} from "../robots";
import './App.css';
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ""
        };
    }

    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json();
        })
        .then((robot) => {
            console.log({robot});
            this.setState({robots: robot});
        });
    }
    
   render(){
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    return(!robots.length ? <h1>Loading</h1> : (
        <div className="tc">
            <h1 className = "f1">RobotFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
            </Scroll>
        </div>
    ));
}
}
export default App;