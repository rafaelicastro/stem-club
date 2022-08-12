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
						Hackley STEM Club is run by Rafael Castro and Jimmy Mulosmani at Hackley, and meets once every eight days.
						To learn more about us and how to properly utilize this club,
						click on the 'about' section at the top, or dive straight into our collection of slideshows about ANYTHING in STEM.
					</Text>
				</Stack>
			</Container>
		</>
	);
}
