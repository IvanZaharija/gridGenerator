import React, { Component } from 'react'

import './GridOutput.less';
import Square from './Square/Square'

interface Props {
    columns: number,
    rows: number,
    size: string,
}

class Output extends Component<Props> {

    generateUniqueRandomNumber = (uniqueArray: number[], length: number) => {
        let randomIndex = Math.floor(Math.random() * length);
        let uniqueNumber = uniqueArray[randomIndex];
        uniqueArray.splice(randomIndex, 1);
        return uniqueNumber;
    }

    render() {
        let length = this.props.rows * this.props.columns;
        let uniqueArray = Array.from(Array(length).keys());

        let gridRows = [];
        for (let i = 0; i < this.props.rows; i++) {
            let gridColumn = [];
            for (let j = 0; j < this.props.columns; j++) {
                gridColumn.push(
                    <Square
                        key={i * 10 + j}
                        squareNumber={this.generateUniqueRandomNumber(uniqueArray, length--)}
                        size={this.props.size} />
                );
            }
            gridRows.push(<div key={i}> {gridColumn} </div>)
        }
        return (
            <div className="GridOutput">
                {gridRows}
            </div>
        )
    }
}

export default Output;