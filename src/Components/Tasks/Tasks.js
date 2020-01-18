import React from 'react';
import List from '@material-ui/core/List';
import RootRef from '@material-ui/core/RootRef';
import { makeStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task/Task';

const useStyles = makeStyles(({ spacing }) => ({
	root: {
		marginTop: spacing(3),
	}
}));

const Tasks = ({ tasks: { columns, active, tasks } }) => {
	const classes = useStyles();
	const taskList = columns[active].taskIds.map((id, i) => <Task index={i} key={id} id={id} text={tasks[id].content} />);
	return (
		<Droppable droppableId={'inner'}>
			{({ droppableProps, innerRef, placeholder }) => (
				<RootRef rootRef={innerRef}>
					<List
						className={classes.root}
						{...droppableProps}
					>
						{taskList}
						{placeholder}
					</List>
				</RootRef>
			)}
		</Droppable>

	);
};

export default Tasks;




