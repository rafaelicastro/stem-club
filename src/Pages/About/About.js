import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { NavBar } from '../../Components/NavBar';

export function About() {
	return (
		<>
			<NavBar />
			<Container maxW={'container.sm'}>
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
						About
					</Heading>
					<Text color={'gray.500'} maxW={'3xl'}>
						Hackley STEM Club is a space to be able to share ideas in STEM that aren't traditionally gone over in the school system.
                        Members (at Hackley School) will prepare presentations, and email them (preferrably using the form below)
                        to Rafael Castro at rcastro@students.hackleyschool.org at least 24 hours before their presentation.
                        Students may present during the allotted club time.
                        <br /> <br />
                        A goal that the Hackley STEM Club is trying to accomplish is to increase the amount that students know about
                        STEM in general, not just at Hackley. Therefore, while they may not present (for obvious reasons), we invite
                        students from other schools who are interested in STEM to look at our website, as all the presentations
                        will be on here.
					</Text>
				</Stack>
			</Container>
		</>
	);
}
