import React, { Component } from "react";
import "./toDoList.scss";

// import writeList from "../components/writeList/writeList";
import makeList from "../components/makeList/makeList";

class toDoList extends Component {
    constructor() {
        super();
        this.state = {
            makeList: [
                {
                    id: 1,
                    input: "",
                    done: false,
                    del: false,
                },
            ],
        };

        makeElement = (e) => {
            this.setState({
                input: e.target.value,
            });
        };
    }
    render() {
        return (
            <main className="toDoList">
                <h1>To Do List</h1>
                <div className="writeList">
                    <input type="text" value={this.state.input} placeholder="Write your list to do..." />
                    <button onClick={this.state.makeElement}>Add</button>
                </div>
                <ul>
                    {this.state.makeList.map((comment) => {
                        return (
                            <li>
                                <div>
                                    <button className="checkBtn">
                                        <image src="../../../images/checkBtn.png" />
                                    </button>
                                    <button className="delBtn">
                                        <image src="../../../images/delBtn.png" />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </main>
        );
    }
}

export default toDoList;
