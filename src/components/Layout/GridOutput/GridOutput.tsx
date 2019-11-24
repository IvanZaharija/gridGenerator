import React, { Component } from 'react'

import  './GridOutput.less';
import Square from './Square/Square'
import { number, element, array } from 'prop-types';

interface Props {
    columns: number,
    rows: number,
    size: string,
}

class Output extends Component<Props> {
    /*state = {
        uniqueArray: Array.from(Array(10).keys()),
        length: this.props.columns * this.props.columns
    }*/


    // generateRandomNumbers = (length: number) => {
    //     var randomArray = new Array(length) //todo: maybe use Saet?

    //     for (let i = 0; i< length; i++){
    //         let newNumber = Math.floor(Math.random() * length + 1);
    //         while( randomArray.includes(newNumber)){
    //             newNumber = Math.floor(Math.random() * length + 1);
    //         }
    //             randomArray[i] = newNumber
    //     }
    //     return randomArray
    // }
    // generateArray = () => {
    //     this.setState({
    //         uniqueArray: Array.from(Array(10).keys())
    //     })
    // }

    generateUniqueRandomNumber = (uniqueArray:number[],length:number) => {
        let randomIndex = Math.floor(Math.random() * length);
        let num = uniqueArray[randomIndex];
        uniqueArray.splice(randomIndex, 1)
        return num;
    }
    

    render(){
        let length =  this.props.rows * this.props.columns
        var uniqueArray = Array.from(Array(this.props.rows * this.props.columns).keys())

        // var sum = this.props.columns * this.props.rows
        // var list= new Array(sum)
        // var randomNumbers = [];
        // randomNumbers = this.generateRandomNumbers(sum)
        // var k = 0;
        // for ( var i = 0; i < this.props.rows; i++){
        //     list[i] = [];

        //     for ( var j = 0; j < this.props.columns; j++){
        //         list[i][j] = randomNumbers[k++]
        //     }            
        // }

        var rows = [];
        for(let i = 0; i<this.props.rows; i++){
             var column = [];
            for(let j = 0; j<this.props.columns; j++){
                var square =  <Square 
                key={i*10+j}    
                squareNumber={this.generateUniqueRandomNumber(uniqueArray,length--)}
                size={"Small"}  />;
                column.push(square);
            }
            rows.push(<div key={i}> {column} </div>)
        }
        return (
            <div className="Grid">
                {rows}
            </div>
        )/*
    var retci = list.map((rowElementValues:[] , i:number) => {
            var column = rowElementValues.map((colElementValue: number, j: number) => {
                console.log();
                return ( 
                        <Square 
                            key={colElementValue}    
                            squareNumber={this.generateUniqueRandomNumber(uniqueArray,length--)}
                            size={"Small"}  />
                    );
            });
            return (
                <div key={i}> {column} </div>
             );  
        });

        return (
            <div className="Grid">
                {rows}
            </div>
        )*/
    }
}

export default Output