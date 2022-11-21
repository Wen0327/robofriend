import React, { Component } from "react";
import SearchBox from '../Component/Searchbox'
import CardList from "../Component/CardList";
import { robots } from "../robots";
import Scroll from "../Component/Scroll";

// class > render
// obj要寫this.

class App extends Component {
    constructor() {
        super()
        // 看誰變ㄌ
        this.state = {
            robots:[],
            searchfield: ''
        }
        // console.log('Constructor');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => 
            response.json()).then(users => this.setState({robots:robots}));
        // console.log('componentDidMount');
    }

    // A
    // filterRobot裡的this 指向search box 不是指向app , 用 => 讓路徑變成功
    search_Change = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filterRobot = this.state.robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        // console.log('render');
        return (
            <div className="tc mb3">
                <h1 className="cyberh1 f1">RoboFriends</h1>
                {/* B/ A */}
                <SearchBox search_Change={this.search_Change} />
                <Scroll>
                <CardList robots={filterRobot} />
                </Scroll>
            </div>
        );
    }
}

export default App;