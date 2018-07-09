import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { Board } from './components/Board';
import axios from 'axios';
import { Input } from 'react-materialize';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: 'kmenghini',
          boards: [],
          selectedBoard: null,
          containers: []
          /* 
          [
            container1 {
              id:
              name:
              tasks: [{},{},{}]
            },
            container2 {
              id:
              name:
              tasks: [{},{},{}]
            }  
          ]
          */
      }
  }

  componentDidMount() {
    //axios fetch from server to get boards for this user
    axios.get(`/user/${this.state.user}/all`)
        .then((response) => this.setState({boards: response.data}))
        .catch((error) => console.log('ERROR', error))
  }

  handleBoardChange(event) {
    var boardNumber = event.target.value;

    this.setState({selectedBoard: parseInt(boardNumber)});

    //get all containers in the selected board and all the tasks in each of those containers
    axios.get(`/board/${boardNumber}`)
      .then((response) => {
        var promises = [];
        response.data.forEach(container => {
          promises.push(axios.get(`/container/${container.id}`)
          .then(response => ({
              id: container.id,
              name: container.name,
              tasks: response.data
            })
          ))
        });
        axios.all(promises).then((response) => {
          this.setState({containers: response})
        })
      })
      .catch((error) => console.log('ERROR', error))
   }

  render() {
    let {user, boards, selectedBoard, containers} = this.state;

    let boardComponent = selectedBoard ? 
      <Board containers={containers}/> : null;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Task Boards</h1>
        </header>
        <h3>{user}'s Boards: </h3>
        <div className="board-selection-input">
          <Input s={6} type="select" label="Your Boards:" defaultValue="0" onChange={this.handleBoardChange.bind(this)}>
            <option value="0">Select a board...</option>
            {
              boards.map(({id, name, is_favorite}) => <option key={id} value={id}>{name}{is_favorite ? ' \u2764' : null}</option>)
            }
          </Input>
        </div>
        {boardComponent}
      </div>
    );
  }
}

export default App;
