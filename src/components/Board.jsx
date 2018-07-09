import React, { Component } from 'react';
import { TaskContainer } from './TaskContainer';

import styles from './Board.css';

export class Board extends Component {

    render() {

        let {containers} = this.props;

        return (
            <div className="board">
                <div className="task-container-enclosure">
                    {
                        containers.map(({id, name, tasks}) => 
                            <TaskContainer 
                                key={id}
                                id={id} 
                                name={name} 
                                tasks={tasks}
                            />
                        )
                    }
                </div>

            </div>
        );
    }
}