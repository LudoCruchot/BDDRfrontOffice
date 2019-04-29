import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import DataTable from '../../components/DataTable';

import { simpleAction } from '../../actions/simpleActions';
import singe from '../../singe.png'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <DataTable />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
