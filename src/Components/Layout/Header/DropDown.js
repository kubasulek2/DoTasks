import React, {Fragment, useState} from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(({ palette, breakpoints,spacing}) => ({
	sortButton:{
		color: palette.text.white,
		textTransform: 'initial',
		fontWeight: 'bold',
		marginRight: spacing(2)
	},
	paper: {
		top: '64px !important',
		[breakpoints.down('xs')]: {
			top: '59px !important',
		}
	},
	list: {
		padding: 4
	},
	listItem: {
		fontSize: 15,
		color: palette.text.secondary
	}
}));

const DropDown = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<Button
				aria-label='sort'
				aria-controls='sort-menu'
				aria-haspopup='true'
				onClick={handleClick}
				endIcon={<SortIcon />}
				className={classes.sortButton}
			>
				Sort
			</Button>
			<Menu
				id='sort-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				classes={{
					paper: classes.paper,
					list: classes.list,
				}}
			>
				<MenuItem onClick={handleClose} className={classes.listItem}>By name</MenuItem>
				<MenuItem onClick={handleClose} className={classes.listItem}>By date</MenuItem>
				<MenuItem onClick={handleClose} className={classes.listItem}>By priority</MenuItem>
			</Menu>
		</Fragment>
	);
};

export default DropDown;
