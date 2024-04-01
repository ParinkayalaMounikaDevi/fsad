import React,{Component} from "react";
class Display extends Component
{
    state = {
        index : 0,
    };
    function=()=>
    {
        this.setState({index: this.state.index + 1});
    }
    render()
    {
        return(
            <div>
                <button  onClick={this.function}>Click</button>
                <button >{this.state.index}</button>
            </div>
        );
    }
}
export default Display