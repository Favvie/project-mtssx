import React from "react";
import { Container, Box, Button, ButtonGroup } from "@chakra-ui/react";

const Home = () => {
	return (
		<Container>
			<Box as="nav">
				<Heading className="logo">PMTS</div>

				<Box>
					<Button>Create new task</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default Home;
