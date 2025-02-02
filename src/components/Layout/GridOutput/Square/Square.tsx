import React, { Component } from 'react';

import './Square.less';

interface Props {
    squareNumber: number;
    size: string;
}

class Square extends Component<Props> {
    state = {
        isNumberVisible: false
    }

    showNumberHandler = () => this.setState((prevState: {isNumberVisible: boolean}) => ({
        isNumberVisible: !prevState.isNumberVisible
    }));

    render() {
        return (
            <div className={"Square" + ' ' + (this.props.size)} onClick={this.showNumberHandler}>
                <p className={"Number" + ' ' + (this.state.isNumberVisible ? "Show" : "Hidden")} >{this.props.squareNumber}</p>
            </div>
        )
    }
}

export default Square;