import React from 'react';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import NoDragTask from '../Task/NoDragTask';
import NotFound from '../../UI/NotFound';

const useStyles = makeStyles(({ spacing }) => ({
	root: {
		marginTop: spacing(1),
	}
}));

const Tasks = ({ tasks }) => {
	const classes = useStyles();

	const taskList = Object.values(tasks).filter(task => task.favorite).map(task => (
		<NoDragTask
			key={task.id}
			id={task.id}
			text={task.content}
			favorite={task.favorite}
			deadline={task.deadline}
			attachments={task.attachments}
		/>
	));

	return (
		taskList.length
			? <List className={classes.root} >{taskList}</List>
			: <NotFound />
	);
};

export default Tasks;
