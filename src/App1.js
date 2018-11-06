import React, { Component } from 'react';

class App extends Component {
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
    const list = boards.map(function(row){
      return row.brdno + " " + row.brdwriter + " " + row.brdtitle ;
    });
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default App;