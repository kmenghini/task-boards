import React, { Component } from 'react';
import {Chip} from 'react-materialize';

export class Task extends Component {
    render() {
        const { id, text, completedBool } = this.props;
        return (
            <div className="task">
                <Chip>{id}:{text},{completedBool}</Chip>
            </div>
        );
    }
}
