import React, { Component } from 'react';

class App5 extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
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
      let boards = this.state.boards;
      if (data.brdno === null || data.brdno === '' || data.brdno === undefined){
        this.setState({
          maxNo: this.state.maxNo+1,
          boards: boards.concat({ brdno: this.state.maxNo, brddate: new Date(), ...data })
        });
      } else {
        this.setState({
          boards: boards.map(row => data.brdno === row.brdno ? {...data}: row)
        })
      } 
    }

    handleRemove = (brdno) => {
      this.setState({
        boards: this.state.boards.filter(row => row.brdno !== brdno)
      });
    }
    handleSelectRow = (row) => {
      this.child.current.handleSelectRow(row);
    }

  render() {
    const { boards } = this.state;

    return (
      <div>
        <BoardForm onSaveData = {this.handleSaveData} ref={this.child} />
        <table board='1'>
          <tbody>
            <tr align="center">
              <td width='50'>No.</td>
              <td width='300'>Title</td>
              <td width='100'>Name</td>
              <td width='100'>Date</td>
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

class BoardItem extends React.Component {
  handleRemove = () => {
    const {row, onRemove } = this.props;
    onRemove(row.brdno);
  }
  handleSelectRow = () => {
    const { row, onSelectRow } = this.props;
    onSelectRow(row);
  }   
  render() {
    return(
      <tr>
        <td>{this.props.row.brdno}</td>
        <td><a onClick={this.handleSelectRow}>{this.props.row.brdtitle}</a></td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick={this.handleRemove}>delete</button></td>
      </tr>
    );
  } 
}

class BoardForm extends React.Component {
  state = {
    brdwriter: '',
    brdtitle: ''
  }

  handleSelectRow = (row) => {
    this.setState(row);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({
      brdno: '',
      brdwriter: '',
      brdtitle: ''
    });
  }
  render () {
    // console.log(this.props.row.brdno);
    return(
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" name="brdtitle" value={this.state.brdtitle} onChange={this.handleChange}/>
        <input placeholder="name" name="brdwriter" value={this.state.brdwriter} onChange={this.handleChange}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default App5;