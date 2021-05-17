import React from "react";

export class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter : 0,
        }
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        this.setState({counter: this.state.counter+1})
    }

    render(){
        return <button
            onClick={this.handlerClick}
            >
                Эту кнопку нажали {this.state.counter} раз
            </button>
    }
}

export default App2;