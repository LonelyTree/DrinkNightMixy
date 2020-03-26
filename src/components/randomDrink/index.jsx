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
				if (loading) return <p className={classes.loading}>Loading...</p>
				if (error) return <p>Error :(</p>
				const mappedIngredients = data.getRandomDrink.ingredients.map(
					(ingredient) => {
						return (
							<Paper key={ingredient} className={classes.item}>
								{ingredient}
							</Paper>
						)
					}
				)
				const mappedAmounts = data.getRandomDrink.measurement.map((measure) => {
					return (
						<Paper key={measure} className={classes.item}>
							{measure}
						</Paper>
					)
				})

				return (
					<Grid container id={data.getRandomDrink.id} className={classes.root}>
						<Grid item className={classes.titleContainer}>
							<div className={classes.title}>{data.getRandomDrink.name}</div>
						</Grid>
						<Grid item className={classes.descContainer}>
							<div className={classes.desc}>{data.getRandomDrink.desc}</div>
						</Grid>
						<Grid item>
							<img src={`${data.getRandomDrink.img}`} className={classes.img} />
						</Grid>
						<Grid container item className={classes.ingredients}>
							<Grid item>
								<h1 className={classes.itemTitle}>INGREDIENTS</h1>
								{mappedIngredients}
							</Grid>
							<Grid item>
								<h1 className={classes.itemTitle}>AMOUNT</h1>
								{mappedAmounts}
							</Grid>
						</Grid>
					</Grid>
				)
			}}
		</Query>
	)
}
