import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
	root: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	nav: {
		justifyContent: 'space-around',
	},
}))
