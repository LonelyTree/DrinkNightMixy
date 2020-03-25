import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Menu from './components/menu'
import { RandomDrink } from './components/randomDrink'

const client = new ApolloClient({
	uri: 'https://mixy-apollo-server.herokuapp.com/',
})

//TODO:
// 1. Query ingredients - X
// 2. Create full drink page -X
// 3. Media Queries for responsive design -
// 4. Cosmetic design of website -
// 5. Ship -

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='App'>
				<Menu />
				{RandomDrink()}
			</div>
		</ApolloProvider>
	)
}

export default App
