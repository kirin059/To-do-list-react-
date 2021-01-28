import React from "react";
import "./writeList.scss";

class writeList extends React.Component {
    render() {
        return (
            <div className="writeList">
                <input type="text" placeholder="Write your list to do..." />
                <button>Add</button>
            </div>
        );
    }
}

export default writeList;

// value: 인풋의 내용

// onCreate: 버튼이 클릭될 때 실행되는 함수

// onChange: 인풋 내용이 변경될 때 실행되는 함수

// onKeyPress: 인풋에서 키를 입력될때 실행되는 함수,
//             Enter가 눌러졌을때 onCreate 한 것과 동일한 작업을 하게된다.

// value={value} onChange={onChange} onKeyPress={onKeyPress}
// onClick={onCreate}
