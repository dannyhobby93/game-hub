import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
	return (
		<div className='App'>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`, // 1024
				}}
			>
				<GridItem area='nav' bg='coral'>
					Nav
				</GridItem>
				<Show above='lg'>
					<GridItem area='aside' bg='gold;'>
						Aside
					</GridItem>
				</Show>
				<GridItem area='main' bg='blue;'>
					Main
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
