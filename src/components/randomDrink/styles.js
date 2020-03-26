import { makeStyles, withTheme } from '@material-ui/core/styles'
import PaintStroke from '../../img/paintStroke.png'
export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'black',
		boxShadow: '0 0 10px black',
	},
	loading: {
		background: 'black',
		color: 'White',
		fontFamily: 'Permanent Marker',
		width: '100vw',
		height: '100vh',
		marginTop: '-1vw',
		textAlign: 'center',
		fontSize: '3em',
	},
	titleContainer: { width: '100%' },
	title: {
		color: 'white',
		padding: theme.spacing(10),
		textAlign: 'center',
		fontSize: '3em',
		textShadow: '0 0 1em black',
		margin: '0 auto',
		fontFamily: 'Permanent Marker',
		backgroundImage: `url(${PaintStroke})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	itemTitle: {
		fontSize: '100%',
		color: 'white',
		fontFamily: 'Permanent Marker',
	},
	descContainer: {
		alignItems: 'center',
		marginBottom: '2em',
	},
	desc: {
		fontFamily: 'Permanent Marker',
		color: 'white',
		fontSize: '1.5em',
		padding: '.5em',
		width: '90%',
		margin: '0 auto',
	},
	img: {
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
		boxShadow: '0 0 1em black',
	},
	ingredients: {
		justifyContent: 'space-around',
		marginBottom: '1em',
		width: '100%',
	},
	item: {
		padding: '1em',
		marginBottom: '10px',
	},
}))
