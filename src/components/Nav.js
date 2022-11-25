import React from "react";
import {
	Box,
	Flex,
	Button,
	Heading,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Select,
	Text,
} from "@chakra-ui/react";

const Nav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef(null);
	return (
		<Flex
			as="nav"
			justifyContent="space-between"
			margin="auto"
			padding="5"
			bg="red.300"
			paddingInline="100px"
		>
			<Heading>PMTS</Heading>

			<Box>
				<Button onClick={onOpen}>Create new task</Button>

				<Modal
					initialFocusRef={initialRef}
					// finalFocusRef={finalRef}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Create a new task</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Title of the task</FormLabel>
								<Input ref={initialRef} placeholder="Title" />
							</FormControl>

							<FormControl mt={6}>
								<FormLabel>Description (optional)</FormLabel>
								<Textarea placeholder="Describe the task"></Textarea>
							</FormControl>

							<Heading as="h3" size={2} mt={6} mb={2} fontWeight="semibold">
								Assignee
							</Heading>
							<Select placeholder="Select assignee">
								<option value="option1">user 1</option>
								<option value="option2">user 2</option>
								<option value="option3">user 3</option>
							</Select>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="red" mr={3}>
								Create task
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</Flex>
	);
};

export default Nav;
