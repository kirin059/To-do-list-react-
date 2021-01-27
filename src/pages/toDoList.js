import React, { Component } from "react";
import "./toDoList.scss";

class toDoList extends Component {
    constructor() {
        super();
        this.state = {
            li: false,
            checkBtn: false,
            delBtn: false,
        };
    }

    // state 객체의 list 생성하는 함수 >>> state 바꾸는 함수 (= setState)
    handleList = () => {
        // console.log("handleList 함수 연결 확인");
        this.setState({
            li: true,
            checkBtn: true,
            delBtn: true,
        });
    };

    render() {
        return (
            <div className="toDoList">
                <h1>To Do List</h1>
                <div class="writeList">
                    <input id="input" type="text" placeholder="Write your list to do..." />
                    <button id="btn" onClick={this.handleList}>
                        Add
                    </button>
                </div>
                <ul class="addList"></ul>
            </div>
        );
    }
}

export default toDoList;
