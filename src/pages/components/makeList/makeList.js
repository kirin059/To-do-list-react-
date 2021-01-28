import React from "react";
import "./makeList.scss";

class makeList extends React.Component {
    render() {
        return (
            <div className="makeList">
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
            </div>
        );
    }
}

export default makeList;
