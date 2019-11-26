import React, { Component } from 'react';

import './Layout.less';
import GridInput from './GridInput/GridInput';
import GridOutput from './GridOutput/GridOutput';
import {GridDataModel} from '../../class/GridDataModel';

class Layout extends Component {
    state = {
        col: 5,
        row: 5,
        size: 'Small'
    }

    gridOptionsHanlder = (selectedValues: GridDataModel) => {
            this.setState(selectedValues);
            console.log(this.state);
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