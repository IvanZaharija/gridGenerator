import React, { Component } from 'react'

import  './GridOutput.less';
import Square from './Square/Square'

interface Props {
    columns: number,
    rows: number,
    size: string,
}

class Output extends Component<Props> {
  
    generateUniqueRandomNumber = (uniqueArray:number[],length:number) => {
        let randomIndex = Math.floor(Math.random() * length);
        let num = uniqueArray[randomIndex];
        uniqueArray.splice(randomIndex, 1)
        return num;
    }
  
    render(){
        let length =  this.props.rows * this.props.columns
        var uniqueArray = Array.from(Array(this.props.rows * this.props.columns).keys())

        var rows = [];
        for(let i = 0; i<this.props.rows; i++){
             var column = [];
            for(let j = 0; j<this.props.columns; j++){
                var square =  <Square 
                key={i*10+j}    
                squareNumber={this.generateUniqueRandomNumber(uniqueArray,length--)}
                size={this.props.size} />;
                column.push(square);
            }
            rows.push(<div key={i}> {column} </div>)
        }
        return (
            <div className="GridOutput">
                {rows}
            </div>
        )
    }
}

export default Output