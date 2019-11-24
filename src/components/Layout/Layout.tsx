import React, { Component } from 'react';

import './Layout.less';
import GridInput from './GridInput/GridInput';
import GridOutput from './GridOutput/GridOutput';
import {GridDataModel} from '../../class/GridDataModel';

class Layout extends Component {
    state = {
        col: 10,
        row: 10,
        size: 'small'
    }

    gridOptionsHanlder = (selectedValues: GridDataModel) => {
        console.log(selectedValues);
            this.setState(selectedValues, () => {console.log(this.state);});
    };

    render() {
        return (
            <div className="Layout">
                <GridInput gridOptions={this.gridOptionsHanlder} />
                <GridOutput columns={this.state.col} rows={this.state.row} size={this.state.size} />
            </div>
        )
    }
}

export default Layout