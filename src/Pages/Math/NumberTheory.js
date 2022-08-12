import { Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';
import { Slide } from '../../Components/Slide';

export function NumberTheory() {
	return (
		<>
			<NavBar />
			<Container maxW={'5xl'}>
				<Stack
					textAlign={'center'}
					align={'center'}
					spacing={{ base: 8, md: 20 }}
					py={{ base: 7, md: 7 }}
				>
                    <Heading
                        textAlign={'center'} align={'center'}
                        fontWeight={600}
                        fontSize={{ base: '4xl', sm: '5xl', md: '1xl' }}
                        lineHeight={'110%'}
                    >
                        <Text as={'span'} color={'blue.400'}>Number Theory</Text>
                    </Heading>

                    <VStack align={"center"} spacing={150}>
                        <Slide title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="https://docs.google.com/presentation/d/1-IyBCMHnuoH5M5hNzZ37sQEvxT7PM4VyMORxeNNMQHo/edit#slide=id.p"/>
                        <Slide title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="https://docs.google.com/presentation/d/1-IyBCMHnuoH5M5hNzZ37sQEvxT7PM4VyMORxeNNMQHo/edit#slide=id.p"/>
                        <Slide title={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." link="https://docs.google.com/presentation/d/1-IyBCMHnuoH5M5hNzZ37sQEvxT7PM4VyMORxeNNMQHo/edit#slide=id.p"/>
                    </VStack>
				</Stack>
			</Container>
		</>
	);
}