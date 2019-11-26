import React, { Component } from 'react';
import {GridDataModel} from '../../../class/GridDataModel';

import  './GridInput.less';
import Text from './TextSource.json'

interface Props {
    gridOptions: (options: GridDataModel) => void;
}

const ROW = "row";
const COL = "column";
const SIZE = "size";
const MIN = 0
const MAX = 100

class GridInput extends Component <Props> {
    state = {
        columnInputData: 5,
        rowInputData: 5,
        sizeInputData: 'Small',
        warningText: ' ' 
    }

    submitHandler = () => {
            let product = this.state.columnInputData * this.state.rowInputData;
        if(   product > MAX){
            this.setState({warningText: Text.warningTotalProductSize})
            return
        }
        else if( product < MIN){
            this.setState({warningText: Text.warningNegativeProduct})
            return
        }
        else{  
            this.setState({warningText: " "})
            let gridDataModel = new GridDataModel(+this.state.columnInputData, +this.state.rowInputData, this.state.sizeInputData);     
            this.props.gridOptions(gridDataModel);
            console.log(gridDataModel);
        }
    }

    inputOnChangeHandler = (valueName: string, value: string) => {
        switch(valueName) {
            case COL:
                this.setState({columnInputData: value})
                break;
            case ROW:
                this.setState({rowInputData: value})
                break;
            case SIZE:
                this.setState({sizeInputData: value})
        }
    }

    render() {
        return (
                
            <div className="GridInput">
                <p className="InputInstructions"> 
                    {Text.instructions} 
                </p>
                <div className="Input">
                    <div className="DataCollecting" >
                        <label>
                            Columns:
                            <input type="number" name="column" min={0} max={99} maxLength={2}  autoComplete="off" value={this.state.columnInputData}
                                onChange={(event) => this.inputOnChangeHandler(COL, event.target.value)}/>
                        </label>
                        <label>
                            Rows:
                            <input type="number" name="row" min={0} max={99} maxLength={2}  autoComplete="off" value={this.state.rowInputData} 
                                onChange={(event) => this.inputOnChangeHandler(ROW, event.target.value)}/>
                        </label>
                        <label>
                            Block size:
                            <select name="size" value={this.state.sizeInputData } 
                                onChange={(event) => this.inputOnChangeHandler(SIZE, event.target.value)}>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                            </select>
                        </label>
                    </div>
                    <button className="SubmitButton"  onClick={() => this.submitHandler()}>  Generate</button>
                    <p className="WarningMessage">{this.state.warningText}</p>
                </div>

            </div>
        )
    }
}

export default GridInput