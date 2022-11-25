import React from "react";
import {
	Container,
	Box,
	Stack,
	Heading,
	Flex,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	SimpleGrid,
	Text,
	Button,
	Checkbox,
	Icon,
	Spacer,
	HStack,
} from "@chakra-ui/react";
import Nav from "./Nav";

import { AiOutlineUser } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";

const Home = () => {
	return (
		<Box>
			<Nav />
			<Flex>
				<Box height="100vh" bg="red.400" width="20%">
					<Heading paddingInline="20px" paddingBlock="10px">
						My boards
					</Heading>
					<Stack paddingLeft="20px" flexDirection="column" paddingTop="30px">
						<Flex alignItems="center" bg="blue.300" padding="20px">
							<Icon as={MdDashboard} mr="10px" />
							Organization board 1
						</Flex>
						<Flex alignItems="center" padding="20px">
							<Icon as={MdDashboard} mr="10px" />
							Organization board 1
						</Flex>
						<Flex alignItems="center" padding="20px">
							<Icon as={MdDashboard} mr="10px" />
							Organization board 1
						</Flex>
					</Stack>
				</Box>
				<Box padding="20px">
					<Heading>Organization board 1</Heading>
					<Stack pt="20px" spacing="20px" direction="row">
						<Box>
							<Text>To Do Block</Text>
							<Flex>
								<Stack
									pt="20px"
									spacing={4}
									templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
								>
									<Card>
										<CardHeader>
											<Heading size="md"> Customer dashboard</Heading>
										</CardHeader>
										<CardBody>
											<Text>
												View a summary of all your customers over the last
												month.
											</Text>
										</CardBody>
										<CardFooter>
											<Flex alignItems="center">
												<Icon as={AiOutlineUser} mr="5px" />
												<Text>Assignee</Text>
											</Flex>
											<Spacer />
											<Checkbox colorScheme="red" defaultChecked>
												Checkbox
											</Checkbox>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<Heading size="md"> Customer dashboard</Heading>
										</CardHeader>
										<CardBody>
											<Text>
												View a summary of all your customers over the last
												month.
											</Text>
										</CardBody>
										<CardFooter>
											<Flex alignItems="center">
												<Icon as={AiOutlineUser} mr="5px" />
												<Text>Assignee</Text>
											</Flex>
											<Spacer />
											<Checkbox colorScheme="red" defaultChecked>
												Checkbox
											</Checkbox>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<Heading size="md"> Customer dashboard</Heading>
										</CardHeader>
										<CardBody>
											<Text>
												View a summary of all your customers over the last
												month.
											</Text>
										</CardBody>
										<CardFooter>
											<Flex alignItems="center">
												<Icon as={AiOutlineUser} mr="5px" />
												<Text>Assignee</Text>
											</Flex>
											<Spacer />
											<Checkbox colorScheme="red" defaultChecked>
												Checkbox
											</Checkbox>
										</CardFooter>
									</Card>
								</Stack>
							</Flex>
						</Box>
						<Box>
							<Text>Doing Block</Text>
							<Flex>
								<Stack
									pt="20px"
									spacing={4}
									templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
								>
									<Card>
										<CardHeader>
											<Heading size="md"> Customer dashboard</Heading>
										</CardHeader>
										<CardBody>
											<Text>
												View a summary of all your customers over the last
												month.
											</Text>
										</CardBody>
										<CardFooter>
											<Flex alignItems="center">
												<Icon as={AiOutlineUser} mr="5px" />
												<Text>Assignee</Text>
											</Flex>
											<Spacer />
											<Checkbox colorScheme="red" defaultChecked>
												Checkbox
											</Checkbox>
										</CardFooter>
									</Card>
								</Stack>
							</Flex>
						</Box>
					</Stack>
				</Box>
			</Flex>
		</Box>
	);
};

export default Home;
