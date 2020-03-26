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
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
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
		maxWidth: '70%',
		margin: '0 auto',
	},
	img: {
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
		boxShadow: '0 0 1em #484848',
	},
	ingredients: {
		justifyContent: 'space-around',
		marginBottom: '1em',
		maxWidth: '70%',
	},
	item: {
		padding: '1em',
		marginBottom: '10px',
	},
}))
