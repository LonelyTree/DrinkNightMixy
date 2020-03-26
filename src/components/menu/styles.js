import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
	root: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		background: 'black',
		paddingBottom: '2em',
		margin: '0 auto',
		boxShadow: '0 0 10px black',
	},
	title: {
		fontFamily: 'Permanent Marker',
		color: '#ff385b',
		fontSize: '3em',
		textAlign: 'center',
	},

	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	nav: {
		justifyContent: 'space-around',
		borderRadius: '2em',
		padding: '1em',
	},
	icon: {
		color: 'black',
	},
}))
