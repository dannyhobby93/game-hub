import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className='App'>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`, // 1024
				}}
			>
				<GridItem area='nav'>
					<Navbar />
				</GridItem>
				<Show above='lg'>
					<GridItem area='aside'>Aside</GridItem>
				</Show>
				<GridItem area='main'>
					<GameGrid />
				</GridItem>
			</Grid>
		</div>
	);
}

export default App;
