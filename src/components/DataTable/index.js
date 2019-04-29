import React, { Component } from 'react';
import ReactJson from 'react-json-view';

import { JsonToTable } from 'react-json-to-table';

import data from '../../data.json';

const FilterableTable = require('react-filterable-table');


const DEFAULT_STATE = {
}

const fields = [
    { name: 'name', displayName: 'Name', inputFilterable: true, sortable: true },
    { name: 'spells', displayName: 'Spells', inputFilterable: true, sortable: true }
]

class DataTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ...DEFAULT_STATE
        }
    }

    render() {
        return (
            <div>
                {/* <ReactJson src={data} /> */}
                {/* <JsonToTable json={data} /> */}
                <FilterableTable
                    namespace='monsters'
                    initialSort='name'
                    data={data}
                    fields={fields}
                    noRecordsMessage='No monster to display'
                    noFilteredRecordsMessage='No monster found'
                />
            </div>
        )
    }

}

export default DataTable;