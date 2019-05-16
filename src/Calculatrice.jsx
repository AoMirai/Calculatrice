import React, {Component} from 'react';

class Calculatrice extends Component {
    render() {
        return(
            <div className="Calculatrice">
                <div>
                    <button onClick={ () => {this.props.onClicNumbers(7)}}>7</button>
                    <button onClick={ () => {this.props.onClicNumbers(8)}}>8</button>
                    <button onClick={ () => {this.props.onClicNumbers(9)}}>9</button>
                    <button onClick={ () => {this.props.onClicNumbers('/')}}>÷</button>
                </div>
                <div>
                    <button onClick={ () => {this.props.onClicNumbers(4)}}>4</button>
                    <button onClick={ () => {this.props.onClicNumbers(5)}}>5</button>
                    <button onClick={ () => {this.props.onClicNumbers(6)}}>6</button>
                    <button onClick={ () => {this.props.onClicNumbers('*')}}>*</button>
                </div>
                <div>
                    <button onClick={ () => {this.props.onClicNumbers(1)}}>1</button>
                    <button onClick={ () => {this.props.onClicNumbers(2)}}>2</button>
                    <button onClick={ () => {this.props.onClicNumbers(3)}}>3</button>
                    <button onClick={ () => {this.props.onClicNumbers('-')}}>-</button>

                </div>
                <div>
                    <button onClick={ () => {this.props.onClicNumbers(0)}}>0</button>
                    <button onClick={this.props.onClickResult}>=</button>
                    <button onClick={ () => {this.props.onClicNumbers('+')}}>+</button>
                </div>
            </div>
        )
    }
}  

export default Calculatrice; 