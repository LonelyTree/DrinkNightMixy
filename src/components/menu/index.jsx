import React from 'react'
import Grid from '@material-ui/core/Grid'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { useStyles } from './styles'

export default function Menu() {
	const [value, setValue] = React.useState(0)
	const classes = useStyles()
	function refreshPage() {
		window.location.reload()
	}
	return (
		<Grid container spacing={1} className={classes.root}>
			<h1 className={classes.title}>PARTY NIGHT MIXY</h1>
			<BottomNavigation
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
				showLabels
				className={classes.nav}
			>
				<BottomNavigationAction
					className={classes.icon}
					label='Random Drink'
					icon={<LocalBarIcon style={{ color: '#ff385b' }} />}
					onClick={refreshPage}
				/>
			</BottomNavigation>
		</Grid>
	)
}
