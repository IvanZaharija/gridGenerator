import React, { Component } from 'react';
import {GridDataModel} from '../../../class/GridDataModel';

import  './GridInput.less';

interface Props {
    gridOptions: (options: GridDataModel) => void;
}

const ROW = "row";

class GridInput extends Component <Props> {
    state = {
        columnInput: 0,
        rowInput: 0,
        sizeInput: 'small'
    }

    submitHandler = () => {
      /*  var optionValues  = {
            col: 0,
            row: 0,
            size: ' '
        }

        optionValues.col = this.state.columnInput;
        optionValues.row = this.state.rowInput;
        optionValues.size = this.state.sizeInput;*/

        let gridDataModel = new GridDataModel(+this.state.columnInput, +this.state.rowInput, this.state.sizeInput);
        
        this.props.gridOptions(gridDataModel);
    }

    inputOnChangeHandler = (valueName: string, event: React.ChangeEvent<HTMLInputElement>) => {
        switch(valueName) {
            case "col": //todo: better names and use constants
                this.setState({columnInput: event.target.value})
                break;

            case ROW:
                this.setState({rowInput: event.target.value})
                break;
        }
    }

    selectOnChangeHanlder = (valueName: string, value: string) => {
        if (valueName === "size")
        this.setState({sizeInput: value})
    }

    render() {
        return (


            <div className="GridInput">
                <p className="InputInstructions">
                    For generating the Grid please insert values for Columns and Rows, 
                    select the size of Blocks and then press "Generate".
                </p>
               {/* TODOOOOOO jedna funkcija za ve */}
                <div className="InputForm">
                    <label>
                        Columns:
                        <input type="number" name="column" value={this.state.columnInput} onChange={(event) => this.inputOnChangeHandler("col", event)}/>
                    </label>
                    <label>
                        Rows:
                        <input type="number" name="row" value={this.state.rowInput} onChange={(event) => this.inputOnChangeHandler(ROW, event)}/>
                    </label>
                    <label>
                        Block size:
                        <select name="size" value={this.state.sizeInput } onChange={(event) => this.selectOnChangeHanlder("size", event.target.value)}>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </label>
                    <button className="SubmitButton"  onClick={ () => this.submitHandler()}>  Generate</button>
                </div>
            </div>
        )
    }
}

export default GridInput