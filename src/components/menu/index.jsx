import React from 'react'
import Grid from '@material-ui/core/Grid'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import MenuIcon from '@material-ui/icons/Menu'
import { useStyles } from './styles'

export default function Menu() {
	const [value, setValue] = React.useState(0)
	const classes = useStyles()
	return (
		<Grid container spacing={1} className={classes.root}>
			<h1>PARTY NIGHT MIXY</h1>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
				showLabels
				className={classes.nav}
			>
				<BottomNavigationAction
					className={classes.root}
					label='Random Drink'
					icon={<LocalBarIcon />}
				/>
			</BottomNavigation>
		</Grid>
	)
}
