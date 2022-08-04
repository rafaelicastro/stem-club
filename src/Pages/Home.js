import { Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { NavBar } from '../Components/NavBar';
import Logo from '../Images/logo.png';

export function Home() {
	return (
		<>
			<NavBar />
			<Container maxW={'5xl'}>
				<Stack
					textAlign={'center'}
					align={'center'}
					spacing={{ base: 8, md: 20 }}
					py={{ base: 20, md: 20 }}
				>
                    <Heading
						fontWeight={600}
						fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}
					>
						Hackley{' '}
						<Text as={'span'} color={'yellow.400'}>
							STEM
						</Text>
                        {' '}Club
					</Heading>
                    <Flex w={'300px'}>
						<Image src={Logo}></Image>
					</Flex>
					<Text color={'gray.500'} maxW={'3xl'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</Stack>
			</Container>
		</>
	);
}
