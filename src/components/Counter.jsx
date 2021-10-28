import React, { Component } from 'react'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }

    handleChange = async (operation) => {
        console.log(operation);
        let newCount = null;
        switch(operation){
            case "plus":
                newCount = this.state.count + 1;
                break;
            case "moins":
                newCount = this.state.count - 1;
                break;
            case "zero":
                newCount = 0;
                break;
            default:
                newCount = 0;
        }
        await this.setState({count: newCount});
        //appel à une méthode de App
        this.props.handlePlusApp(this.state.count);
    };

    render(){
        return(
            <div>
            <span>{this.state.count}</span>
            <button onClick={() => this.handleChange("moins")}>-</button>
            <button onClick={() => this.handleChange("plus")}>+</button>
            <button onClick={() => this.handleChange("zero")}>Risette</button>
            </div>
        );
    }
}

export default Counter;