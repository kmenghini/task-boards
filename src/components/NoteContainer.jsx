import React, { Component } from 'react';
import { Note } from './Note';

export class NoteContainer extends Component {
    render() {
        return (
            <div>
                <div className="note-container">
                    <h1>Container</h1>
                </div>
                <div>
                    <Note />
                    <Note />
                    <Note />
                </div>
            </div>
        );
    }
}
export default NoteContainer;