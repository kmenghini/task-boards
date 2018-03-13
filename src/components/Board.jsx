import React, { Component } from 'react';
import { NoteContainer } from './NoteContainer';

export class Board extends Component {
    render() {
        return (
            <div>
                <div className="board">
                    <h1>Board goes here</h1>
                </div>
                <div>
                    <NoteContainer />
                    <NoteContainer />
                    <NoteContainer />
                </div>
            </div>
        );
    }
}
export default Board;