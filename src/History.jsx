import React, {Component} from 'react';

class History extends Component {
    render() {
        return(
            <div className="History">
                {this.props.history.map(result => <div> <div>{result.operation}</div>  <div>{result.result}</div> </div>  )}
            </div>
        )
    }
}

export default History;