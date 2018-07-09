import React, { Component } from 'react';
import { Task } from './Task';
import { Card } from 'react-materialize';

import styles from './TaskContainer.css';

export class TaskContainer extends Component {
    render() {

        let {id, name, tasks} = this.props;

        return (
            <Card className="task-container">
                <h1>{id}:{name}</h1>
                <div>
                    {
                        tasks.map(({id, text, completed}) => 
                            <Task key={id} id={id} text={text} completedBool={completed}/>
                        )
                    }
                </div>
            </Card>
        );
    }
}
