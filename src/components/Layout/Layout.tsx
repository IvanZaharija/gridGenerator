import React, { Component } from 'react';

import './Layout.less';
import GridInput from './GridInput/GridInput';
import GridOutput from './GridOutput/GridOutput';
import {GridDataModel} from '../../class/GridDataModel';

class Layout extends Component {
    state = {
        columnValue: 5,
        rowValue: 5,
        sizeValue: 'Small'
    }

    gridOptionsHandler = (selectedValues: GridDataModel) => {
            this.setState(selectedValues);
    };

    render() {
        return (
            <div className="Layout">
                <GridInput gridOptions={this.gridOptionsHandler} />
                <GridOutput columns={this.state.columnValue} rows={this.state.rowValue} size={this.state.sizeValue} />
            </div>
        )
    }
}

export default Layout