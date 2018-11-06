import React, { Component } from 'react';
import BoardForm from './App6_BoardForm';
import BoardItem from './App6_BoardItem';

class App6 extends Component {
    
  state = {
    maxNo: 3,
    boards: [
      {
        brdno: 1,
        brdwriter: 'yeongjo',
        brdtitle: 'react react react!',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'pak',
        brdtitle: 'django django django!',
        brddate: new Date()
      }
    ],
    selectedBoard: {}
  }
    
  handleSaveData = (data) => {
    if (!data.brdno) {
      this.setState({
        maxNo: this.state.maxNo+1,
        boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data }),
        selectedBoard: {}
      });
    } else {
      this.setState({
        boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
        selectedBoard: {}
      })
    }
  }
    
  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    })
  }
    
  handleSelectRow = (row) => {
    this.setState({selectedBoard:row});
  }
    
  render() {
    const { boards, selectedBoard } = this.state;

    return (
      <div>
        <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
        <table border="1">
          <tbody>
          <tr align="center">
            <td width="50">No.</td>
            <td width="300">Title</td>
            <td width="100">Name</td>
            <td width="100">Date</td>
          </tr>
          {
            boards.map(row =>
              (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
            )
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App6;