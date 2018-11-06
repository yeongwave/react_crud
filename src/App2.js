import React, { Component } from 'react';

class App2 extends Component {
  state = {
    boards: [
      {
        brdno: 1,
        brdwriter: 'yeongjo',
        brdtitle: 'react react react!',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'Pak',
        brdtitle: 'django django django!',
        brddate: new Date()
      }
    ]
  }

  render() {
    const { boards } = this.state;

    return (
      <div>
        <table board="1">
          <tbody>
            <tr align="center">
              <td width='50'>No.</td>
              <td width='300'>Title</td>
              <td width='100'>Name</td>
              <td width='100'>Date</td>
            </tr>
            {
              boards.map(row =>
                (<BoardItem key={row.brdno} row={row} />)
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

class BoardItem extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.row.brdno}</td>
        <td>{this.props.row.brdtitle}</td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
      </tr>
    );
  } 
}

export default App2;