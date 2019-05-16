import React, {Component} from 'react';

class Input extends Component {

    render(){
        return(
            <div className="input">
            <input value={this.props.value} readOnly></input>
            </div>
        )
    }
}

export default Input;