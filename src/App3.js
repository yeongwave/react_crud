import React, { Component } from 'react';

class App3 extends Component {
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
        brdwriter: 'Pak',
        brdtitle: 'django django django!',
        brddate: new Date()
      }
    ]
  }
    handleSaveData = (data) => {
      this.setState({
        maxNo: this.state.maxNo+1,
        boards: this.state.boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data })
      });
    }
  

  render() {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData = {this.handleSaveData} />
        <table board='1'>
          <tbody>
            <tr align="center">
              <td width='50'>No.</td>
              <td width='300'>Title</td>
              <td width='100'>Name</td>
              <td width='100'>Date</td>
            </tr>
            {
              boards.map(function(row){
                return (<BoardItem key={row.brdno} row={row} />);
              })
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

class BoardForm extends React.Component {
  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({});
  }
  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" name="brdtitle" onChange={this.handleChange}/>
        <input placeholder="name" name="brdwriter" onChange={this.handleChange}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default App3;