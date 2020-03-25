import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { useStyles } from './styles'

const RANDOM_DRINK = gql`
	query {
		getRandomDrink {
			desc
			name
			id
			img
			ingredients
			measurement
		}
	}
`
export function RandomDrink() {
	const classes = useStyles()
	return (
		<Query query={RANDOM_DRINK}>
			{({ loading, error, data }) => {
				if (loading) return <p>Loading...</p>
				if (error) return <p>Error :(</p>
				const mappedIngredients = data.getRandomDrink.ingredients.map(
					(ingredient) => {
						return <Paper key={ingredient}>{ingredient}</Paper>
					}
				)
				const mappedAmounts = data.getRandomDrink.measurement.map((measure) => {
					return <Paper>{measure}</Paper>
				})

				return (
					<Grid container id={data.getRandomDrink.id} className={classes.root}>
						<Grid item className={classes.title}>
							<Paper>{data.getRandomDrink.name}</Paper>
						</Grid>
						<Grid item>
							<Paper>{data.getRandomDrink.desc}</Paper>
						</Grid>
						<Grid item>
							<img src={`${data.getRandomDrink.img}`} className={classes.img} />
						</Grid>
						<Grid container item className={classes.ingredients}>
							<Grid item>INGREDIENTS{mappedIngredients}</Grid>
							<Grid item>AMOUNT{mappedAmounts}</Grid>
						</Grid>
					</Grid>
				)
			}}
		</Query>
	)
}
