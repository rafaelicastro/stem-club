import { AspectRatio, Button, Container, Flex, Heading, Highlight, HStack, Image, Grid, Link, Stack, Text } from '@chakra-ui/react';
import { EmailIcon, InfoIcon } from '@chakra-ui/icons';
import { NavBar } from '../Components/NavBar';
import Logo from '../Images/logo.png';
import { Link as RouterLink } from 'react-router-dom';

export function Home() {
	if (window.innerWidth > 900) {
		return (
			<>
				<NavBar />
				<Grid
					templateColumns='repeat(2, 1fr)'
					gap={"2%"}
				>
				<Stack
						textAlign={'center'}
						align={'center'}
						spacing={'20.5%'}
						py={{ base: 20, md: 20 }}
					>
						<Heading
							fontWeight={600}
							fontSize={'6xl'}
							lineHeight={'110%'}
						>
							Hackley{' '}
							<Highlight
								query='STEM'
								styles={{ px: '5', py: '2', rounded: 'full', bg: 'yellow.400' }}
							>
								STEM
							</Highlight>
						</Heading>
						<Text color={'gray.500'} maxW={'3xl'} px={5} fontSize={'2xl'}>
							Hackley STEM is a club dedicated to sharing ideas about STEM at Hackley School!
							To learn more about us and how to properly utilize this club or to request a presentation,
							click 'Learn More', or dive straight into our collection of slideshows
							about anything in STEM.
						</Text>
						<HStack spacing={20}>
							<RouterLink to={'/about'}>
								<Button bg={'#f3d503'} leftIcon={<InfoIcon />}>Learn More</Button>
							</RouterLink>
							<Link href={'mailto:rcastro@students.hackleyschool.org'}>
								<Button bg={'#f3d503'} leftIcon={<EmailIcon />}>Contact Us</Button>
							</Link>
						</HStack>
					</Stack>
					<Flex>
						<Container
							textAlign={'center'}
							align={'center'}
							py={{ base: 20, md: 20 }}
						>
							<AspectRatio ratio={1 / 1}>
								<Image src={Logo} />
							</AspectRatio>
						</Container>
					</Flex>
				</Grid>
			</>
		);
	}
	else {
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
						</Heading>
						<Flex w={'300px'}>
							<Image src={Logo}></Image>
						</Flex>
						<Text color={'gray.500'} maxW={'3xl'}>
							Hackley STEM is a club dedicated to sharing ideas about STEM at Hackley School!
							To learn more about us and how to properly utilize this club or to request a presentation,
							click 'Learn More', or dive straight into our collection of slideshows
							about anything in STEM.
						</Text>
						<HStack spacing={10}>
							<RouterLink to={'/about'}>
								<Button bg={'#f3d503'} leftIcon={<InfoIcon />}>Learn More</Button>
							</RouterLink>
							<Link href={'mailto:rcastro@students.hackleyschool.org'}>
								<Button bg={'#f3d503'} leftIcon={<EmailIcon />}>Contact Us</Button>
							</Link>
						</HStack>
					</Stack>
				</Container>
			</>
		);
	}
}