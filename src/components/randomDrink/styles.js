import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		padding: theme.spacing(5),
		fontSize: '1.5em',
		textAlign: 'center',
		color: theme.palette.text.primary,
		margin: '2em',
	},
	img: {
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
		border: 'black solid 5px',
	},
	ingredients: {
		border: 'black solid 5px',
		justifyContent: 'space-around',
	},
}))
